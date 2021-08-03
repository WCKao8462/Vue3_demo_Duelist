<template>
  <Swiper
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
    <SwiperSlide v-for="item in randomProducts" :key="item.id">
      <a type="button" class="nav-link" @click="toProduct(item.id)">
        <div class="cardItem m-0">
          <img :src="item.imageUrl" :alt="item.title" />
          <div class="seeMore">查看更多<br>More</div>
        </div>
      </a>
    </SwiperSlide>
  </Swiper>
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
        document.documentElement.scrollTop = 0
      })
    },
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const k = array[i]
        array[i] = array[j]
        array[j] = k
      }
    },
    toProduct (id) {
      this.$router.push(`/product/${id}`).then(() => {
        window.location.reload()
        this.getRandomProducts()
      })
    }
  },
  created () {
    this.getRandomProducts()
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/componentScss/_productCarousel";
</style>
