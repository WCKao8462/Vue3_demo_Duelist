<template>
  <loadingCustom :tempIsLoading="isLoading"></loadingCustom>
  <div class="container mt-5 mb-5" v-if="true">
    <div class="row text-center mb-5">
      <div class="col-md-4">
        <div class="alert alert-success alert-rounded" role="alert">
          <i class="bi bi-menu-button-wide-fill"></i> 1.填寫資料
        </div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-primary alert-rounded" role="alert">
          <i class="bi bi-credit-card-2-back"></i> 2.付款
        </div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-primary alert-rounded" role="alert">
          <i class="bi bi-file-check-fill"></i> 3.完成訂單
        </div>
      </div>
    </div>
    <div class="productList ps-3 pe-3 mt-3 mx-auto" style="max-width: 800px;">
      <div class="row">
        <div class="col-sm-6">
          <button class="btn btn-outline-primary btn-lg my-2 p-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">顯示牌組清單</button>
        </div>
        <div class="col-sm-6">
          <button class="btn btn-outline-success my-2 p-2 btn-lg w-100" @click="toProducts">繼續選購</button>
        </div>
      </div>
      <br>
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="mx-2">
          <p class="text-warning" v-if="cart.final_total !== cart.total">已套用優惠卷，若有重新選購請再重新輸入優惠碼</p>
          <div class="card mb-4 text-white m-auto w-100" style="background-color: #000;" v-for="item in carts" :key="item.id">
            <div class="row align-items-center">
              <div class="col-sm-4 col-6 text-center p-2">
                <div :style="{ backgroundImage: `url(${item.product.imageUrl})` }" class="cardImg mx-auto text-center d-none d-sm-block"></div>
                <h5 class="card-title text-center">{{ item.product.title }}</h5>
              </div>
              <div class="col-sm-2 col-6 text-center p-2">
                <p :class="{ 'text-decoration-line-through': item.final_total !== item.total }">$ {{ item.total }}</p>
                <p class="text-warning" v-if="item.final_total !== item.total">$ {{ item.final_total }}</p>
              </div>
              <div class="col-sm-4 col-12">
                <div class="card-body">
                  <div class="input-group input-group-sm my-1 py-2 flex-nowrap">
                    <button class="input-group-text btnNum" @click="handleSub(item, item.qty)"><i class="bi bi-dash-lg"></i></button>
                    <input size="2" type="number" class="numText text-center" min="0" max="99" v-model.number="item.qty" @change="updateCart(item, item.qty)" disabled />
                    <button class="input-group-text btnNum" @click="handlePlus(item, item.qty)"><i class="bi bi-plus-lg"></i></button>
                  </div>
                </div>
              </div>
              <div class="col-sm-2 col-12 text-center">
                <button type="button" class="btn btn-outline-danger btn-lg p-2 mb-2" @click="removeCart(item.id)"><i class="bi bi-x"></i>移除</button>
              </div>
            </div>
          </div>
          <div class="m-auto p-2" style="max-width: 600px">
            <h4 class="text-white text-end" :class="{ 'text-decoration-line-through': cart.final_total !== cart.total }">總計 $ {{ cart.total }}</h4>
            <h4 class="text-warning text-end" v-if="cart.final_total !== cart.total">折扣價 $ {{ cart.final_total }}</h4>
          </div>
          <div class="input-group mb-3 input-group-sm m-auto" style="max-width: 600px">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <hr class="text-white">
    <div class="row">
      <div class="text-white ps-5 pe-5 mx-auto mt-5" style="max-width: 800px">
        <vform class="mt-3" v-slot="{ errors }" @submit="createdOrder">
          <h3 class="text-center">聯絡人資訊</h3>
          <div class="form-group my-2">
            <label for="useremail"><i class="bi bi-envelope-fill"></i> 電子郵件</label>
            <vfield type="email" class="form-control" name="email" id="useremail" placeholder="請輸入 Email" rules="email|required" :class="{'is-invalid': errors.email}" v-model="form.user.email"></vfield>
            <error-message class="text-danger" name="email">
              <p class="text-danger"><i class="bi bi-exclamation-circle-fill"></i>電子郵件格式不符</p>
            </error-message>
          </div>
          <div class="form-group my-2">
            <label for="username"><i class="bi bi-person-fill"></i> 收件人姓名</label>
            <vfield type="text" class="form-control" name="name" id="username" placeholder="輸入姓名" :rules="isRequired" v-model="form.user.name"></vfield>
            <error-message class="text-danger" name="name">
              <p class="text-danger"><i class="bi bi-exclamation-circle-fill"></i>姓名欄位不得為空</p>
            </error-message>
          </div>
          <div class="form-group my-2">
            <label for="userphone"><i class="bi bi-telephone-fill"></i> 收件人電話</label>
            <vfield type="tel" class="form-control" name="tel" id="tel" placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></vfield>
            <error-message class="text-danger" name="tel">
              <p class="text-danger"><i class="bi bi-exclamation-circle-fill"></i>需要正確的電話號碼</p>
            </error-message>
          </div>
          <div class="form-group my-2">
            <label for="useraddress"><i class="bi bi-house-door-fill"></i> 收件人地址</label>
            <vfield type="text" class="form-control" name="address" id="useraddress" placeholder="請輸入地址" :rules="isRequired" v-model="form.user.address"></vfield>
            <error-message class="text-danger" name="address">
              <p class="text-danger"><i class="bi bi-exclamation-circle-fill"></i>地址欄位不得為空</p>
            </error-message>
          </div>
          <div class="form-group">
            <label for="comment"><i class="bi bi-chat-square-text"></i> 留言</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <br>
          <div class="d-grid mt-4">
            <button class="btn btn-danger btn-lg" type="submit">送出訂單</button>
          </div>
        </vform>
      </div>
    </div>
  </div>
  <section v-else>
    <div class="card m-auto mt-5 mb-5 bg-dark text-white" style="max-width: 400px;">
      <h2 class="p-2">牌抽光了???</h2>
      <img src="../../assets/pic/Joey.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p>沒有卡片怎麼成為決鬥者呢??</p>
        <p>快回去選購吧!!</p>
      </div>
      <button class="btn btn-outline-success m-2 py-3" @click="toProducts">繼續選購</button>
    </div>
  </section>
</template>

<script>
import { defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import loadingCustom from '../../components/front/LoadingCustom.vue'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

export default {
  data () {
    return {
      // cart: [],
      // isLoading: false,
      status: {
        loadingItem: ''
      },
      couponCode: '',
      form: {
        user: {
          email: '',
          name: '',
          address: '',
          tel: ''
        },
        message: ''
      },
      CartIsEmpty: true
    }
  },
  components: {
    loadingCustom
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    cart () {
      return this.$store.state.cart
    },
    carts () {
      return this.$store.state.cart.carts
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
    },
    updateCart (item, tempQty) {
      this.$store.dispatch('updateLoading', true)
      this.status.loadingItem = item.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.id,
        qty: tempQty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        this.$store.dispatch('updateLoading', false)
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        console.log(res)
        this.getCart()
      })
    },
    isRequired (value) {
      return value ? true : 'message'
    },
    isPhone (value) {
      const phoneNum = /^(09)[0-9]{8}$/
      return phoneNum.test(value) ? true : '需要正確的電話號碼'
    },
    createdOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res)
        this.$router.push(`/checkout/${res.data.orderId}`)
      })
    },
    handlePlus (item, qty) {
      let tempQty = qty
      if (tempQty < 99) {
        tempQty++
        this.updateCart(item, tempQty)
      }
    },
    handleSub (item, qty) {
      let tempQty = qty
      if (tempQty > 1) {
        tempQty--
        this.updateCart(item, tempQty)
      }
    },
    toProducts () {
      this.$router.push('/product')
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped>
.container{
  max-width: 1140px;
}
.alert-rounded{
  border-radius: 50px;
}
.alert-success{
  background-color: #ddd;
  color: #333;
}
.alert-primary{
  background-color: #333;
  color: #ddd;
}
.form-control{
  /* border: 1px solid #fff; */
  color: #fff;
  background-color: #000;
}
.numText{
  max-width: 60px;
  background-color: #000;
  color: #fff;
}
.btnNum{
  background-color:purple;
  /* border: 2px solid #fff; */
  color: #fff;
}
.count{
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.cardImg{
  background-color: #000;
  width: 100px;
  height: 100px;
  background-size: 100%;
  background-position: 50% 40%;
  background-repeat: no-repeat;
}
.numText{
  width: 100px;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
}
.btnNum{
  background-color:purple;
  border: 1px solid #fff;
  color: #fff;
}
.input-group{
  width: 100%;
  justify-content: center;
}
.card{
  border: 2px solid #fff;
}
</style>
