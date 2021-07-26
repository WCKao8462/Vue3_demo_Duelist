<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center mb-5" v-if="pages.total_pages > 1">
      <li class="page-item">
        <button class="page-link fs-4" aria-label="Prev" @click.prevent="updatePage(pages.current_page - 1)" :disabled="!pages.has_pre" :class="{'text-white text-decoration-line-through': !pages.has_pre}">
          <span aria-hidden="true">上一頁</span>
        </button>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{'active': page === pages.current_page }">
        <button class="page-link fs-4" @click.prevent="updatePage(page)">{{ page }}</button>
      </li>
      <li class="page-item" disabled>
        <button class="page-link fs-4" aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)" :disabled="!pages.has_next" :class="{'text-white text-decoration-line-through': !pages.has_next}">
          <span aria-hidden="true">下一頁</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/componentScss/_pagination";
</style>
