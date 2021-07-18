<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單資料</span>
          </h5>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <table class="table text-center mt-5">
            <thead class="mb-4 p-2 fs-4">
                <th class="text-info p-2">品名</th>
                <th class="text-info p-2">數量</th>
                <th class="text-info p-2">單價</th>
            </thead>
            <tbody>
                <tr v-for="item in order.products" :key="item.id">
                <td>{{ item.product.title}}</td>
                <td>{{ item.qty}}</td>
                <td>{{ item.final_total}}</td>
                </tr>
            </tbody>
            <br>
            <tfoot>
                <tr>
                <td colspan="2" class="text-center text-warning h4 p-2">總計</td>
                <td class="text-center text-warning h4 p-2">{{order.total}}</td>
                </tr>
            </tfoot>
            </table>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/ModalMixin'

export default {
  data () {
    return {
      modal: {}
    }
  },
  props: {
    order: {
      type: Object,
      default () { return {} }
    }
  },
  mixins: [modalMixin]
}
</script>
