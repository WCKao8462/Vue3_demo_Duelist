<template>
  <loadingCustom :tempIsLoading="isLoading"></loadingCustom>
  <div class="container mt-5">
    <h1 class="text-warning text-center p-4">請翻開覆蓋的卡</h1>
    <div class="row mt-5 py-2">
      <div class="col-4 d-flex justify-content-center" v-for="card in cards" :key="card.id">
        <button type="button" class="flip-card btn" @click="YesOrNo(card)" :class="{'clickFlip': status.clickID === card.id}" :disabled="status.isFlip">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="../../assets/pic/back.jpg" alt="Avatar" style="width: 200px; height: 290px;" />
            </div>
            <div class="flip-card-back">
              <img :src="card.pic" alt="Avatar" style="width: 200px; height: 290px;" />
            </div>
          </div>
        </button>
      </div>
      <h1 class="text-warning text-center p-4 mt-3" v-if="status.clickID !== ''">
        恭喜獲得 {{ yourDiscount }} 優惠<br>
        折扣碼: {{ yourCode }}</h1>
    </div>
  </div>
</template>

<script>
import loadingCustom from '../../components/front/LoadingCustom.vue'

export default {
  data () {
    return {
      cards: [
        {
          id: 1,
          pic: 'https://images.weserv.nl/?url=storage.googleapis.com/ygoprodeck.com/pics/89631141.jpg&il&w=360&h=523',
          discount: '5折',
          code: 'blueEyes'
        },
        {
          id: 2,
          pic: 'https://images.weserv.nl/?url=storage.googleapis.com/ygoprodeck.com/pics/46986417.jpg&il&w=360&h=523',
          discount: '65折',
          code: 'darkmagic'
        },
        {
          id: 3,
          pic: 'https://images.weserv.nl/?url=storage.googleapis.com/ygoprodeck.com/pics/74677425.jpg&il&w=360&h=523',
          discount: '8折',
          code: 'redEyes'
        }
      ],
      status: {
        clickID: '',
        isFlip: false
      },
      yourDiscount: '',
      yourCode: ''
    }
  },
  components: {
    loadingCustom
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    handlePlus () {
      if (this.count < 99) {
        this.count++
      }
    },
    handleSub () {
      if (this.count > 1) {
        this.count--
      }
    },
    YesOrNo (card) {
      this.status.clickID = card.id
      this.yourDiscount = card.discount
      this.yourCode = card.code
      this.status.isFlip = true
    },
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const k = array[i]
        array[i] = array[j]
        array[j] = k
      }
    }
  },
  created () {
    this.shuffleArray(this.cards)
  }
}
</script>

<style scoped>
.container{
  max-width: 960px;
}
.flip-card {
    background-color: transparent;
    width: 200px;
    height: 290px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.clickFlip .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.flip-card-front {
    background-color: #bbb;
    color: black;
}
.flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
}
</style>
