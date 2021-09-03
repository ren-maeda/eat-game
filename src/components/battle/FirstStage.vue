<template>
  <div class="container">
    <Title/>

    <div class="area">
      <!-- カロリー情報 -->
      <BattleInfo/>

      <!-- 敵画像 -->
      <EnemyArea src="/images/enemy1_active.PNG" alt="敵1"/>

      <!-- オーダー表 -->
      <OrderTable/>

      <!-- 選択肢 -->
      <OptionArea/>
    </div>
    <Button to="/battle/second"/>
  </div>
</template>

<script>
import Title from '@/components/sub_components/Title'
import BattleInfo from '@/components/sub_components/BattleInfo'
import EnemyArea from '@/components/sub_components/EnemyArea'
import OrderTable from '@/components/sub_components/OrderTable'
import OptionArea from '@/components/sub_components/OptionArea'
import Button from '@/components/sub_components/button/Button'

export default {
  components: {
    Title,
    BattleInfo,
    EnemyArea,
    OrderTable,
    OptionArea,
    Button
  }
}
</script>

<style scoped>

.area {
  width: 80%;
  margin: 0 auto;
}

</style>
