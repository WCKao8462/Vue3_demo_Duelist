<template>
  <navbar></navbar>
  <div class="container-fluid">
    <div class="container-fluid mt-3 position-relative">
      <toastMessage></toastMessage>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/back/Navbar.vue'
import emitter from '@/methods/emitter'
import toastMessage from '@/components/ToastMessage.vue'

export default {
  components: {
    navbar,
    toastMessage
  },
  provide () {
    return {
      emitter
    }
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

<style scoped>
.container-fluid{
  max-width: 1140px;
}
</style>
