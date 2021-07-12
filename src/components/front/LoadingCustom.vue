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

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  background-image: url("../../assets/pic/circle.png");
  background-size: cover;
  animation-name: runcircle;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes runcircle {
  100% {
    transform: rotate(360deg);
  }
}
</style>
