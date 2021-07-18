<template>
  <!-- <loadingCustom :tempIsLoading="isLoading"></loadingCustom> -->
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 0,
      slideShadows: true,
    }"
    :pagination="false"
    class="mySwiper"
  >
    <swiper-slide v-for="item in randomProducts" :key="item.id">
      <router-link class="nav-link" :to="`/product/${item.id}`">
        <div class="cardItem">
          <img :src="item.imageUrl" />
          <div class="seeMore">查看更多<br>More</div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'
SwiperCore.use([EffectCoverflow, Pagination])

export default {
  data () {
    return {
      randomProducts: {}
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    getRandomProducts () {
      this.$store.dispatch('updateLoading', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url).then((res) => {
        this.randomProducts = res.data.products
        this.shuffleArray(this.randomProducts)
        this.randomProducts = this.randomProducts.slice(0, 8)
        this.$store.dispatch('updateLoading', false)
      })
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
    this.getRandomProducts()
  }
}
</script>

<style scoped>
.mySwiper{
  max-width: 960px;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 50px auto;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #212835
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
.cardItem{
  position: relative;
  display: inline-block;
}
.cardItem .seeMore{
  visibility: hidden;
  width: 120px;
  /* background-color: #000; */
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 6px;
  padding: 10px 20px;
  position: absolute;
  z-index: 1;
  bottom: 40%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity .4s;
}
.cardItem:hover .seeMore{
  visibility: visible;
  opacity: 1;
}
.cardItem img{
  opacity: 1;
  transition: opacity .4s;
}
.cardItem:hover img{
  opacity: 0.3;
}
</style>
