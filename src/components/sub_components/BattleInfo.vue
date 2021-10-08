<template>
  <div class="info">
    <p class="kcal-info">必要カロリー<span class="span">1000Kcal</span></p>
    <p class="kcal-info">誤差<span class="span">100Kcal</span></p>
  </div>
</template>

<script>
// export default {}
</script>

<style>

.info {
  border: 1px solid #fff;
  width: 20%;
  height: 30%;
  position: absolute;
  left: 40px;
  top: 20%;
}

.kcal-info {
  color: #fff;
  /* font-size: 42px; */
  font-size: 2em;
  margin: 10px;
}

.span {
  display: block;
}

</style>
