<template>
  <div>
    <div class="game-title">もぐもグエスト</div>

    <div>
      <router-link to="/first" class="start-btn">GAME START</router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.game-title {
  color: #fff;
  font-size: 60px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -25%);
}

.start-btn {
  color: #fff;
  font-size: 36px;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>