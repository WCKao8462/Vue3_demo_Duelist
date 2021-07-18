import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    products: [],
    productsAdmin: [],
    couponsAdmin: [],
    ordersAdmin: [],
    pagination: {},
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
    getProductsAdmin (context, page = 1) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      axios.get(api).then((res) => {
        if (res.data.success) {
          context.commit('PRODUCTS_ADMIN', res.data.products)
          context.commit('PAGINATION', res.data.pagination)
          context.commit('LOADING', false)
        }
      })
    },
    getCouponsAdmin (context, page = 1) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      axios.get(api).then((res) => {
        if (res.data.success) {
          context.commit('COUPONS_ADMIN', res.data.coupons)
          context.commit('PAGINATION', res.data.pagination)
          context.commit('LOADING', false)
        }
      })
    },
    getOrdersAdmin (context, page = 1) {
      context.commit('LOADING', true)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      axios.get(api).then((res) => {
        if (res.data.success) {
          context.commit('ORDERS_ADMIN', res.data.orders)
          context.commit('PAGINATION', res.data.pagination)
          context.commit('LOADING', false)
        }
      })
    },
    getProducts (context) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      axios.get(url).then((res) => {
        context.commit('PRODUCTS', res.data.products)
        context.commit('LOADING', false)
      })
    },
    getProductsWithPages (context, page = 1) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      axios.get(url).then((res) => {
        context.commit('PRODUCTS', res.data.products)
        context.commit('PAGINATION', res.data.pagination)
        context.commit('LOADING', false)
      })
    },
    getCart (context) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      axios.get(url).then((res) => {
        context.commit('CART', res.data.data)
        context.commit('LOADING', false)
      })
    },
    removeCart (context, id) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      axios.delete(url).then((res) => {
        context.dispatch('getCart')
        context.commit('LOADING', false)
      })
    },
    getOrder (context, orderId) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${orderId}`
      axios.get(url).then((res) => {
        if (res.data.success) {
          context.commit('ORDER', res.data.order)
          context.commit('LOADING', false)
        }
      })
    },
    payOrder (context, orderId) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${orderId}`
      axios.post(url).then((res) => {
        if (res.data.success) {
          context.dispatch('getOrder', orderId)
          context.commit('LOADING', false)
        }
      })
    }

  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PRODUCTS_ADMIN (state, payload) {
      state.productsAdmin = payload
    },
    COUPONS_ADMIN (state, payload) {
      state.couponsAdmin = payload
    },
    ORDERS_ADMIN (state, payload) {
      state.ordersAdmin = payload
    },
    CART (state, payload) {
      state.cart = payload
    },
    ORDER (state, payload) {
      state.order = payload
    }
  }
})
