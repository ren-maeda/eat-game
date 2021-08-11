import Vue from 'vue'
import Router from 'vue-router'

// バトルステージ
import FirstStage from '@/components/battle/FirstStage'
import SecondStage from '@/components/battle/SecondStage'
import ThirdStage from '@/components/battle/ThirdStage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/battle/first',
      name: 'FirstStage',
      component: FirstStage
    },
    {
      path: '/battle/second',
      name: 'SecondStage',
      component: SecondStage
    },
    {
      path: '/battle/third',
      name: 'ThirdStage',
      component: ThirdStage
    }
  ]
})