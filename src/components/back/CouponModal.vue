<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增優惠券</span>
          </h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8">
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="price" class="form-label">優惠名稱</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入優惠名稱" v-model="tempCoupon.title" />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="price" class="form-label">優惠碼</label>
                  <input type="text" class="form-control" id="code" placeholder="請輸入優惠碼" v-model="tempCoupon.code" />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="origin_price" class="form-label">折扣</label>
                  <input type="number" class="form-control" id="percent" min="10" max="90" step="5" placeholder="請輸入折扣" v-model.number="tempCoupon.percent" />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  <label for="price" class="form-label">到期日</label>
                  <input type="number" class="form-control" id="due_date" placeholder="請輸入到期日" v-model="tempCoupon.due_date" />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="tempCoupon.is_enabled" id="is_enabled" />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-coupon', tempCoupon)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixin from '@/mixins/ModalMixin'

export default {
  data () {
    return {
      modal: {},
      tempCoupon: {
        due_date: new Date(2021, 9, 20).getTime() / 1000
      }
    }
  },
  props: {
    coupon: {
      type: Object,
      default () { return {} }
    }
  },
  mixins: [ModalMixin],
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
    }
  }
}
</script>
