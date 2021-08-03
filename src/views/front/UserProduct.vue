<template>
  <CartBtn></CartBtn>
  <div class="productBanner"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-3 pt-3 mb-3">
        <ul class="w-100 sticky-md-top text-white text-center p-0">
          <li type="button" class="btnTtem my-3" @click="getProductsWithPages" :class="{'active': typeName === '全部'}">
            全部<br />
            All
          </li>
          <li type="button" class="btnTtem my-3" @click="setCard('怪獸', '怪獸卡')" :class="{'active': typeName === '怪獸卡'}">
            怪獸卡<br />
            Monster Card
          </li>
          <li type="button" class="btnTtem my-3" @click="setCard('魔法', '魔法卡')" :class="{'active': typeName === '魔法卡'}">
            魔法卡<br />
            Spell Card
          </li>
          <li type="button" class="btnTtem my-3" @click="setCard('陷阱', '陷阱卡')" :class="{'active': typeName === '陷阱卡'}">
            陷阱卡<br />
            Trap Card
          </li>
        </ul>
      </div>
      <div class="col-md-9 pt-3 m-auto">
        <h2 class="text-white text-center">{{ typeName }}</h2>
        <div class="row mb-5">
          <div class="col-lg-4 col-md-6 p-3" v-for="item in filterSearch" :key="item.id">
            <div class="card h-100 productAnimated">
              <button type="button" class="cardImg" :style="{ backgroundImage: `url(${item.imageUrl})` }" @click="toProductDetail(item.id)"></button>
              <div class="card-body">
                <div class="py-2 h4 text-center fw-bolder">{{ item.title }}</div>
                <div
                  class="cardCategory py-1 h6 rounded-pill"
                  :class="{
                'monster': cardType.monsterCard.includes(item.category),
                'spell': cardType.spellCard.includes(item.category),
                'trap': cardType.trapCard.includes(item.category)}"
                >
                  {{ item.category }}
                </div>
                <div class="d-flex justify-content-between align-items-baseline py-2 px-3">
                  <del class="h6">$ {{ item.origin_price }}</del>
                  <div class="h5 fw-bolder">$ {{ item.price }}</div>
                </div>
                <button type="button" class="btn btn-md ml-auto w-100 border border-1 btnCustom" @click="addCart(item.id, item.title)" :disabled="status.loadingItem === item.id">
                  <div class="spinner-grow spinner-grow-sm text-danger" role="status" v-if="status.loadingItem === item.id">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <i class="fas fa-spinner fa-spin"></i>
                  <i class="bi bi-file-plus-fill fs-4"></i>
                  加入牌組
                </button>
              </div>
            </div>
          </div>
        </div>
        <Pagination :pages="pagination" @emit-pages="getProductsWithPages" v-if="pageIsShown"></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import CartBtn from '@/components/front/CartBtn.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      status: {
        loadingItem: ''
      },
      cardName: '',
      typeName: '全部',
      cardType: {
        monsterCard: ['通常怪獸', '效果怪獸', '融合怪獸'],
        spellCard: ['通常魔法', '速攻魔法'],
        trapCard: ['通常陷阱', '反擊陷阱']
      },
      qty: 1,
      pageIsShown: false
    }
  },
  components: {
    CartBtn,
    Pagination
  },
  methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
      this.pageIsShown = false
    },
    getProductsWithPages (page) {
      this.typeName = '全部'
      this.cardName = ''
      this.pageIsShown = 'true'
      this.$store.dispatch('getProductsWithPages', page)
    },
    toProductDetail (id) {
      this.$router.push(`/product/${id}`)
      document.documentElement.scrollTop = 0
    },
    addCart (cardID, cardTitle, cartQty = 1) {
      this.status.loadingItem = cardID
      const obj = {
        id: cardID,
        title: cardTitle,
        qty: cartQty
      }
      this.$store.dispatch('addCart', obj)
      this.status.loadingItem = ''
    },
    setCard (cardName, typeName) {
      this.getProducts()
      this.typeName = typeName
      this.cardName = cardName
    }
  },
  computed: {
    filterSearch () {
      return this.products.filter((item) => {
        return item.category.match(this.cardName)
      })
    },
    isLoading () {
      return this.$store.state.isLoading
    },
    products () {
      return this.$store.state.products
    },
    pagination () {
      return this.$store.state.pagination
    }
  },
  created () {
    this.getProductsWithPages()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_userProduct";
</style>
