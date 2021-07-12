<template>
  <div class="d-flex justify-content-end box" style="position: fixed; right: 60px; bottom: 60px; z-index: 100;">
    <button class="btn deck" @click="openModal()">
      <span class="badge rounded-pill bg-primary">
        <div class="fs-5">{{ cartNum }}</div>
      </span>
    </button>
  </div>
  <cartModal ref="cartModal"></cartModal>
  <div class="banner position-relative">
    <div class="content text-white" style="position: absolute; top: 50%; left: 20%;">
        <p class="h3">賭上決鬥者的靈魂</p>
        <p class="h3">我相信我的牌組</p>
        <br>
        <p class="display-6 typeAnime">我的回合!抽牌!</p>
      </div>
  </div>
  <section class="text-center container">
    <div class="row mb-4 mt-4 animated">
      <div class="col-sm-5">
        <div class="h2 text-info text-decoration-underline m-3 p-3 fw-bolder">關於本站</div>
        <div class="h6 lh-lg text-white m-auto p-2" style="max-width: 600px">
          我們提供你各種<br>
          顏值高又強大的怪獸卡<br>
          實用度高的輔助魔法卡<br>
          干擾度稱一流的陷阱卡<br>
          盡情地選購你想要的牌<br>
          成為一流的決鬥者!
        </div>
      </div>
      <div class="col-sm-7">
        <img class="w-100  p-3" src="../../assets/pic/kaibayugi.jpg" alt="">
      </div>
    </div>
    <div class="row mb-4 mt-4 animated">
      <div class="col-sm-7">
        <img class="w-100  p-3" src="../../assets/pic/worldwild.jpg" alt="">
      </div>
      <div class="col-sm-5">
        <div class="h2 text-info text-decoration-underline m-3 p-3 fw-bolder">你知道嗎</div>
        <div class="h6 lh-lg text-white text-start m-auto p-2 mb-auto" style="max-width: 600px">
          遊戲王卡牌遊戲於1999年時在日本推出，之後普及至亞洲、歐洲、美洲、澳洲等地，
          從2003年開始每年皆舉辦世界大賽。在2009年7月7日時獲得金氏世界紀錄大全認證為全世界最暢銷的交換卡片遊戲!
        </div>
      </div>
    </div>
  </section>
  <section class="cardType">
    <div class="h2 text-center text-info text-decoration-underline pt-4 fw-bolder">卡牌種類</div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 text-white px-4">
          <div class="text-center">
            <img class="item mb-2" src="../../assets/pic/BlueEyesWhiteDragon.jpg" alt="">
          </div>
          <h3 class="py-1 f77">怪獸卡</h3>
          <hr>
          <p>怪獸卡是戰場的主角！沒有持有任何効果的「通常怪獸」擁有特殊効果的「效果怪獸」</p>
        </div>
        <div class="col-md-4 text-white px-4 intro">
          <div class="text-center">
            <img class="item mb-2" src="../../assets/pic/fusion.jpg" alt="">
          </div>
          <h3 class="py-1">魔法卡</h3>
          <hr>
          <p class="display-8">發動後能夠發揮各種効果 ！在決鬥中不可或缺！</p>
        </div>
        <div class="col-md-4 text-white px-4">
          <div class="text-center">
            <img class="item mb-2" src="../../assets/pic/mirrorforce.jpg" alt="">
          </div>
          <h3 class="py-1">陷阱卡</h3>
          <hr>
          <p>雖然陷阱卡使用的時機有所限制，但若能加以善用的話，便有機會扭轉局勢！發動陷阱智取對手！</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="text-center">
      <div class="h2 text-center text-info p-3 text-decoration-underline fw-bolder">精選卡片</div>
      <productCarousel></productCarousel>
      <button class="btn btn-outline-primary mt-3 btn-lg"  @click="toProduct"><i class="bi bi-search"> 更多卡牌...</i></button>
    </div>
  </section>
</template>

<script>
import productCarousel from '../../components/front/ProductCarousel.vue'
import $ from 'jquery'
import cartModal from '../../components/front/CartModal.vue'

export default {
  components: {
    productCarousel,
    cartModal
  },
  computed: {
    cartNum () {
      if (this.$store.state.cart.carts === undefined) {
        return 0
      } else {
        return this.$store.state.cart.carts.length
      }
    }
  },
  methods: {
    toProduct () {
      this.$router.push('/product')
    },
    openModal () {
      const cartComponent = this.$refs.cartModal
      cartComponent.showModal()
    }
  },
  created () {
    this.navbarHeight = document.querySelector('.navbar').offsetHeight
    $(document).ready(function () {
      $(window).scroll(function () {
        var scrollPos = $(window).scrollTop()
        var windowHeight = $(window).height()
        $('.animated').each(function () {
          var thisPos = $(this).offset().top
          if (windowHeight * 0.8 + scrollPos >= thisPos) {
            $(this).addClass('fadeIn')
          } else {
            $(this).removeClass('fadeIn')
          }
        })
      })
    })
  }
}
</script>

<style scoped>
.banner{
  height: 100vh;
  background-image: url('../../assets/pic/yugioh_1.jpg');
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  background-attachment: fixed;
}

.item{
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.bg-cover{
  width: 300px;
  height: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-image: url('../../assets/pic/yugioh_2.jpg');
  background-size: cover;
}
.cardType{
  background-color: #57507d;
  min-height: 50vh;
}
.animated {
  opacity: 0;
  transition: all 1.5s;
  transform: translateY(100px);
}
.fadeIn {
  opacity: 1;
  transform: translateY(0);
}
@keyframes typing {
  from { width: 0 }
}
@keyframes caret {
  50% { border-color: transparent; }
}

.typeAnime {
  width: 100%;
  border-right: .05em solid;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 5s steps(10),
    caret 1s steps(1) infinite;
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
</style>
