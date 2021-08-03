<template>
  <div class="d-flex justify-content-end cartBtn">
    <button type="button" class="btn deck" @click="openModal()">
      <span class="badge rounded-pill bg-secondary">
        <div class="fs-5">{{ cartNum }}</div>
      </span>
    </button>
  </div>
  <CartModal ref="cartModal"></CartModal>
</template>

<script>
import CartModal from '@/components/front/CartModal.vue'
export default {
  components: {
    CartModal
  },
  computed: {
    cartNum () {
      if (this.$store.state.cart.carts === undefined) {
        return 0
      } else {
        return this.$store.state.cart.carts.length
      }
    }
  },
  methods: {
    openModal () {
      const cartComponent = this.$refs.cartModal
      cartComponent.showModal()
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/componentScss/_cartBtn";
</style>
