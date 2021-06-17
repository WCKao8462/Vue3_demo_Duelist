<template>
<swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true,
    }"
    :pagination="false"
    class="mySwiper"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <img
        :src="item.imageUrl" />
      </swiper-slide
    >
    <!-- <swiper-slide
      ><img
        src="../assets/pic/Invocation.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="..\assets\pic\Polymerization.jpg" />
        </swiper-slide
    ><swiper-slide
      ><img
        src="..\assets\pic\Shiranui_Squire.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="..\assets\pic\Shiranui_Sunsaga.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="..\assets\pic\Witchcrafter_Madame_Verre.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="..\assets\pic\Magic_Jammer.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="..\assets\pic\Witchcrafter_Schmietta.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="..\assets\pic\Solemn_Judgment.jpg"
    /><h2>神鷹女郎訓獸師</h2>
    </swiper-slide> -->
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/swiper.scss'

import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination])

export default {
  data () {
    return {
      products: {},
      img: {}
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        console.log('product', this.products)
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 250px;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
}
h2{
  text-align: center;
}
.item{
  background-image: url('../assets/pic/Blue_Eyes_White_Dragon.jpg');
  background-size: cover;
}
</style>
