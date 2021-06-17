<template>
  <loading :active="isLoading"></loading>
  <div class="d-flex justify-content-end box" style="position: fixed; right: 140px; bottom: 30px; z-index: 1;">
    <cartDropdown :tempCart="cart" @delete-item="deleteCart"></cartDropdown>
  </div>
  <div class="qq">
    <!-- <img ref="" src="https://d28ipuewd7cdcq.cloudfront.net/assets/article/2019/09/13/yu-gi-oh-legacy_feature.jpg"
    class="d-block qq" alt=""/> -->
  </div>
  <div class="row justify-content-center">
    <div class="list-group mt-4 col-lg-3">
      <div class="sticky-top ml-3" style="top: 10px">
        <button
          class="list-group-item list-group-item-action text-center"
          aria-current="true"
          @click="setCard('')"
        >
          全部
        </button>
        <button
          class="list-group-item list-group-item-action text-center"
          aria-current="true"
          @click="setCard('不知火')"
        >
          不知火牌組
        </button>
        <button
          class="list-group-item list-group-item-action text-center"
          aria-current="true"
          @click="setCard('魔女工坊')"
        >
          魔女工坊牌組
        </button>
        <button
          class="list-group-item list-group-item-action text-center"
          aria-current="true"
          @click="setCard('召喚')"
        >
          召喚師牌組
        </button>
      </div>
    </div>
    <div class="d-flex flex-wrap mt-4 col-lg-9">
      <div class="mb-4 mx-1" v-for="item in filterSearch" :key="item.id">
        <div class="card" style="width: 16rem">
          <div
            style="
              height: 250px;
              background-size: 75%;
              background-position: center;
              background-repeat: no-repeat;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text"></p>
            <div class="d-flex justify-content-between align-items-baseline">
              <del class="h6">原價 {{ item.origin_price }} 元</del>
              <div class="h5">現在只要 {{ item.price }} 元</div>
            </div>
            <div class="d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="getProduct(item.id)"
              >
                <i class="fas fa-spinner fa-spin"></i>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-auto"
                @click="addCart(item.id)"
                :disabled="status.loadingItem === item.id"
              >
                <div
                  class="spinner-grow spinner-grow-sm text-danger"
                  role="status"
                  v-if="status.loadingItem === item.id"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <i class="fas fa-spinner fa-spin"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartDropdown from '../components/CartDropdown.vue'

export default {
  data () {
    return {
      products: [], // 寄放從後端取得的資料
      pagination: {}, // 放從後端取得的資料分頁數(分頁是在後端完成，一頁10筆)
      cart: {},
      status: {
        loadingItem: ''
      },
      tempCart: {},
      cardName: '',
      couponCode: '',
      isLoading: false
    }
  },
  components: {
    cartDropdown
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        console.log('product', this.products)
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.tempCart = this.cart
      })
    },
    deleteCart (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        this.getCart()
      })
    },
    setCard (cardName) {
      this.cardName = cardName
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
    }
  },
  computed: {
    filterSearch () {
      return this.products.filter((item) => {
        return item.title.match(this.cardName) // 返回products中滿足cardName關鍵字的資料
      })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style scoped>
.list-group-item{
  background-color: rgba(255,255,255,0.5);
}
.qq{
  width: 100%;
  min-height: 400px;
  background-image: url('https://d28ipuewd7cdcq.cloudfront.net/assets/article/2019/09/13/yu-gi-oh-legacy_feature.jpg');
  background-position: center;
}
</style>
