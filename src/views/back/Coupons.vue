<template>
  <loading :active="isLoading"></loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal">
      增加優惠券
    </button>
  </div>
  <table class="table mt-4 text-white m-auto" style="max-width: 1140px">
    <thead>
      <tr>
        <th width="150">優惠名稱</th>
        <th width="150">優惠碼</th>
        <th width="150">折扣</th>
        <th width="150">到期日</th>
        <th width="150">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in coupons" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.code }}</td>
        <td class="text-right">{{ item.percent }}%</td>
        <td class="text-right">{{ item.due_date }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal((isNew = false), item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="delModal(item.id)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <couponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></couponModal>
  <delModal ref="delModal" @delete-item="deleteProduct"></delModal>
</template>

<script>
import couponModal from '../../components/back/CouponModal.vue'
import delModal from '../../components/back/DelModal.vue'

export default {
  data () {
    return {
      coupons: [], // 寄放從後端取得的資料
      isLoading: false,
      tempCoupon: {},
      isDelete: false,
      deletedID: ''
    }
  },
  components: {
    couponModal,
    delModal
  },
  methods: {
    getCoupons () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.coupons = res.data.coupons
          this.isLoading = false
        }
      })
    },
    openModal () {
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    delModal (id) {
      this.deletedID = id
      const couponComponent = this.$refs.delModal
      couponComponent.showModal()
    },
    updateCoupon (item) {
      this.isLoading = true
      this.tempCoupon = item
      const couponComponent = this.$refs.couponModal
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      const httpMethod = 'post'
      this.$http[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        console.log('庫碰眷', res)
        this.tempCoupon = {}
        couponComponent.hideModal()
        this.getCoupons()
      })
    },
    deleteProduct (isDelete) {
      this.isDelete = isDelete
      const couponComponent = this.$refs.delModal
      this.isLoading = true
      if (this.isDelete) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.deletedID}`
        this.$http.delete(api).then((res) => {
          console.log(res)
          couponComponent.hideModal()
          this.isDelete = false
          this.deletedID = ''
          this.getCoupons()
          alert('刪除成功')
        })
      }
    }
  },
  created () {
    this.getCoupons()
    console.log(new Date(2021, 9, 20).getTime())
  }
}
</script>
