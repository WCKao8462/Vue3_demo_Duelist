<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid" style="max-width: 1140px">
      <a class="navbar-brand" href="#">後臺管理員</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between ms-5" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/dashboard/products">產品列表</router-link>
          <router-link class="nav-link" to="/dashboard/coupons">優惠券</router-link>
          <router-link class="nav-link" to="/dashboard/orders">訂單</router-link>
        </div>
        <div class="navbar-nav">
          <a class="nav-link" href="#" @click.prevent="logOut">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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
  }
}
</script>
