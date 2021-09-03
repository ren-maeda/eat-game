<template>
  <router-link :to="to" class="button">
    <img src="/images/next_button.png" alt="次へ" width="100">
  </router-link>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true }
  }
}
</script>

<style scoped>

.button {
  position: absolute;
  right: 40px;
  bottom: 20px;
}
</style>
