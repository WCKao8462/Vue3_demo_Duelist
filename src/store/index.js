import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    products: [],
    cart: [],
    order: {
      products: {},
      user: {},
      is_paid: false
    }
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getProducts (context) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(url).then((res) => {
        context.commit('PRODUCTS', res.data.products)
        context.commit('LOADING', false)
        console.log('取得產品資料')
      })
    },
    getCart (context) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      axios.get(url).then((res) => {
        context.commit('CART', res.data.data)
        context.commit('LOADING', false)
        console.log('取得購物車資料', res.data.data)
      })
    },
    removeCart (context, id) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      axios.delete(url).then((res) => {
        context.dispatch('getCart')
        context.commit('LOADING', false)
        console.log('刪除購物車')
      })
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    CART (state, payload) {
      state.cart = payload
    }
  }
})
