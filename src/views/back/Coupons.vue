<template>
  <loadingCustom :tempIsLoading="isLoading"></loadingCustom>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal">
      增加優惠券
    </button>
  </div>
  <div class="container">
    <table class="table mt-4 text-white m-auto text-center mb-5" style="min-width: 800px">
    <thead>
      <tr class="fs-5">
        <th width="150" class="py-4 text-info">優惠名稱</th>
        <th width="150" class="py-4 text-info">優惠碼</th>
        <th width="150" class="py-4 text-info">折扣</th>
        <th width="150" class="py-4 text-info">到期日</th>
        <th width="150" class="py-4 text-info">是否啟用</th>
        <th width="200" class="py-4 text-info">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in couponsAdmin" :key="item.id">
        <td class="py-3">{{ item.title }}</td>
        <td class="py-3">{{ item.code }}</td>
        <td class="py-3">{{ item.percent }}%</td>
        <td class="py-3">{{ item.due_date }}</td>
        <td class="py-3">
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td class="py-3">
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-md mx-2" @click="openModal((isNew = false), item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-md mx-2" @click="delModal(item.id)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination :pages="pagination" @emit-pages="getCoupons"></pagination>
  </div>
  <couponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></couponModal>
  <delModal ref="delModal" @delete-item="deleteProduct"></delModal>
</template>

<script>
import loadingCustom from '../../components/front/LoadingCustom.vue'
import couponModal from '../../components/back/CouponModal.vue'
import delModal from '../../components/back/DelModal.vue'
import pagination from '../../components/Pagination.vue'

export default {
  data () {
    return {
      tempCoupon: {},
      isDelete: false,
      deletedID: '',
      isNew: false
    }
  },
  components: {
    loadingCustom,
    couponModal,
    delModal,
    pagination
  },
  inject: ['emitter'],
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    couponsAdmin () {
      return this.$store.state.couponsAdmin
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  methods: {
    getCoupons (page) {
      this.$store.dispatch('getCouponsAdmin', page)
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {}
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    delModal (id) {
      this.deletedID = id
      const couponComponent = this.$refs.delModal
      couponComponent.showModal()
    },
    updateCoupon (item) {
      this.$store.dispatch('updateLoading', true)
      this.tempCoupon = item
      const couponComponent = this.$refs.couponModal
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        couponComponent.hideModal()
        this.getCoupons()
        if (res.data.success) {
          this.getCoupons()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: res.data.message.join('、')
          })
        }
        this.$store.dispatch('updateLoading', false)
      })
    },
    deleteProduct (isDelete) {
      this.isDelete = isDelete
      this.$store.dispatch('updateLoading', true)
      const couponComponent = this.$refs.delModal
      if (this.isDelete) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.deletedID}`
        this.$http.delete(api).then((res) => {
          if (res.data.success) {
            couponComponent.hideModal()
            this.isDelete = false
            this.deletedID = ''
            this.getCoupons()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '刪除成功'
            })
          }
        })
      }
      this.$store.dispatch('updateLoading', false)
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>

<style scoped>
.container{
  max-width: 1140px;
}
@media (max-width:768px) {
  .container{
    overflow-x: scroll;
  }
}
</style>
