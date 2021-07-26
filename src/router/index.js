import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Userboard.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/UserHome.vue')
      },
      {
        path: 'product',
        component: () => import('../views/front/UserProduct.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/front/UserProductDetail.vue'),
        props: (route) => {
          return {
            id: route.params.productId
          }
        }
      },
      {
        path: 'order',
        component: () => import('../views/front/UserCart.vue')
      },
      {
        path: 'information',
        component: () => import('../views/front/UserInformation.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/UserCheckout.vue')
      },
      {
        path: 'coupon_game',
        component: () => import('../views/front/UserCouponGame.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views//front/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/back/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/back/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/back/Orders.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
