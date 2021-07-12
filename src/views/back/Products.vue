<template>
  <loading :active="isLoading"></loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModal((isNew = true))">
      增加產品
    </button>
  </div>
  <table class="table mt-4 text-white m-auto mb-5 p-2" style="max-width: 1140px">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ item.origin_price }}</td>
        <td class="text-right">{{ item.price }}</td>
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
  <productModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></productModal>
  <delModal ref="delModal" @delete-item="deleteProduct"></delModal>
</template>

<script>
import productModal from '../../components/back/ProductModal.vue'
import delModal from '../../components/back/DelModal.vue'

export default {
  data () {
    return {
      products: [], // 寄放從後端取得的資料
      pagination: {}, // 放從後端取得的資料分頁數(分頁是在後端完成，一頁10筆)
      tempProduct: {}, // 寄放Modal表格中輸入的新增產品或是要編輯產品的資料
      isNew: false, // 判斷物品是否為新增
      isDelete: false, // 判斷是否進行刪除
      deletedID: '', // 寄放欲刪除之物品的id
      isLoading: false
    }
  },
  components: {
    productModal,
    delModal
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        }
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    delModal (id) {
      this.deletedID = id
      const productComponent = this.$refs.delModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.isLoading = true
      this.tempProduct = item
      const productComponent = this.$refs.productModal
      // 以下為新增D
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        productComponent.hideModal()
        this.getProducts()
        if (res.data.success) {
          this.getProducts()
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
      })
    },
    deleteProduct (isDelete) {
      this.isDelete = isDelete
      const productComponent = this.$refs.delModal
      this.isLoading = true
      if (this.isDelete) {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.deletedID}`
        this.$http.delete(api).then((res) => {
          if (res.data.success) {
            productComponent.hideModal()
            this.isDelete = false
            this.deletedID = ''
            this.getProducts()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '刪除成功'
            })
          }
        })
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
