<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid" ref="collapse">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand text-center" to="/">
        <img src="../../assets/pic/BEWDicon2.jpg" alt="" style="height: 50px;" />
        <p class="homeWord">DUELIST</p>
      </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item py-3">
            <router-link class="navbar-brand ms-4" to="/product">卡牌專區</router-link>
          </li>
          <li class="nav-item py-3">
            <router-link class="navbar-brand ms-4" to="/coupon_game">折扣小卡</router-link>
          </li>
          <li class="nav-item py-3">
            <router-link class="navbar-brand ms-4" to="/order">結帳</router-link>
          </li>
        </ul>
        <router-link class="navbar-brand py-3 ms-4" to="/login"><i class="bi bi-person-square"></i>後台管理</router-link>
        <form class="d-flex py-3 px-4 my-2" @submit.prevent="toOrderList(orderId)">
          <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
          <input class="form-control me-2 idSearch text-white" type="search" placeholder="訂單查詢" aria-label="訂單查詢" v-model="orderId" />
        </form>
      </div>
    </div>
  </nav>
  <div class="w-100" style="position: fixed; right: 0; top: 2%; z-index: 100;">
    <toastMessage></toastMessage>
  </div>
  <router-view></router-view>
  <section class="footer p-2 mt-5">
    <div class="container">
      <div class="row text-white">
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
          <p>
            本網站純屬練習，不做任何商業用途<br />
            圖片取自網路、Konami
          </p>
        </div>
        <div class="col-sm m-auto">
          <ul class="d-flex flex-column justify-content-center">
            <li>
              電話 :
              <a href="tel:0912345678">0912345678</a>
            </li>
            <li>
              信箱 :
              <a href="duelist@mail.com.tw">duelist@mail.com.tw</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'
import emitter from '@/methods/emitter'
import toastMessage from '@/components/ToastMessage.vue'

export default {
  data () {
    return {
      orderId: '',
      collapse: {}
    }
  },
  components: {
    toastMessage
  },
  provide () {
    return {
      emitter
    }
  },
  methods: {
    toOrderList (id) {
      this.$router.push(`/checkout/${id}`)
      this.orderId = ''
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');

.container-fluid {
  max-width: 1140px;
}
.homeWord{
  font-family: 'Bowlby One', cursive;
  font-size: 16px;
}
.idSearch{
  background-color: #000;
  border: 1px solid #000;
}
.footer {
  background-color: #57507d;
  height: auto;
  text-decoration: none;
}
.footer li {
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
  list-style-type: none;
}
</style>
