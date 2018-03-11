import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home/'
import CityPage from '@/pages/City/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city',
      name: 'CityPage',
      component: CityPage
    }
  ]
})
