<template>
  <CartBtn></CartBtn>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-5 p-2 text-center">
        <img :src="product.imageUrl" class="p-2 cardImgInfo" alt="" />
      </div>
      <div class="col-lg-7 text-white my-5 p-2">
        <h1 class="fw-bolder">{{ product.title }}</h1>
        <div class="cardCategory py-1 h6 rounded-pill" :class="{
                'monster': cardType.monsterCard.includes(product.category),
                'spell': cardType.spellCard.includes(product.category),
                'trap': cardType.trapCard.includes(product.category)}">{{ product.category }}</div>
        <div class="d-flex flex-row-reverse">
          <div class="h2 fw-bolder mx-3">${{ product.price }}</div>
          <del class="h4 mx-3 fw-light">${{ product.origin_price }}</del>
        </div>
        <hr class="text-white" />
        <div class="description my-3 py-3">
          <h3 class="px-2 text-center">卡牌效果</h3><br>
          <p class="px-2 fw-light">{{ product.content }}</p>
        </div>
        <hr class="text-white" />
        <div class="description my-3 py-3">
          <h3 class="px-2 text-center">說明</h3><br>
          <p class="px-2 fw-light">{{ product.description }}</p>
        </div>
        <hr class="text-white" />
        <div class="container">
          <div class="row">
            <div class="col-sm-6 d-flex g-0 p-3">
              <div class="input-group input-group-sm flex-nowrap">
                <button type="button" class="input-group-text bg-primary text-dark border-white" @click="handleSub()"><i class="bi bi-dash-lg"></i></button>
                <input size="2" type="number" class="numText text-center" aria-label="Amount (to the nearest dollar)" v-model.number="qty" max="99" min="1" />
                <button type="button" class="input-group-text bg-primary text-dark border-white" @click="handlePlus()"><i class="bi bi-plus-lg"></i></button>
              </div>
            </div>
            <div class="p-2 col-sm-6 text-center p-3">
              <button type="button" class="btn btnCustom w-100 fs-5" @click="addCart(id)">
                  <i class="fas fa-spinner fa-spin"></i>
                  <i class="bi bi-file-plus-fill fs-5"></i>
                  加入牌組
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="text-white">
    <h2 class="text-center m-auto text-white py-3 fw-bolder">購物須知</h2>
    <ul class="text-white mx-auto w-75 mt-4 fw-light">
      <li class="m-3 p-1">商品下訂後3~7天組裝，組裝完後出貨時間為1~3天，商品運送時間為3~7天，一律採用黑貓寄送。</li>
      <li class="m-3 p-1">當確認您的訂單已經付款完成，您的訂單將於付款完成後預計「3~5個工作天」出貨(不含週末及國定假日)；因商品為收到訂單後主廚依序手工製作，部分熱門品項逢節慶檔期可能會有短暫缺貨的情況發生，敬請見諒。</li>
      <li class="m-3 p-1">本商品售出既不退貨</li>
    </ul>
    <hr class="text-white">
    <h2 class="text-center m-auto text-white py-3 fw-bolder">其他卡牌</h2>
    <p class="text-center m-auto text-white fw-light">其他人也瀏覽了以下商品...</p>
    <ProductCarousel></ProductCarousel>
  </div>
</template>

<script>
import CartBtn from '@/components/front/CartBtn.vue'
import ProductCarousel from '@/components/front/ProductCarousel.vue'

export default {
  props: ['id'],
  data () {
    return {
      product: [],
      qty: 1,
      status: {
        loadingItem: ''
      },
      cardType: {
        monsterCard: ['通常怪獸', '效果怪獸', '融合怪獸'],
        spellCard: ['通常魔法', '速攻魔法'],
        trapCard: ['通常陷阱', '反擊陷阱']
      }
    }
  },
  components: {
    CartBtn,
    ProductCarousel
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
      })
    },
    addCart (id) {
      this.$store.dispatch('updateLoading', true)
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.qty
      }
      this.$http.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          this.status.loadingItem = ''
          this.emitter.emit('push-message', {
            style: 'secondary',
            title: '已將卡片加入牌組'
          })
          this.$store.dispatch('getCart')
          this.$store.dispatch('updateLoading', false)
        }
      })
    },
    handlePlus () {
      if (this.qty < 99) {
        this.qty++
      }
    },
    handleSub () {
      if (this.qty > 1) {
        this.qty--
      }
    }
  },
  watch: {
    qty () {
      if (this.qty > 99) {
        this.qty = 99
      } else if (this.qty < 1) {
        this.qty = 1
      }
    }
  },
  created () {
    this.getProduct(this.id)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/viewScss/_userProductDetail";
</style>
