<template>
  <div class="container">
    <homeCarousel></homeCarousel>
    <hr />
      <h3 class="text-center my-2" style="color: #fff;">商品分類</h3>
      <div class="d-flex w-100 mt-3">
        <div class="item aa1 mx-3 d-flex align-items-center justify-content-center">
          <p class="ww">怪獸卡</p>
        </div>
        <div class="item aa2 mx-3 d-flex align-items-center justify-content-center">
          <p class="ww">魔法卡</p>
        </div>
        <div class="item aa3 mx-3 d-flex align-items-center justify-content-center">
          <p class="ww">陷阱卡</p>
        </div>
      </div>
    <hr />
    <h2 class="text-center" style="color: #fff;">熱門卡</h2>
    <productCarousel></productCarousel>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
}
.carousel-item {
  height: 500px;
}
.hhh {
  height: 50px;
  background-color: yellow;
  padding: 5px;
}
.page_title:after,
.page_title:before {
  content: "";
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-top: 2px solid #ccdbd4;
  margin: 0 13px;
}
.item{
  border: 1px solid #000;
  background-color: #000;
  padding: 5px;
  width: 33%;
  height: 350px;
  background-size: cover;
}
.aa1{
  background-image: url('../assets/pic/BlueEyesWhiteDragon.jpg');
  background-color: rgba(255, 255, 255, 0);
}
.aa2{
  background-image: url('../assets/pic/fusion.jpg');
}
.aa3{
  background-image: url('../assets/pic/mirrorforce.jpg');
}
.ww{
  color: #fff;
  font-size: 35px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 50px;
}
</style>

<script>
import homeCarousel from '../components/HomeCarousel.vue'
import productCarousel from '../components/ProductCarousel.vue'

export default {
  data () {
    return {
      swiper: {}
    }
  },
  components: {
    homeCarousel,
    productCarousel
  }
}
</script>
