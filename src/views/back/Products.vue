<template>
  <loadingCustom :tempIsLoading="isLoading"></loadingCustom>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModal((isNew = true))">
      增加產品
    </button>
  </div>
  <div class="container">
    <table class="table mt-4 text-white m-auto mb-5 p-2 text-center" style="min-width: 800px;">
      <thead>
        <tr class="fs-5 text-info py-4">
          <th width="120" class="py-4">分類</th>
          <th class="py-4">產品名稱</th>
          <th width="120" class="py-4">原價</th>
          <th width="120" class="py-4">售價</th>
          <th width="100" class="py-4">是否啟用</th>
          <th width="200" class="py-4">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productsAdmin" :key="item.id">
          <td class="py-3">{{ item.category }}</td>
          <td class="py-3">{{ item.title }}</td>
          <td class="py-3">{{ item.origin_price }}</td>
          <td class="py-3">{{ item.price }}</td>
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
    <pagination :pages="pagination" @emit-pages="getProducts"></pagination>
  </div>
  <productModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></productModal>
  <delModal ref="delModal" @delete-item="deleteProduct"></delModal>
</template>

<script>
import loadingCustom from '../../components/front/LoadingCustom.vue'
import productModal from '../../components/back/ProductModal.vue'
import delModal from '../../components/back/DelModal.vue'
import pagination from '../../components/Pagination.vue'

export default {
  data () {
    return {
      tempProduct: {}, // 寄放Modal表格中輸入的新增產品或是要編輯產品的資料
      isNew: false, // 判斷物品是否為新增
      isDelete: false, // 判斷是否進行刪除
      deletedID: '' // 寄放欲刪除之物品的id
    }
  },
  components: {
    loadingCustom,
    productModal,
    delModal,
    pagination
  },
  inject: ['emitter'],
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    productsAdmin () {
      return this.$store.state.productsAdmin
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  methods: {
    getProducts (page) {
      this.$store.dispatch('getProductsAdmin', page)
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
      this.$store.dispatch('updateLoading', true)
      this.tempProduct = item
      const productComponent = this.$refs.productModal
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
        this.$store.dispatch('updateLoading', false)
      })
    },
    deleteProduct (isDelete) {
      this.isDelete = isDelete
      this.$store.dispatch('updateLoading', true)
      const productComponent = this.$refs.delModal
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
      this.$store.dispatch('updateLoading', false)
    }
  },
  created () {
    this.getProducts()
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
