import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  strict: true,
  state: {
    isLoading: false,
    products: [],
    card: [],
    productsAdmin: [],
    couponsAdmin: [],
    ordersAdmin: [],
    pagination: {},
    cart: [],
    order: {
      products: {},
      user: {},
      is_paid: false
    },
    message: {
      style: '',
      title: '',
      content: ''
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
    updateAdmin (context, option) {
      context.commit('LOADING', true)
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
    getCard (context, id) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      axios.get(url).then((res) => {
        context.commit('CARD', res.data.product)
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
    addCart (context, obj) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: obj.id,
        qty: obj.qty
      }
      axios.post(url, { data: cart }).then((res) => {
        if (res.data.success) {
          context.dispatch('receiveMessage', {
            style: 'success',
            title: obj.title + ' 已加入牌組'
          })
          context.dispatch('getCart')
          context.commit('LOADING', false)
        }
      })
    },
    removeCart (context, obj) {
      context.commit('LOADING', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${obj.id}`
      axios.delete(url).then((res) => {
        if (res.data.success) {
          context.dispatch('receiveMessage', {
            style: 'danger',
            title: obj.title + ' 已移出牌組'
          })
        }
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
          context.dispatch('getCart')
          context.commit('LOADING', false)
        }
      })
    },
    receiveMessage (context, message) {
      context.commit('MESSAGE', message)
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
    CARD (state, payload) {
      state.card = payload
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
    },
    MESSAGE (state, payload) {
      state.message = payload
    }
  }
})
