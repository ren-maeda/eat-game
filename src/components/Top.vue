<template>
  <div>
    <div class="game-title">もぐもグエスト</div>

    <Next to="/battle/first"/>
  </div>
</template>

<script>
import Next from '@/components/sub_components/button/Next'

export default {
  components: {
    Next
  }
}
</script>

<style scoped>

.game-title {
  color: #fff;
  font-size: 48px;
}

</style>