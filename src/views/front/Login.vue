<template>
  <section>
    <div class="container mx-auto px-5 mt-5 py-3 text-white">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
      <div class="mb-2">
        <label for="inputEmail" class="sr-only my-2">帳號</label>
        <input type="email" id="inputEmail" class="form-control bg-dark p-3 text-white" placeholder="Email address" required autofocus v-model="user.username" />
      </div>
      <div class="mb-4">
        <label for="inputPassword" class="sr-only my-2">密碼</label>
        <input type="password" id="inputPassword" class="form-control bg-dark p-3 text-white" placeholder="Password" required v-model="user.password" />
      </div>
      <br>
      <div class="d-grid my-3">
        <button class="btn btn-lg login my-4" type="submit">
          登入
        </button>
          <button class="btn btn-lg toHome my-3" @click="backHome">
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
          console.log(res.data.message)
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

<style scoped>
section{
  background-image: url('../../assets/pic/yugioh_2.jpg');
  background-size: cover;
  height: 100vh;
  padding-top: 150px;
}
.container{
  max-width: 800px;
  background-color: rgba(20, 20, 20, 0.9);
  margin-top:250px;
}
.login{
  color: yellow;
  border: 1px solid yellow;
}
.login:hover{
  color: #000;
  background-color: yellow;
}
.toHome{
  color: green;
  border: 1px solid green;
}
.toHome:hover{
  color: #000;
  background-color: green;
}
</style>
