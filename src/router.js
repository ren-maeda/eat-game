import Vue from 'vue'
import Router from 'vue-router'

// バトルステージ
import Top from '@/components/Top'
import First from '@/components/stage/First'
import Second from '@/components/stage/Second'
import Third from '@/components/stage/Third'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    }
  ]
})