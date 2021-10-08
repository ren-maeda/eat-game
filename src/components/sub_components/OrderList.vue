<template>
  <div class="boder">
    <ul class="contents-list">
      <li v-for="(orderContent, index) in this.orderContents" :key="index"
          class="content-text">
          {{orderContent}}
          <div class="delete-btn">×</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    orderContents: { type: Array, required: true }
  }
}
</script>

<style>

.boder {
  border: 1px solid #fff;
  width: 20%;
  height: 50%;
  position: absolute;
  top: 15%;
  right: 40px;
}

.contents-list {
  margin: 15px;
}

.content-text {
  color: #fff;
  list-style: none;
  font-size: 28px;
  display: flex;
  justify-content: space-between;
}

.delete-btn {
  color: #fff;
}

</style>
