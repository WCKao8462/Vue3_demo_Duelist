<template>
<div class="container mb-5">
  <div class="grid second-nav">
      <div class="column-xs-12">
        <nav>
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Household Plants</a></li>
            <li class="breadcrumb-item active">Bonsai</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="grid product d-flex">
      <div class="column-xs-12 column-md-7">
        <img class="active" :src="product.imageUrl">
      </div>
      <div class="column-xs-12 column-md-5 ps-3">
        <h1>{{ product.title }}</h1>
        <div class="d-flex justify-content-between">
          <h4>原價{{ product.origin_price }}元</h4>
          <h2 class="fw-bold">現在只要{{ product.price }}元</h2>
        </div>
        <div class="description">
          <p>{{ product.content }}</p>
        </div>
        <div class="d-flex justify-content-center">
          <div class="input-group input-group-sm">
            <input type="number" class="col-2" min="1" max="10" v-model.number="qty">
            <div class="input-group-text">/ 張</div>
          </div>
          <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto mmm" @click="addCart(id)"
                  >
                    <i class="fas fa-spinner fa-spin"></i>
                    加進牌組
                  </button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      product: [],
      qty: 1,
      status: {
        loadingItem: ''
      }
    }
  },
  methods: {
    getProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
        console.log(this.product)
      })
    },
    addCart (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.qty
      }
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = ''
        this.$router.push('/cart')
      })
    }
  },
  created () {
    this.getProduct(this.id)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pontano+Sans');

$white: #fff;
$black: #333;
$lightergray: #d5d5d5;
$lightgray: #f0f3f1;
$gray: #e3dddd;
$text: #888;
$button: #3e3e3f;
$button-hover: #565657;

* {
  box-sizing: border-box;
  &::before, &::after {
    box-sizing: border-box;
  }
}

body {
  font-family: 'Pontano Sans', sans-serif;
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  color: $text;
  background: $white;
  text-rendering: optimizeLegibility;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    margin: 0 1.75rem 0 0;
  }
}

a {
  color: $text;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    color: $black;
  }
  &.active {
    color: $black;
  }
}

h1, h2, h3, h4 {
  color: $black;
  font-weight: normal;
  margin: 1.75rem 0 1rem 0;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2.125rem;
  margin: 0;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem 0;
}

section {
  display: block;
}

img {
  /* width: 100%; */
  height: auto;
  object-fit: cover;
}

nav {
  display: block;
  li {
    font-size: 1.125rem;
    margin: 0;
  }
}

.flex-nav ul {
  position: absolute;
  z-index: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  display: none;
  width: 100%;
  left: 0;
  padding: 1rem;
  background: $white;
  text-align: center;
  &.active {
    display: flex;
  }
  li {
    margin: 0.5rem 0;
  }
}

.toggle-nav {
  display: flex;
  justify-content: flex-end;
  font-size: 1.125rem;
  line-height: 1.7;
  margin: 1rem 0;
  i {
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 0 0 0 0.5rem;
  }
}

#highlight {
  color: $black;
  font-size: 1.125rem;
  text-transform: uppercase;
}

.price {
  margin: 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 1rem 0 0 0;
  list-style: none;
  li {
    font-size: 0.85rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
}

.breadcrumb-item {
  &.active {
    color: $black;
  }
  + .breadcrumb-item {
    &::before {
      content: '/';
      display: inline-block;
      padding: 0 0.5rem;
      color: $lightergray;
    }
  }
}

.description {
  border-top: 0.0625rem solid $gray;
  margin: 2rem 0;
  padding: 1rem 0 0 0;
}

.add-to-cart {
  position: relative;
  display: inline-block;
  background: $button;
  color: $white;
  border: none;
  border-radius: 0;
  padding: 1.25rem 2.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transform: translateZ(0);
  transition: color 0.3s ease;
  letter-spacing: 0.0625rem;
  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }
  &::before {
    position: absolute;
    content: '';
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $button-hover;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s ease-out;
  }
}

.container {
  margin: auto;
  padding: 0 1rem;
  max-width: 75rem;
  width: 100%;
}

.grid {
  > [class*="column-"] {
    padding: 1rem;
  }
  &.menu, &.product {
    border-bottom: 0.0625rem solid $gray;
  }
  &.menu {
    > [class*="column-"] {
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
  &.product {
    padding: 0 0 1.5rem 0;
  }
  &.second-nav {
    > [class*="column-"] {
      padding: 0.5rem 1rem;
    }
  }
}

footer {
  padding: 1rem 0;
  text-align: center;
}

.product-image {
  display: none;
}

.image-list {
  li {
    margin: 0;
  }
}

@media (min-width: $md) {
  .product-image img, .image-list img {
    width: 100%;
  }

  .product-image {
    display: block;
    img {
      height: 52vh;
      &.active {
        display: block;
        margin: 0 0 0.75rem 0;
      }
    }
  }
  .image-list {
    display: flex;
    overflow: hidden;
    li {
      margin: 0 0.75rem 0 0;
      flex-basis: 100%;
      &:nth-child(3) {
        margin: 0;
      }
    }
    img {
      height: 10rem;
      width: 100%;
      transition: opacity 0.3s ease;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  nav ul {
    justify-content: flex-end;
  }

  .toggle-nav {
    display: none;
  }

  .flex-nav {
    display: block;
    ul {
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: flex-end;
      li {
        font-size: 1.125rem;
        margin: 0 1.5rem 0 0;
        &:nth-child(4) {
          margin: 0;
        }
      }
    }
  }
}

@keyframes fadeImg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mmm {
  border-color: #ddd;
  box-shadow: none;
  padding: 11px 28px;
  padding: 12px 30px;
  border: 1px solid #313131;
  background: #212121;
  color: #fff;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 27px;
  transition: all 0.05s ease-in-out;
}
h1, h2, h4, p{
  color: #fff;
}
</style>
