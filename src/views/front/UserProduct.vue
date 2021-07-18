<template>
  <div class="d-flex justify-content-end cartBtn">
    <button class="btn deck" @click="openModal()">
      <span class="badge rounded-pill bg-primary">
        <div class="fs-5">{{ cartNum }}</div>
      </span>
    </button>
  </div>
  <cartModal ref="cartModal"></cartModal>
  <div class="banner"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-3 pt-3 mb-3">
        <div class="btn-group-vertical w-100 sticky-md-top" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="allCard" autocomplete="off" checked @click="getProductsWithPages" />
          <label class="btn my-2 allCard" for="allCard">
            全部<br />
            All
          </label>
          <input type="radio" class="btn-check" name="btnradio" id="monsterCard" autocomplete="off" @click="setCard('怪獸', '怪獸卡')" />
          <label class="btn my-2 monsterCard" for="monsterCard">
            怪獸卡<br />
            Monster Card
          </label>
          <input type="radio" class="btn-check" name="btnradio" id="spellCard" autocomplete="off" @click="setCard('魔法', '魔法卡')" />
          <label class="btn spellCard my-2" for="spellCard">
            魔法卡<br />
            Spell Card
          </label>
          <input type="radio" class="btn-check" name="btnradio" id="trapCard" autocomplete="off" @click="setCard('陷阱', '陷阱卡')" />
          <label class="btn trapCard my-2" for="trapCard">
            陷阱卡<br />
            Trap Card
          </label>
        </div>
      </div>
      <div class="col-md-9 pt-3  m-auto">
        <h2 class="text-white text-center">{{ typeName }}</h2>
        <div class="row mb-5">
          <div class="col-lg-4 col-md-6 p-3" v-for="item in filterSearch" :key="item.id">
            <div class="card h-100 animated" >
              <button class="cardImg" :style="{ backgroundImage: `url(${item.imageUrl})` }"  @click="toProductDetail(item.id)"></button>
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
                <button type="button" class="btn btn-outline-warning btn-md ml-auto w-100 border border-2 border-warning" @click="addCart(item.id)" :disabled="status.loadingItem === item.id">
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
        <pagination :pages="pagination" @emit-pages="getProductsWithPages" v-if="pageIsShown"></pagination>
      </div>
    </div>
  </div>
</template>

<script>
import cartModal from '../../components/front/CartModal.vue'
import pagination from '../../components/Pagination.vue'

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
    cartModal,
    pagination
  },
  inject: ['emitter'],
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
    setCard (cardName, typeName) {
      this.getProducts()
      this.typeName = typeName
      this.cardName = cardName
    },
    openModal () {
      const cartComponent = this.$refs.cartModal
      cartComponent.showModal()
    }
  },
  openModal () {
    const cartComponent = this.$refs.cartModal
    cartComponent.showModal()
  },
  computed: {
    filterSearch () {
      return this.products.filter((item) => {
        return item.category.match(this.cardName) // 返回products中滿足cardName關鍵字的資料
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
    },
    cartNum () {
      if (this.$store.state.cart.carts === undefined) {
        return 0
      } else {
        return this.$store.state.cart.carts.length
      }
    }
  },
  created () {
    this.getProductsWithPages()
  }
}
</script>

<style scoped>
.cartBtn{
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 100;
}
.deck{
  background-image: url('../../assets/pic/deck.png');
  height: 70px;
  width: 70px;
  background-size: cover;
  border-radius: 35px;
  position: relative;
  border: 2px solid #fff;
}
.deck:hover{
  border: 2px solid red;
}
.badge{
  position: absolute;
  top: -1px;
  right: -3px;
}
.banner{
  width: 100%;
  min-height: 500px;
  background-image: url('../../assets/pic/yugioh_3.jpg');
  background-position: center;
  background-size: cover;
  opacity: 0.5;
  background-attachment: fixed;
}
.allCard, .monsterCard, .spellCard, .trapCard{
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  font-weight: bold;
  font-size: 20px;
}
.allCard:hover{
  background-color: #fff;
  color: #000;
}
.allCard:checked, #allCard:checked ~ .allCard{
  background-color: #fff;
  color: #000;
}
.monsterCard:hover, #monsterCard:checked ~ .monsterCard{
  background-color: #b54123;
}
.spellCard:hover, #spellCard:checked ~ .spellCard{
  background-color: #009278;
}
.trapCard:hover, #trapCard:checked ~ .trapCard{
  background-color: #aa2476;
}
.card{
  box-shadow: 0 4px 5px rgba(236, 234, 234, .1);
  transition: box-shadow .3s;
}
.card:hover{
  box-shadow: 0 4px 15px rgb(236, 234, 234, .8);
}
.card-body{
  background-color: #000;
  color: #fff;
}
.cardImg{
  background-color: #000;
  height: 250px;
  background-size: 80%;
  background-position: 50% 40%;
  background-repeat: no-repeat;
  transition: background-size .3s;
}
.cardImg:hover{
  background-size: 125%;
  cursor: zoom-in;
}
.cardCategory{
  display: inline-block;
  padding: 5px;
}
.monster{
  background-color: #b54123;
}
.spell{
  background-color: #009278;
}
.trap{
  background-color: #aa2476;
}
.animated {
  animation: anime;
  animation-duration: .8s;
}
@keyframes anime{
  0% {opacity: 0; transform: translateY(100px);}
  100% {opacity: 1; transform: translateY(0);}
}

@media (max-width: 600px){
  .cartBtn{
    right: 20px;
    bottom: 20px;
  }
  .banner{
    display: none;
  }
  .allCard, .monsterCard, .spellCard, .trapCard{
    font-size: 16px;
  }
  .cardCategory{
    display: none;
  }
}
</style>
