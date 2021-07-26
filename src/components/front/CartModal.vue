<template>
  <LoadingCustom :tempIsLoading="isLoading"></LoadingCustom>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal" data-bs-backdrop="static">
    <div class="modal-dialog mt-5">
      <div class="modal-content">
        <div class="modal-header text-white">
          <h5 class="modal-title" id="exampleModalLabel">牌組內容</h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="py-3 w-100 px-5" v-if="cartNum !== 0">
          <table class="table text-white">
            <thead class="row">
              <th class="col-2"></th>
              <th class="text-center fw-bold col-4">卡名</th>
              <th class="text-center fw-bold col-3">數量</th>
              <th class="text-center fw-bold col-3">單價</th>
            </thead>
            <br />
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" class="row">
                <td class="align-middle col-2">
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCart(item.id)">
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
                <td class="text-center col-4">{{ item.product.title }}</td>
                <td class="text-center col-3">{{ item.qty }}</td>
                <td class="text-center col-3">{{ item.total }} 元</td>
              </tr>
            </tbody>
          </table>
          <br>
          <div class="text-white">
            <p class="text-end">共 <span class="fw-bolder">{{ cart.total }}</span> 元</p>
          </div>
          <br>
          <div class="d-grid">
            <button type="button" class="btn btnCustom" data-bs-dismiss="modal" @click="toOrder"><i class="bi bi-currency-dollar"></i> 結帳</button>
          </div>
        </div>
        <div class="px-4 py-3 text-white text-center fs-4" v-else>
          您還沒把卡片加入牌組中喔!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixin from '@/mixins/ModalMixin'
import LoadingCustom from './LoadingCustom.vue'

export default {
  mixins: [ModalMixin],
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
    cartNum () {
      if (this.$store.state.cart.carts === undefined) {
        return 0
      } else {
        return this.$store.state.cart.carts.length
      }
    }
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
    },
    toOrder () {
      this.$router.push('/order')
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/componentScss/_cartModal";
</style>
