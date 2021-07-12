import cartDropdown from '../components/front/CartDropdown.vue'

export default {
  data () {
    return {
      cart: {},
      isLoading: false
    }
  },
  components: {
    cartDropdown
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.tempCart = this.cart
        this.isLoading = false
      })
    },
    deleteCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          console.log('刪除成功')
          this.getCart()
          this.isLoading = false
          this.emitter.emit('push-message', {
            style: 'secondary',
            title: '已將卡片刪除'
          })
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
