<template>
  <LoadingCustom :tempIsLoading="isLoading"></LoadingCustom>
  <div class="container my-5">
    <div class="row text-center">
      <div class="col-md-4">
        <div class="alert bg-primary alert-rounded mx-4 fw-bolder" role="alert"><i class="bi bi-menu-button-wide-fill"></i> 1.填寫資料</div>
      </div>
      <div class="col-md-4">
        <div class="alert bg-dark alert-rounded text-primary mx-4" role="alert"><i class="bi bi-credit-card-2-back"></i> 2.付款</div>
      </div>
      <div class="col-md-4">
        <div class="alert bg-dark alert-rounded text-primary mx-4" role="alert"><i class="bi bi-file-check-fill"></i> 3.完成訂單</div>
      </div>
    </div>
    <div class="row">
      <div class="buyer p-3">
        <h3 class="text-center text-white">商品明細</h3>
        <br />
        <table class="table text-white text-center">
          <thead class="mb-4 p-2 bg-primary text-dark fs-5">
            <th class="fw-bolder p-2">品名</th>
            <th class="fw-bolder p-2">數量</th>
            <th class="fw-bolder p-2">價格</th>
          </thead>
          <tbody>
            <tr v-for="item in carts" :key="item.id">
              <td>{{ item.product.title}}</td>
              <td>{{ item.qty}}</td>
              <td>{{ item.final_total}}</td>
            </tr>
          </tbody>
          <br />
          <tfoot>
            <tr>
              <td colspan="2" class="text-center h4 p-2">總計</td>
              <td class="text-center h4 p-2">${{cart.final_total}}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="text-white ps-5 pe-5 mx-auto mt-5" style="max-width: 800px;">
        <vform class="mt-3" v-slot="{ errors }" @submit="createdOrder">
          <h3 class="text-center">聯絡人資訊</h3>
          <div class="form-group my-2">
            <label for="useremail"><i class="bi bi-envelope-fill"></i> 電子郵件 (*必填)</label>
            <vfield type="email" class="form-control" name="email" id="useremail" placeholder="請輸入 Email" rules="email|required" :class="{'is-invalid': errors.email}" v-model="form.user.email"></vfield>
            <error-message class="text-danger" name="email">
              <p class="text-warning"><i class="bi bi-exclamation-circle-fill"></i> 電子郵件格式不符</p>
            </error-message>
          </div>
          <div class="form-group my-2">
            <label for="username"><i class="bi bi-person-fill"></i> 收件人姓名 (*必填)</label>
            <vfield type="text" class="form-control" name="name" id="username" placeholder="輸入姓名" :rules="isRequired" v-model="form.user.name"></vfield>
            <error-message class="text-danger" name="name">
              <p class="text-warning"><i class="bi bi-exclamation-circle-fill"></i> 姓名欄位不得為空</p>
            </error-message>
          </div>
          <div class="form-group my-2">
            <label for="userphone"><i class="bi bi-telephone-fill"></i> 收件人電話 (*必填)</label>
            <vfield type="tel" class="form-control" name="tel" id="tel" placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></vfield>
            <error-message class="text-danger" name="tel">
              <p class="text-warning"><i class="bi bi-exclamation-circle-fill"></i> 需要正確的電話號碼</p>
            </error-message>
          </div>
          <div class="form-group my-2">
            <label for="useraddress"><i class="bi bi-house-door-fill"></i> 收件人地址 (*必填)</label>
            <vfield type="text" class="form-control" name="address" id="useraddress" placeholder="請輸入地址" :rules="isRequired" v-model="form.user.address"></vfield>
            <error-message class="text-danger" name="address">
              <p class="text-warning"><i class="bi bi-exclamation-circle-fill"></i> 地址欄位不得為空</p>
            </error-message>
          </div>
          <div class="form-group">
            <label for="comment"><i class="bi bi-chat-square-text"></i> 留言</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <br />
          <div class="row">
            <div class="col-sm-6 text-center">
              <button type="button" class="btn btn-outline-light btn-lg fs-4 border-5 fw-bolder my-2" @click="toPrevious"><i class="bi bi-arrow-left-square-fill"></i> 回上一頁</button>
            </div>
            <div class="col-sm-6 text-center">
              <button type="submit" class="btn btnCustom fs-4 fw-bolder border-5 btn-lg my-2">送出訂單 <i class="bi bi-arrow-right-square-fill"></i></button>
            </div>
          </div>
        </vform>
      </div>
    </div>
  </div>
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
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    isRequired (value) {
      return value ? true : 'message'
    },
    isPhone (value) {
      const phoneNum = /^(09)[0-9]{8}$/
      return phoneNum.test(value) ? true : '需要正確的電話號碼'
    },
    createdOrder () {
      this.$store.dispatch('updateLoading', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((res) => {
        this.$store.dispatch('updateLoading', false)
        this.$router.push(`/checkout/${res.data.orderId}`)
      })
    },
    toPrevious () {
      this.$router.push('/order')
      document.documentElement.scrollTop = 0
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_userInformation";
</style>
