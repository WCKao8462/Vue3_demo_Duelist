<template>
  <loading :active="tempIsLoading" class="text-center loading">
    <div class="circle"></div>
    <p class="loading fw-bolder text-white fs-3">LOADING</p>
  </loading>
</template>

<script>
export default {
  props: {
    tempIsLoading: {
      type: Boolean,
      default () { return false }
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/componentScss/_loadingCustom";
</style>
