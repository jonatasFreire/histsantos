import Vue from 'vue'
import Router from 'vue-router'
import intro from '@/components/intro'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HistSantos',
      component: intro
    }
  ]
})
