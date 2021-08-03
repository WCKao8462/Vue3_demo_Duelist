<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'

export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  computed: {
    message () {
      return this.$store.state.message
    }
  },
  watch: {
    message () {
      const { style, title, content } = this.message
      this.messages.push({ style, title, content })
    }
  }
}
</script>
