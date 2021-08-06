<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container" ref="collapse">
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand text-center" to="/">
        <img src="../../assets/img/BEWDicon2.jpg" alt="logo" style="height: 50px;" />
        <p class="homeWord">DUELIST</p>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li type="button" class="nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" :class="{'active': isThisPage('/product')}" @click="toPage('product')">
            卡牌專區
          </li>
          <li type="button" class="nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" :class="{'active': isThisPage('/coupon_game')}" @click="toPage('coupon_game')">
            折扣小卡
          </li>
          <li type="button" class="nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" :class="{'active': isThisPage('/order')}" @click="toPage('order')">
            結帳
          </li>
        </ul>
        <router-link class="d-block nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" to="/login"><i class="bi bi-person-square"></i> 後台管理</router-link>
        <form class="d-flex py-3 px-4 my-2" @submit.prevent="toOrderList(orderId)">
          <button type="submit" class="btn btn-outline-primary fw-bold"><i class="bi bi-search"></i></button>
          <input class="form-control me-2 fw-bold" type="search" placeholder="訂單查詢" aria-label="訂單查詢" v-model="orderId" />
        </form>
      </div>
    </div>
  </nav>
  <div class="w-100" style="position: fixed; right: 0; top: 2%; z-index: 100;">
    <ToastMessage></ToastMessage>
  </div>
  <router-view></router-view>
  <footer class="footer py-3 mt-auto">
    <div class="container">
      <div class="row text-dark">
        <div class="col-sm d-flex align-items-center justify-content-center">
          <a href="#" class="text-reset">
            <i class="bi bi-facebook fs-2 p-2"></i>
          </a>
          <a href="#" class="text-reset">
            <i class="bi bi-instagram fs-2 p-2"></i>
          </a>
          <a href="#" class="text-reset">
            <i class="bi bi-twitter fs-2 p-2"></i>
          </a>
        </div>
        <div class="col-sm d-flex align-items-center justify-content-center py-3">
          <p class="fw-bold">
            本網站純屬練習，不做任何商業用途<br />
            圖片取自網路、Konami
          </p>
        </div>
        <div class="col-sm m-auto">
          <ul class="d-flex flex-column justify-content-center fw-bold">
            <li>
              <i class="bi bi-telephone-fill"></i> 電話 : <a class="text-dark" href="tel:0912345678">0912345678</a>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i> 信箱 : <a class="text-dark" href="mailto:duelist@mail.com.tw">duelist@mail.com.tw</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
  data () {
    return {
      orderId: '',
      collapse: {}
    }
  },
  components: {
    ToastMessage
  },
  methods: {
    toOrderList (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(url).then((res) => {
        if (res.data.order === null) {
          alert('無此筆訂單資料')
        } else if (res.data.order === undefined) {
          alert('不可空白')
        } else {
          this.$router.push(`/checkout/${id}`).then(() => {
            window.location.reload()
          })
        }
        this.orderId = ''
      })
    },
    toPage (link) {
      this.$router.push(`/${link}`)
      const toggleDispear = document.getElementById('navbarSupportedContent')
      toggleDispear.classList.remove('show')
    },
    isThisPage (link) {
      return this.$route.fullPath === link
    }
  },
  created () {
    this.orderId = ''
    this.$store.dispatch('getCart')
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.collapse)
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_userboard";
</style>
