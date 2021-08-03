<template>
  <CartBtn></CartBtn>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-5 p-2 text-center">
        <img :src="card.imageUrl" class="p-2 cardImgInfo" :alt="card.title" />
      </div>
      <div class="col-lg-7 text-white my-5 p-2">
        <h1 class="fw-bolder">{{ card.title }}</h1>
        <div class="cardCategory py-1 h6 rounded-pill" :class="{
                'monster': cardType.monsterCard.includes(card.category),
                'spell': cardType.spellCard.includes(card.category),
                'trap': cardType.trapCard.includes(card.category)}">
          {{ card.category }}
        </div>
        <div class="d-flex flex-row-reverse">
          <div class="h2 fw-bolder mx-3">${{ card.price }}</div>
          <del class="h4 mx-3 fw-light">${{ card.origin_price }}</del>
        </div>
        <hr class="text-white" />
        <div class="description my-3 py-3">
          <h3 class="px-2 text-center">卡牌效果</h3>
          <br />
          <p class="px-2 fw-light">{{ card.content }}</p>
        </div>
        <hr class="text-white" />
        <div class="description my-3 py-3">
          <h3 class="px-2 text-center">說明</h3>
          <br />
          <p class="px-2 fw-light">{{ card.description }}</p>
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
              <button type="button" class="btn btnCustom w-100 fs-5" @click="addCart(id, card.title, qty)">
                <i class="fas fa-spinner fa-spin"></i>
                <i class="bi bi-file-plus-fill fs-5"></i>
                加入牌組
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="text-white" />
    <h2 class="text-center m-auto text-white py-3 fw-bolder">購物須知</h2>
    <ul class="text-white mx-auto w-75 mt-4">
      <li class="m-3 p-1">商品下訂轉帳付款後至出貨的準備時間約2~4個工作天(不含周六日與國定假日)，商品運送時間約3~7個工作天(不含周六日與國定假日)。</li>
      <li class="m-3 p-1">若商品有瑕疵或寄錯問題請於24小時內電話聯絡辦理換貨（來回運費需自付）</li>
      <li class="m-3 p-1">本商品不接受因個人因素(不喜歡、不適合等問題)退貨</li>
    </ul>
    <hr class="text-white" />
    <h2 class="text-center m-auto text-white py-3 fw-bolder">付款方式</h2>
    <ul class="text-white mx-auto w-75 mt-4">
      <li class="m-3 p-1">一律採ATM轉帳付款</li>
    </ul>
    <hr class="text-white" />
    <h2 class="text-center m-auto text-white py-3 fw-bolder">運送方式</h2>
    <ul class="text-white mx-auto w-75 mt-4">
      <li class="m-3 p-1">宅配通貨 / 新竹貨運 / 郵局<br>酌收100元運費</li>
    </ul>
    <hr class="text-white" />
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
      status: {
        loadingItem: ''
      },
      cardType: {
        monsterCard: ['通常怪獸', '效果怪獸', '融合怪獸'],
        spellCard: ['通常魔法', '速攻魔法'],
        trapCard: ['通常陷阱', '反擊陷阱']
      },
      qty: 1
    }
  },
  components: {
    CartBtn,
    ProductCarousel
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    card () {
      return this.$store.state.card
    }
  },
  methods: {
    getCard (id) {
      this.$store.dispatch('getCard', id)
    },
    addCart (cardID, cardTitle, cartQty) {
      const obj = {
        id: cardID,
        title: cardTitle,
        qty: cartQty
      }
      this.$store.dispatch('addCart', obj)
      this.qty = 1
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
    this.getCard(this.id)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_userProductDetail";
</style>
