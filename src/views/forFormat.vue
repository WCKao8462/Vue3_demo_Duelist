<template>
  <loading :active="isLoading"></loading>
  <div class="row justify-content-center">
    <div class="list-group mt-4 col-lg-3">
      <div class="sticky-top ml-3" style="top: 10px">
        <button
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="setCard('')"
        >
          全部
        </button>
        <button
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="setCard('不知火')"
        >
          不知火牌組
        </button>
        <button
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="setCard('魔女工坊')"
        >
          魔女工坊牌組
        </button>
        <button
          class="list-group-item list-group-item-action"
          aria-current="true"
          @click="setCard('召喚')"
        >
          召喚師牌組
        </button>
      </div>
    </div>
    <div class="d-flex flex-wrap mt-4 col-lg-9">
      <div class="col-md-4 mb-4" v-for="item in filterSearch" :key="item.id">
        <div class="card" style="width: 18rem">
          <div
            style="
              height: 250px;
              background-size: 60%;
              background-position: center;
              background-repeat: no-repeat;
            "
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text"></p>
            <div class="d-flex justify-content-between align-items-baseline">
              <del class="h6">原價 {{ item.origin_price }} 元</del>
              <div class="h5">現在只要 {{ item.price }} 元</div>
            </div>
            <div class="d-flex justify-content-between">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="getProduct(item.id)"
              >
                <i class="fas fa-spinner fa-spin"></i>
                查看更多
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-auto"
                @click="addCart(item.id)"
                :disabled="this.status.loadingItem === item.id"
              >
                <div
                  class="spinner-grow spinner-grow-sm text-danger"
                  role="status"
                  v-if="this.status.loadingItem === item.id"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <i class="fas fa-spinner fa-spin"></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-5">
      <div class="sticky-top">
        <table class="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style="width: 110px">數量</th>
              <th class="text-center">單價</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="deleteCart(item.id)"
                >
                  <i class="bi bi-x"></i>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success">已套用優惠券</div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    max="10"
                    v-model.number="item.qty"
                    @change="updateCart(item)"
                    :disabled="item.id === status.loadingItem"
                  />
                  <div class="input-group-text">/ 張</div>
                </div>
              </td>
              <td class="text-center">
                {{ item.total }}
              </td>
              <td class="text-center">
                <small class="text-success"
                  >折扣價：{{ item.final_total }}</small
                >
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入優惠碼"
            v-model="couponCode"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

-Mbjvr388crzofpom84n