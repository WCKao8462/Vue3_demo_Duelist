<template>
  <LoadingCustom :tempIsLoading="isLoading"></LoadingCustom>
  <div class="container my-5">
    <div class="row text-center">
      <div class="col-md-4">
        <div class="alert bg-dark alert-rounded text-primary mx-4" role="alert"><i class="bi bi-menu-button-wide-fill"></i> 1.填寫資料</div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-rounded mx-4" role="alert" :class="{'bg-primary fw-bolder':!order.is_paid, 'bg-dark text-primary': order.is_paid}"><i class="bi bi-credit-card-2-back"></i> 2.付款</div>
      </div>
      <div class="col-md-4">
        <div class="alert alert-rounded mx-4" role="alert" :class="{'bg-primary fw-bolder':order.is_paid, 'bg-dark text-primary': !order.is_paid}"><i class="bi bi-file-check-fill"></i> 3.完成訂單</div>
      </div>
    </div>
    <br>
      <form class="px-2" @submit.prevent="payOrder(order.id)">
        <div class="row">
          <div class="col-md-6">
            <div class="buyer p-3 my-3">
              <h3 class="text-center text-white">商品明細</h3>
              <br>
              <table class="table text-white text-center">
                <thead class="mb-4 p-2 bg-primary text-dark fs-5">
                  <th class="fw-bolder p-2">品名</th>
                  <th class="fw-bolder p-2">數量</th>
                  <th class="fw-bolder p-2">價格</th>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td>{{ item.product.title}}</td>
                    <td>{{ item.qty}}</td>
                    <td>$ {{ item.final_total}}</td>
                  </tr>
                </tbody>
                <br>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-center h4 p-2">總計</td>
                    <td class="text-center h4 p-2">$ {{order.total}}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="col-md-6">
            <div class="buyer p-3 my-3">
              <h3 class="text-center text-white">聯絡人資料</h3>
              <br>
              <table class="table text-white w-100 text-break">
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="col-sm-4 p-1 fs-5">Email:</th>
                  <td class="col-sm-8 p-1 text-wrap text-center"> {{order.user.email}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class=" col-sm-4 p-1 fs-5">姓名:</th>
                  <td class="col-sm-8 p-1 text-center">{{order.user.name}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="col-sm-4 p-1 fs-5">收件人電話:</th>
                  <td class="col-sm-8 p-1 text-center">{{order.user.tel}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="col-sm-4 p-1 fs-5">收件人地址:</th>
                  <td class="col-sm-8 p-1 text-center">{{order.user.address}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="col-sm-4 p-1 fs-5">備註:</th>
                  <td class="col-sm-8 p-1 text-center">{{order.message}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="col-sm-4 p-1 fs-5">付款狀態:</th>
                  <td class="col-sm-8 p-1 text-center">
                    <span class="text-warning" v-if="!order.is_paid">尚未付款</span>
                    <span class="text-success" v-else>付款完成</span>
                  </td>
                </tr>
                <br />
                <tr class="py-3 w-100 row g-0 border-bottom border-white" v-if="order.is_paid">
                  <th class="col-sm-4 p-1 fs-5">訂單編號:</th>
                  <td class="col-sm-8 p-1 text-center">{{order.id}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="display-4 text-center text-warning pt-5" v-if="order.is_paid">謝謝惠顧</div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btnCustom btn-lg" v-if="order.is_paid === false">確認付款去 <i class="bi bi-arrow-right-square-fill"></i></button>
          <button type="button" class="btn btn-outline-light btn-lg fs-4" @click="toProducts" v-else>繼續逛逛 <i class="bi bi-basket2-fill"></i></button>
        </div>
      </form>
  </div>
</template>

<script>
import LoadingCustom from '@/components/front/LoadingCustom.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    LoadingCustom
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    order () {
      return this.$store.state.order
    }
  },
  methods: {
    getOrder (orderId) {
      this.$store.dispatch('getOrder', orderId)
    },
    payOrder (orderId) {
      this.$store.dispatch('payOrder', orderId)
    },
    toProducts () {
      this.$router.push('/product')
      document.documentElement.scrollTop = 0
    }
  },
  created () {
    this.getOrder(this.$route.params.orderId)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/viewScss/_userCheckout";
</style>
