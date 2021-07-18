<template>
  <loadingCustom :tempIsLoading="isLoading"></loadingCustom>
  <div class="container-fluid my-5">
    <div class="row text-center">
      <div class="col-sm col-12">
        <div class="alert alert-primary alert-rounded" role="alert">
          1.填寫資料
        </div>
      </div>
      <div class="col-sm col-12">
        <div class="alert alert-rounded" role="alert" :class="{'alert-success':!order.is_paid, 'alert-primary': order.is_paid}">
          2.付款
        </div>
      </div>
      <div class="col-sm col-12">
        <div class="alert alert-rounded" role="alert" :class="{'alert-primary':!order.is_paid, 'alert-success': order.is_paid}">
          3.完成訂單
        </div>
      </div>
    </div>
    <br>
    <div class="display-4 text-center text-warning pt-5" v-if="order.is_paid">謝謝惠顧</div>
      <form class="px-2" @submit.prevent="payOrder(order.id)">
        <div class="row">
          <div class="col-md-6">
            <div class="buyer p-3 my-3">
              <h3 class="text-center text-white">商品明細</h3>
              <br>
              <table class="table text-white text-center">
                <thead class="mb-4 p-2">
                  <th class="text-info p-2">品名</th>
                  <th class="text-info p-2">數量</th>
                  <th class="text-info p-2">單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td>{{ item.product.title}}</td>
                    <td>{{ item.qty}}</td>
                    <td>{{ item.final_total}}</td>
                  </tr>
                </tbody>
                <br>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-center text-warning h4 p-2">總計</td>
                    <td class="text-center text-warning h4 p-2">{{order.total}}</td>
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
                  <th class="text-info col-sm-4 p-1">Email:</th>
                  <td class="col-sm-8 p-1 text-wrap"> {{order.user.email}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="text-info col-sm-4 p-1">姓名:</th>
                  <td class="col-sm-8 p-1">{{order.user.name}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="text-info col-sm-4 p-1">收件人電話:</th>
                  <td class="col-sm-8 p-1">{{order.user.tel}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="text-info col-sm-4 p-1">收件人地址:</th>
                  <td class="col-sm-8 p-1">{{order.user.address}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="text-info col-sm-4 p-1">備註:</th>
                  <td class="col-sm-8 p-1">{{order.message}}</td>
                </tr>
                <tr class="py-3 w-100 row g-0 border-bottom border-white">
                  <th class="text-info col-sm-4 p-1">付款狀態:</th>
                  <td class="col-sm-8 p-1">
                    <span v-if="!order.is_paid">尚未付款</span>
                    <span class="text-success" v-else>付款完成</span>
                  </td>
                </tr>
                <br />
                <tr class="py-3 w-100 row g-0 border-bottom border-white" v-if="order.is_paid">
                  <th class="text-info col-sm-4 p-1">訂單編號:</th>
                  <td class="col-sm-8 p-1">{{order.id}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="text-center mt-3" v-if="order.is_paid === false">
          <button class="btn btn-danger btn-lg">確認付款去</button>
        </div>
      </form>
  </div>
</template>

<script>
import loadingCustom from '../../components/front/LoadingCustom.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    loadingCustom
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
    }
  },
  created () {
    this.getOrder(this.$route.params.orderId)
  }
}
</script>

<style scoped>
.container-fluid {
  max-width: 1140px;
}
.alert-success{
  background-color: #ddd;
  color: #333;
}
.alert-primary{
  background-color: #333;
  color: #ddd;
}
.buyer{
  border: 3px solid #fff;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(50, 50, 50, 0.2);
}
.alert-rounded{
  border-radius: 50px;
}
</style>
