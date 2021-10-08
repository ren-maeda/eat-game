<template>
  <div class="container">
    <Title/>

    <div class="area">
      <!-- カロリー情報 -->
      <BattleInfo/>

      <!-- 敵画像 -->
      <EnemyArea src="/images/enemy1_active.png" alt="敵1"/>

      <!-- オーダー表 -->
      <OrderList :orderContents="orderContents"/>

      <!-- 主人公 -->
      <Human/>

      <!-- 選択肢 -->
      <OptionArea :foods="foods"
                    :values.sync="values"/>
    </div>
    <Button to="/second"/>
  </div>
</template>

<script>
import Title from '@/components/sub_components/Title'
import BattleInfo from '@/components/sub_components/BattleInfo'
import EnemyArea from '@/components/sub_components/EnemyArea'
import OrderList from '@/components/sub_components/OrderList'
import Human from '@/components/sub_components/Human'
import OptionArea from '@/components/sub_components/OptionArea'
import Button from '@/components/sub_components/button/Button'

export default {
  data () {
    return {
      foods: [
        {name: 'アボカド', cal: 190, path: '/images/foods/first/avocado.png'},
        {name: 'バナナ', cal: 100, path: '/images/foods/first/banana.png'},
        {name: 'コーラ', cal: 230, path: '/images/foods/first/cola.png'},
        {name: '牛', cal: 630000, path: '/images/foods/first/cow.png'},
        {name: 'シュークリーム', cal: 210, path: '/images/foods/first/cream_puff.png'},
        {name: 'かき氷', cal: 70, path: '/images/foods/first/kakigoori.png'},
        {name: '牡蠣', cal: 10, path: '/images/foods/first/oyster.png'},
        {name: 'ラーメン', cal: 450, path: '/images/foods/first/ramen.png'},
        {name: 'サーロインステーキ', cal: 800, path: '/images/foods/first/sirloin_steak.png'},
        {name: 'タピオカ', cal: 350, path: '/images/foods/first/tapioca.png'}
      ],
      orderContents: ['アボカド', 'コーラ'],
      values: {}
    }
  },
  components: {
    Title,
    BattleInfo,
    EnemyArea,
    OrderList,
    Human,
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
