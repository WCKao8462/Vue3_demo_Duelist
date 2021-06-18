<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg2">
    <div class="container-fluid justify-content-between">
      <div class="d-flex align-items-center">
        <router-link class="navbar-brand" to="/home"><img src="..\assets\pic\BEWDicon2.jpg" alt="" style="height: 60px"></router-link>
        <router-link class="navbar-brand ms-4" to="/cart">卡牌列表</router-link>
      </div>
      <div class="d-flex">
        <router-link class="navbar-brand ms-2" to="/login">
        <i class="bi bi-person-square"></i></router-link>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.container-fluid {
  max-width: 1140px;
}
.btn-cart {
  position: relative;
}
.btn-cart .badge {
  position: absolute;
  top: -5px;
  right: -10px;
}
.bg-lighter{
  background-color: rgba(255, 255, 255, .5);
}
.bg2{
  background-color: #242220;
}
</style>
