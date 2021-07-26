<template>
  <CartBtn></CartBtn>
  <div class="homeBanner position-relative">
    <div class="bannerMessage text-white" style="position: absolute; top: 50%; left: 20%;">
        <p class="h3">賭上決鬥者的靈魂<br>我相信我的牌組</p>
        <br>
        <p class="display-6 typeAnime">我的回合!抽牌!</p>
      </div>
  </div>
  <section class="text-center container">
    <div class="row mb-4 mt-4 animated">
      <div class="col-md-4">
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
      <div class="col-md-8">
        <img class="w-100  p-3" src="../../assets/pic/kaibayugi.jpg" alt="關於本站(代表人物海馬與遊戲)">
      </div>
    </div>
    <div class="row mb-4 mt-4 animated">
      <div class="col-sm-7">
        <img class="w-100  p-3" src="../../assets/pic/worldwild.jpg" alt="你知道嗎(遊戲王現實環境)">
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
    <div class="h2 text-center text-dark text-decoration-underline pt-4 fw-bolder">卡牌種類</div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-4 text-dark px-4">
          <div class="text-center">
            <img class="typeItem mb-2" src="../../assets/pic/Monster.jpg" alt="怪獸卡">
          </div>
          <h3 class="pt-3 fw-bold text-center">怪獸卡</h3>
          <hr>
          <p>怪獸卡是戰場的主角！沒有持有任何効果的「通常怪獸」擁有特殊効果的「效果怪獸」</p>
        </div>
        <div class="col-md-4 text-dark px-4 intro">
          <div class="text-center">
            <img class="typeItem mb-2" src="../../assets/pic/Spell.jpg" alt="魔法卡">
          </div>
          <h3 class="pt-3 fw-bold text-center">魔法卡</h3>
          <hr>
          <p class="display-8">發動後能夠發揮各種効果 ！在決鬥中不可或缺！</p>
        </div>
        <div class="col-md-4 text-dark px-4">
          <div class="text-center">
            <img class="typeItem mb-2" src="../../assets/pic/Trap.jpg" alt="陷阱卡">
          </div>
          <h3 class="pt-3 fw-bold text-center">陷阱卡</h3>
          <hr>
          <p>雖然陷阱卡使用的時機有所限制，但若能加以善用的話，便有機會扭轉局勢！發動陷阱智取對手！</p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="text-center">
      <div class="h2 text-center text-info p-3 text-decoration-underline fw-bolder">精選卡片</div>
      <ProductCarousel></ProductCarousel>
      <button type="button" class="btn btn-outline-light border border-2 mt-3 btn-lg fs-4 fw-bold"  @click="toProduct"><i class="bi bi-search"></i> 更多卡牌... </button>
    </div>
  </section>
</template>

<script>
import ProductCarousel from '@/components/front/ProductCarousel.vue'
import CartBtn from '@/components/front/CartBtn.vue'
import $ from 'jquery'

export default {
  components: {
    ProductCarousel,
    CartBtn
  },
  methods: {
    toProduct () {
      this.$router.push('/product').then(() => {
        document.documentElement.scrollTop = 0
      })
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
        const scrollPos = $(window).scrollTop()
        const windowHeight = $(window).height()
        $('.animated').each(function () {
          const thisPos = $(this).offset().top
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

<style scoped lang="scss">
@import "@/assets/viewScss/_userHome";
</style>
