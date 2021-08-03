<template>
  <CartBtn></CartBtn>
  <div class="container mt-5">
    <div class="h1 text-primary text-center p-4 fw-bolder">請翻開覆蓋的卡</div>
    <div class="row mt-5 py-2">
      <div class="col-sm-4 d-flex justify-content-center pb-3" v-for="card in cards" :key="card.id">
        <button type="button" class="flip-card btn" @click="chooseCard(card)" :class="{'clickFlip': status.clickID === card.id}" :disabled="status.isFlip">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="../../assets/img/back.jpg" alt="牌背" style="width: 200px; height: 290px;" />
            </div>
            <div class="flip-card-back">
              <img :src="card.pic" alt="正面" style="width: 200px; height: 290px;" />
            </div>
          </div>
        </button>
      </div>
      <div class="h2 text-primary text-center p-4 mt-3" v-if="status.clickID !== ''">
        恭喜獲得 {{ yourDiscount }} 優惠<br />
        折扣碼: <span id="couponCode">{{ yourCode }}</span>
        <button class="d-block btn btn-outline-light mx-auto my-3 px-4 fw-bolder fs-3 border-5 fw-bolder" @click="copyCouponCode">複製折扣碼</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartBtn from '@/components/front/CartBtn.vue'
import BlueEyesWhiteDragon from '@/assets/img/BlueEyesWhiteDragon.jpg'
import DarkMagician from '@/assets/img/DarkMagician.jpg'
import RedEyesBlackDragon from '@/assets/img/RedEyesBlackDragon.jpg'

export default {
  data () {
    return {
      cards: [
        {
          id: 1,
          pic: BlueEyesWhiteDragon,
          discount: '5折',
          code: 'blueEyes'
        },
        {
          id: 2,
          pic: DarkMagician,
          discount: '65折',
          code: 'darkmagic'
        },
        {
          id: 3,
          pic: RedEyesBlackDragon,
          discount: '8折',
          code: 'redEyes'
        }
      ],
      yourDiscount: '',
      yourCode: '',
      status: {
        clickID: '',
        isFlip: false
      }
    }
  },
  components: {
    CartBtn

  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    chooseCard (card) {
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
    },
    copyCouponCode () {
      const couponCode = document.getElementById('couponCode')
      const selection = window.getSelection()
      selection.removeAllRanges()
      const range = document.createRange()
      range.selectNodeContents(couponCode)
      selection.addRange(range)
      document.execCommand('copy')
      this.$store.dispatch('receiveMessage', {
        style: 'success',
        title: '優惠碼 ' + this.yourCode + ' 已複製'
      })
    }
  },
  created () {
    this.$store.dispatch('updateLoading', true)
    this.shuffleArray(this.cards)
    setTimeout(() => {
      this.$store.dispatch('updateLoading', false)
    }, 800)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_userCouponGame";
</style>
