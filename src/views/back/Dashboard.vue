<template>
  <Navbar></Navbar>
  <div class="container mt-3 position-relative">
    <ToastMessage></ToastMessage>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/back/Navbar.vue'
import ToastMessage from '@/components/ToastMessage.vue'

export default {
  components: {
    Navbar,
    ToastMessage
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}/api/user/check`
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('login')
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_forBack";
</style>
