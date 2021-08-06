<template>
  <LoadingCustom :tempIsLoading="isLoading"></LoadingCustom>
  <div class="container my-5" v-if="cartNum !== 0">
    <h3 class="text-center text-white my-4">牌組清單</h3>
    <div class="productList ps-3 pe-3 mt-3 mx-auto" style="max-width: 960px;">
      <div class="mx-2 w-100">
        <p class="text-warning" v-if="cart.final_total !== cart.total">已套用優惠卷，若有重新選購請再重新輸入優惠碼</p>
        <div class="card mb-4 text-white m-auto border-primary" style="background-color: #000;" v-for="item in carts" :key="item.id">
          <div class="row align-items-center">
            <div class="col-sm-2 text-center">
              <div :style="{ backgroundImage: `url(${item.product.imageUrl})` }" class="cartImg mx-auto text-center d-none d-sm-block"></div>
            </div>
            <div class="col-sm-2 col-7 mx-auto">
              <p class="h5 card-title text-center my-auto">{{ item.product.title }}</p>
            </div>
            <div class="col-sm-3 col-5">
              <p class="h5 my-auto mx-3 py-2 text-center" :class="{ 'text-decoration-line-through': item.final_total !== item.total }" v-if="item.final_total === item.total">$ {{ item.total }}</p>
              <p class="h5 text-warning my-auto py-2 text-center" v-else>$ {{ item.final_total }}</p>
            </div>
            <div class="col-sm-3 col-8">
              <div class="input-group input-group-sm my-1 py-2 flex-nowrap px-2 w-100 justify-content-center">
                <button type="button" class="input-group-text bg-primary text-dark border-white" @click="handleSub(item, item.qty)"><i class="bi bi-dash-lg"></i></button>
                <input size="2" type="number" class="numText text-center" min="0" max="99" v-model.number="item.qty" @change="updateCart(item, item.qty)" disabled />
                <button type="button" class="input-group-text bg-primary text-dark border-white" @click="handlePlus(item, item.qty)"><i class="bi bi-plus-lg"></i></button>
              </div>
            </div>
            <div class="col-sm-2 col-4 text-center">
              <button type="button" class="btn btn-outline-danger btn-md m-3" @click="removeCart(item.id, item.product.title)"><i class="bi bi-trash-fill fs-6"></i></button>
            </div>
          </div>
        </div>
        <div class="m-auto my-0" style="max-width: 600px;">
          <p class="text-white text-end h4 py-2" :class="{ 'text-decoration-line-through': cart.final_total !== cart.total }" v-if="cart.final_total === cart.total">總計 $ {{ cart.total }}</p>
          <p class="text-warning text-end h4 py-2" v-else>折扣價 $ {{ cart.final_total }}</p>
        </div>
        <div class="input-group input-group-sm m-auto py-4" style="max-width: 600px;">
          <input type="text" class="form-control text-white" placeholder="請輸入優惠碼" style="background-color: #000;" v-model="couponCode" />
          <div class="input-group-append">
            <button type="button" class="btn btn-outline-light btn-md" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 text-center"><button type="button" class="btn btn-outline-light btn-lg fs-4 border-5 fw-bolder my-2" @click="toProducts"><i class="bi bi-arrow-left-square-fill"></i> 繼續選購</button></div>
      <div class="col-sm-6 text-center"><button type="button" class="btn btnCustom fs-4 fw-bolder border-5 btn-lg my-2" @click="toUserInformation">確認訂單 <i class="bi bi-arrow-right-square-fill"></i></button></div>
    </div>
  </div>
  <section v-else>
    <div class="m-auto mt-5 mb-2 bg-dark text-white text-center" style="max-width: 400px;">
      <div class="h2 p-2 text-primary fw-bolder">牌抽光了???</div>
      <img src="../../assets/img/Joey.png" class="p-3 mb-3" alt="購物車沒東西" />
      <div class="h4 p-2 text-primary">
        <p>沒有卡片怎麼成為決鬥者呢??</p>
        <p>快回去選購吧!!</p>
      </div>
      <button type="button" class="d-block mx-auto btn btn-outline-light btn-lg fs-4 border-5 fw-bolder" @click="toProducts">我要買牌 <i class="bi bi-basket2-fill"></i></button>
    </div>
  </section>
</template>

<script>
import { defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import LoadingCustom from '@/components/front/LoadingCustom.vue'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

export default {
  data () {
    return {
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
      }
    }
  },
  components: {
    LoadingCustom
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
    },
    cartNum () {
      if (this.$store.state.cart.carts === undefined) {
        return 0
      } else {
        return this.$store.state.cart.carts.length
      }
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    removeCart (cardID, cardTitle) {
      const obj = {
        id: cardID,
        title: cardTitle
      }
      this.$store.dispatch('removeCart', obj)
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
        this.getCart()
        this.status.loadingItem = ''
        this.$store.dispatch('updateLoading', false)
      })
    },
    addCouponCode () {
      this.$store.dispatch('updateLoading', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.$http.post(url, { data: coupon }).then((res) => {
        if (res.data.success) {
          this.$store.dispatch('receiveMessage', {
            style: 'success',
            title: '已套用優惠券'
          })
          this.getCart()
        } else {
          this.$store.dispatch('receiveMessage', {
            style: 'danger',
            title: '優惠券套用失敗',
            content: '您的優惠券代碼無效'
          })
        }
        this.$store.dispatch('updateLoading', false)
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
    toUserInformation () {
      this.$router.push('/information')
      document.documentElement.scrollTop = 0
    },
    toProducts () {
      this.$router.push('/product')
      document.documentElement.scrollTop = 0
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_userCart";
</style>
