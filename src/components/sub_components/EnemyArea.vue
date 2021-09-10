<template>
  <div class="area">
    <img :src="src" :alt="alt" width="500" height="500" class="enemy">
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
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
}

</style>
