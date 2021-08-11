<template>
  <div class="area">
    <img :src="src" :alt="alt" class="enemy">
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: false }
  }
}
</script>

<style scoped>

.enemy {
  width: 400px;
  height: 400px;
  display: block;
  margin: 0 auto;
}

</style>
