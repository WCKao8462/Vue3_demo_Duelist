<template>
  <LoadingCustom :tempIsLoading="isLoading"></LoadingCustom>
  <div class="container">
    <table class="table mt-4 text-white m-auto mb-5 text-center" style="min-width: 800px;">
      <thead>
        <tr class="fs-5 text-info py-4">
          <th width="200" class="py-4">訂單ID</th>
          <th width="200" class="py-4">建立時間</th>
          <th width="100" class="py-4">訂單金額</th>
          <th width="100" class="py-4">是否付款</th>
          <td width="200" class="py-4">付款時間</td>
          <th width="200" class="py-4">查看詳細內容</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in ordersAdmin" :key="item.id">
          <td class="py-3">{{ item.id }}</td>
          <td class="py-3">{{ dateTransform(item.create_at) }}</td>
          <td class="py-3">{{ item.total }}</td>
          <td class="py-3">
            <span class="text-success" v-if="item.is_paid">付款完成</span>
            <span class="text-danger" v-else>尚未付款</span>
          </td>
          <td class="py-3">
            <span v-if="item.paid_date">
              {{ dateTransform(item.paid_date) }}
            </span>
            <span v-else></span>
          </td>
          <td class="py-3">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-md mx-2" @click="openModal(item)">
                詳細資料
              </button>
              <button type="button" class="btn btn-outline-danger btn-md mx-2" @click="delModal(item.id)">
                刪除訂單
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  </div>
  <OrderModal ref="orderModal" :order="tempOrder"></OrderModal>
  <DelModal ref="delModal" @delete-item="deleteOrder"></DelModal>
</template>

<script>
import LoadingCustom from '@/components/front/LoadingCustom.vue'
import OrderModal from '@/components/back/OrderModal.vue'
import DelModal from '@/components/back/DelModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      isDelete: false,
      deletedID: '',
      tempOrder: {}
    }
  },
  components: {
    LoadingCustom,
    OrderModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    ordersAdmin () {
      return this.$store.state.ordersAdmin
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  methods: {
    getOrders (page) {
      this.$store.dispatch('getOrdersAdmin', page)
    },
    dateTransform (time) {
      const d = new Date(time * 1000).toLocaleString()
      return d
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    delModal (id) {
      this.deletedID = id
      const orderComponent = this.$refs.delModal
      orderComponent.showModal()
    },
    deleteOrder (isDelete) {
      this.isDelete = isDelete
      this.$store.dispatch('updateLoading', true)
      const orderComponent = this.$refs.delModal
      if (this.isDelete) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.deletedID}`
        this.$http.delete(api).then((res) => {
          orderComponent.hideModal()
          this.isDelete = false
          this.deletedID = ''
          this.getOrders()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除成功'
          })
        })
      }
      this.$store.dispatch('updateLoading', false)
    }
  },
  created () {
    this.getOrders()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/viewScss/_forBack";
</style>
