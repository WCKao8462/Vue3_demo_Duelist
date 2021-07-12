<template>
  <div class="dropdown ml-auto mt-5" ref="dropdown">
    <button class="btn deck" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
      <span class="badge rounded-pill bg-primary">
        <div id="order">{{ order }}</div>
      </span>
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
      <div class="px-4 py-3" v-if="order !== 0">
        <table class="table">
          <thead>
            <th class=""></th>
            <th class="text-center fw-bold ">卡片名</th>
            <th class="text-center fw-bold ">數量</th>
            <th class="text-center fw-bold ">單價</th>
          </thead>
          <br />
          <tbody>
            <tr v-for="item in tempCart.carts" :key="item.id" class="">
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteItem(item.id)">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
              <td class="text-center ">{{ item.product.title }}</td>
              <td class="text-center ">{{ item.qty }}</td>
              <td class="text-center text-right ">{{ item.total }}元</td>
            </tr>
          </tbody>
          <hr />
          <tfoot>
            <tr>
              <td colspan="3" class="text-center">總計</td>
              <td class="text-center">{{ tempCart.total }}元</td>
            </tr>
          </tfoot>
        </table>
        <div class="d-grid">
          <button class="btn btnCheckout" @click="toOrder">結帳</button>
        </div>
      </div>
      <div class="px-4 py-3 text-white text-center" v-else>
        您還沒把卡片加入牌組中喔!
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from 'bootstrap/js/dist/dropdown'

export default {
  props: {
    tempCart: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      dropdown: {},
      order: 0
    }
  },
  watch: {
    tempCart () {
      this.order = this.tempCart.carts.length
    }
  },
  methods: {
    toOrder () {
      this.$router.push('/order')
    },
    deleteItem (id) {
      this.$emit('delete-item', id)
    }
  },
  mounted () {
    this.dropdown = new DropDown(this.$refs.dropdown)
  }
}
</script>

<style scoped>
.badge{
  position: absolute;
  top: -1px;
  right: -3px;
}
.dropdown-menu{
  background-color: #000;
  border: 3px solid #fff;
  border-radius: 25px;
}
.dropdown-menu th, .dropdown-menu td{
  color:#fff;
}
.dropdown-menu-right{
  right: 0;
  left: auto;
  min-width: 500px;
}
.deck{
  background-image: url('../../assets/pic/deck.png');
  height: 70px;
  width: 70px;
  background-size: cover;
  border-radius: 35px;
  position: relative;
  border: 2px solid #fff;
}
.deck:hover{
  border: 2px solid red;
}
#order{
  font-size: 20px;
}
.btnCheckout{
  background-color: purple;
  color:#fff;
}
.btnCheckout:hover{
  font-weight: bold;
  border: 3px solid #fff;
}
</style>
