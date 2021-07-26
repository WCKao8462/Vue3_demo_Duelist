<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid" style="max-width: 1140px" ref="collapse">
      <button type="button" class="navbar-toggler mb-3" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand">後臺管理員</a>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav ms-4 me-auto">
          <router-link class="nav-link py-3 px-2" to="/dashboard/products">產品列表</router-link>
          <router-link class="nav-link py-3 px-2" to="/dashboard/coupons">優惠券</router-link>
          <router-link class="nav-link py-3 px-2" to="/dashboard/orders">訂單</router-link>
        </div>
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
          alert('登出成功')
          this.$router.push('/login')
        }
      })
    }
  },
  mounted () {
    this.collapse = new Collapse(this.$refs.collapse)
  }
}
</script>
