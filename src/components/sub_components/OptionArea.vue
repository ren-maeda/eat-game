<template>
  <div class="option">
    <div v-for="(food, index) in this.foods" :key="index" class="food-box">
      <img :src="food.path" :alt="food.name" class="food" @click="input(food.name)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    foods: { type: Array, required: true },
    values: { type: Object, required: true }
  },
  computed: {
    inputValues: {
      get () {
        return this.values
      },
      set (value) {
        this.$emit('update:values', value)
      }
    }
  },
  methods: {
    input (valuesName) {
      this.inputValues = this.foods.name.valuesName
    }
  }
}
</script>

<style>
:root {
  --item-num: 5;
  --item-margin: 24px;
}

.option {
  width: 40%;
  height: 30%;
  border: 1px solid #fff;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.food-box {
  width: calc(100% / var(--item-num) - var(--item-margin));
}

.food {
  /* margin: 0 5px var(--item-margin); */
  /* width: calc(100% / var(--item-num) - var(--item-margin)); */
  width: 90%;
  /* width: 18%;
  margin: 0 5px; */
  border: 1px solid #fff;
}

</style>
