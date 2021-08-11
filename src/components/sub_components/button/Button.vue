<template>
  <router-link :to="to" class="button">
    <!-- <img src="./src/assets/logo.png" alt="注文ボタン"> -->
    <img src="/images/bell.PNG" alt="注文ボタン" width="200" height="200">
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
  font-size: 24px;
  color: #fff;
}
</style>
