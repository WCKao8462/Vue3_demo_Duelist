<template>
  <div class="d-flex justify-content-end cartBtn">
    <button class="btn deck" @click="openModal()">
      <span class="badge rounded-pill bg-primary">
        <div class="fs-5">{{ cartNum }}</div>
      </span>
    </button>
  </div>
  <cartModal ref="cartModal"></cartModal>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-7 p-4 text-center">
        <img :src="product.imageUrl" class="cardImg" alt="" />
      </div>
      <div class="col-lg-5 text-white my-5">
        <h1 class="fw-bolder">{{ product.title }}</h1>
        <div class="cardCategory py-1 h6 rounded-pill" :class="{
                'monster': cardType.monsterCard.includes(product.category),
                'spell': cardType.spellCard.includes(product.category),
                'trap': cardType.trapCard.includes(product.category)}">{{ product.category }}</div>
        <div class="d-flex flex-row-reverse">
          <h2 class="fw-bold">${{ product.price }}</h2>
          <del class="mx-2">${{ product.origin_price }}</del>
        </div>
        <hr class="text-white" />
        <div class="description my-3 py-3">
          <h3 class="px-2 text-center">卡牌效果</h3><br>
          <p class="px-2">{{ product.content }}</p>
        </div>
        <hr class="text-white" />
        <div class="description my-3 py-3">
          <h3 class="px-2 text-center">說明</h3><br>
          <p class="px-2">{{ product.description }}</p>
        </div>
        <hr class="text-white" />
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center g-0">
              <div class="input-group my-3">
                <button class="input-group-text btnNum" @click="handleSub()"><i class="bi bi-dash-lg"></i></button>
                <input size="2" type="number" class="numText text-center" aria-label="Amount (to the nearest dollar)" v-model.number="qty" max="99" min="1" />
                <button class="input-group-text btnNum" @click="handlePlus()"><i class="bi bi-plus-lg"></i></button>
              </div>
            </div>
            <div class="p-2 col-lg-6 text-center">
              <button type="button" class="btn btn-outline-warning btn-md border border-2 border-warning my-3 w-75" @click="addCart(id)">
                  <i class="fas fa-spinner fa-spin"></i>
                  <i class="bi bi-file-plus-fill fs-4"></i>
                  加入牌組
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartModal from '../../components/front/CartModal.vue'

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
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    cartNum () {
      if (this.$store.state.cart.carts === undefined) {
        return 0
      } else {
        return this.$store.state.cart.carts.length
      }
    }
  },
  components: {
    cartModal
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
    },
    openModal () {
      const cartComponent = this.$refs.cartModal
      cartComponent.showModal()
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
.cardImg{
  width: 50%;
}
.numText{
  width: 50%;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
}
.btnNum{
  background-color:purple;
  border: 1px solid #fff;
  color: #fff;
}
.input-group{
  width: 100%;
  justify-content: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
</style>
