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
  <div class="container-fluid mt-3 position-relative">
    <router-view></router-view>
  </div>
  <div class="footer">
      <img
        src="https://raw.githubusercontent.com/hexschool/HTMLHWSource/master/singlePage/footerLogo.png"
        alt="腳尾logo"
      />
      <ul>
        <li>
          聯絡我們 :
          <a href="mail:hexschool@mail.com">hexschool@mail.com</a>
        </li>
        <li>
          電話 :
          <a href="tel:0912345678">0912345678</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  created () {
    console.log('這是nav')
  }
}
</script>

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
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #22b28e;;
  flex-wrap: wrap;
}
.footer img {
  padding: 10px;
}

.footer li {
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
