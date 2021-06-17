<template>
  <loading :active="isLoading"></loading>
    <table class="table mt-4">
    <thead>
      <tr>
        <th width="200">建立時間</th>
        <th width="150">訂單金額</th>
        <th width="150">是否付款</th>
        <td width="200">付款時間</td>
        <th width="150">查看詳細內容</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ dateTransform(item.create_at) }}</td>
        <td>{{ item.total }}</td>
        <td>
          <span class="text-success" v-if="item.is_paid">付款完成</span>
          <span class="text-danger" v-else>尚未付款</span>
        </td>
        <td >
          <span v-if="item.paid_date">
              {{ dateTransform(item.paid_date) }}
          </span>
          <span v-else></span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
            >
              詳細資料
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="delModal(item.id)"
            >
              刪除訂單
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <delModal ref="delModal" @delete-item="deleteOrder"></delModal>
</template>

<script>
import delModal from '../components/DelModal.vue'

export default {
  data () {
    return {
      orders: {},
      isLoading: false,
      isDelete: false,
      deletedID: ''
    }
  },
  components: {
    delModal
  },
  methods: {
    getOrders () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.orders = res.data.orders
          this.isLoading = false
        }
      })
    },
    dateTransform (time) {
      const d = new Date(time * 1000).toLocaleString()
      return d
    },
    delModal (id) {
      this.deletedID = id
      const orderComponent = this.$refs.delModal
      orderComponent.showModal()
    },
    deleteOrder (isDelete) {
      this.isDelete = isDelete
      const orderComponent = this.$refs.delModal
      this.isLoading = true
      if (this.isDelete) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.deletedID}`
        this.$http.delete(api).then((res) => {
          console.log(res)
          orderComponent.hideModal()
          this.isDelete = false
          this.deletedID = ''
          this.getOrders()
          alert('刪除成功')
        })
      }
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
