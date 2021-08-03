<template>
  <section>
    <div class="container mx-auto px-5 mt-5 py-3 text-white">
      <form class="row justify-content-center" @submit.prevent="signIn">
        <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only my-2">帳號</label>
          <input type="email" id="inputEmail" class="form-control p-3" placeholder="Email address" required autofocus v-model="user.username" />
        </div>
        <div class="mb-4">
          <label for="inputPassword" class="sr-only my-2">密碼</label>
          <input type="password" id="inputPassword" class="form-control p-3" placeholder="Password" required v-model="user.password" />
        </div>
        <br />
        <div class="d-grid my-3">
          <button type="submit" class="btn btn-outline-primary btn-lg my-4 fw-bolder">
            登入
          </button>
          <button type="button" class="btn btn-outline-light btn-lg my-3 fw-bolder" @click="backHome">
            回首頁
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          this.$router.push('/dashboard/products')
        }
      })
    },
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/viewScss/_login";
</style>
