<template>
  <div class="swiper-container2">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img
            src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1610593574644-ADXW3WQ33LL38X8BPSQH/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w"
            class="d-block w-100"
            alt="1"
          />
      </div>
      <div class="swiper-slide">
         <img
            src="https://d28ipuewd7cdcq.cloudfront.net/assets/article/2019/09/13/yu-gi-oh-legacy_feature.jpg"
            class="d-block w-100"
            alt="2"
          />
      </div>
      <div class="swiper-slide">
        <img
            src="https://image.api.playstation.com/vulcan/img/cfn/11307Ll0hD6LYOT41O16OID380nyJ9TCE9F8purgJg7NOetknBQQaqw-5NCwelnhIOh2EQxboFqDEHszqochjAoB6rINvCS9.png"
            class="d-block w-100"
            alt="3"
          />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.css'
import $ from 'jquery'

export default {
  data () {
    return {
      swiper: {}
    }
  },
  mounted () {
    $(document).ready(function () {
      this.swiper = new Swiper('.swiper-container2', {
        // Optional parameters
        speed: 500,
        loop: true,
        autoplay: {
          delay: 3000
        },
        effect: 'flip',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
  }
}
</script>

<style scoped>
.swiper-container2 {
  width: 100%;
  max-height: auto;
  margin-bottom: 20px;
}
</style>
