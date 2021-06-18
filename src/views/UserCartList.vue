<template>
  <div class="d-flex justify-content-around container-fluid my-3">
    <div class="col-6 mx-2">
      <h3 class="text-center">購物車清單</h3>
        <table class="table align-middle mt-3 text-white">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 110px">數量</th>
              <th class="text-center">單價</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="deleteCart(item.id)"
                >
                  <i class="bi bi-x"></i>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success">已套用優惠券</div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    max="10"
                    v-model.number="item.qty"
                    @change="updateCart(item)"
                    :disabled="item.id === status.loadingItem"
                  />
                  <div class="input-group-text">/ 張</div>
                </div>
              </td>
              <td class="text-center">
                {{ item.total }}
              </td>
              <td class="text-center">
                <small class="text-success"
                  >折扣價：{{ item.final_total }}</small
                >
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入優惠碼"
            v-model="couponCode"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
    </div>
    <div class="row justify-content-center col-6 mx-3 text-white">
      <h3 class="text-center">聯絡人資訊</h3>
      <vform class="mt-3" v-slot="{ errors }" @submit="createdOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <vfield type="email" class="form-control" name="email" id="useremail"
          placeholder="請輸入 Email" rules="email|required" :class="{'is-invalid': errors.email}"
          v-model="form.user.email"></vfield>
          <error-message class="text-danger" name="email">電子郵件格式不符</error-message>
        </div>
        <div class="form-group">
          <label for="username">收件人姓名</label>
          <vfield type="text" class="form-control" name="name" id="username"
            placeholder="輸入姓名" :rules="isRequired"
            v-model="form.user.name"></vfield>
          <error-message class="text-danger" name="name">姓名欄位不得留空</error-message>
        </div>
        <div class="form-group">
          <label for="userphone">收件人電話</label>
          <vfield type="tel" class="form-control" name="tel" id="tel"
          placeholder="請輸入電話" :rules="isPhone"
          v-model="form.user.tel"></vfield>
          <error-message class="text-danger" name="tel"></error-message>
        </div>
        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <vfield type="text" class="form-control" name="address" id="useraddress"
            placeholder="請輸入地址" :rules="isRequired"
            v-model="form.user.address"></vfield>
          <error-message class="text-danger" name="address">地址欄位不得留空</error-message>
        </div>
        <div class="form-group">
          <label for="comment">留言</label>
          <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="d-grid mt-4">
          <button class="btn btn-danger" type="submit">送出訂單</button>
        </div>
      </vform>
    </div>
  </div>
  <div class="footer d-flex">
      <ul class="text-white my-3 container-fluid">
        <li>
          聯絡我們 :
          <a href="mail:xxxxxx@mail.com">xxxxxx@mail.com</a>
        </li>
        <li>
          電話 :
          <a href="tel:0912345678">0912345678</a>
        </li>
      </ul>
    </div>
</template>

<script>
import { defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

export default {
  data () {
    return {
      cart: [],
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
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
      })
    },
    deleteCart (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        this.getCart()
      })
    },
    updateCart (item) {
      this.isLoading = true
      this.status.loadingItem = item.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res)
        this.isLoading = false
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
      return value ? true : 'This field is required'
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
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style scoped>
.container-fluid{
  max-width: 1140px;
}
.footer {
  background-color: #57507d;;
  height: auto;
}
.footer li {
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
