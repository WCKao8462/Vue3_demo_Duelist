<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid" style="max-width: 1140px" ref="collapse">
      <button type="button" class="navbar-toggler mb-3" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h4 class="text-dark p-3 bg-white fw-bolder">後臺管理員</h4>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li type="button" class="nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" :class="{'active': isThisPage('/dashboard/products')}" @click="toPage('products')">
            產品列表
          </li>
          <li type="button" class="nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" :class="{'active': isThisPage('/dashboard/coupons')}" @click="toPage('coupons')">
            優惠券
          </li>
          <li type="button" class="nav-item navbar-brand m-2 p-3 fw-bolder rounded-pill" :class="{'active': isThisPage('/dashboard/orders')}" @click="toPage('orders')">
            訂單
          </li>
        </ul>
        <div class="navbar-nav ms-4">
          <a class="nav-link py-3 px-2" href="#" @click.prevent="logOut">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse'

export default {
  data () {
    return {
      collapse: {}
    }
  },
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
          this.$store.dispatch('receiveMessage', {
            style: 'success',
            title: '登出成功'
          })
        }
      })
    },
    toPage (link) {
      this.$router.push(`/dashboard/${link}`)
    },
    isThisPage (link) {
      return this.$route.fullPath === link
    }
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.collapse)
  }
}
</script>

<style scoped>
.active{
  background-color: #B3B6DB;
  color: #000;
}
</style>
