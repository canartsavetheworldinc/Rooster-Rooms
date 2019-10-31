import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld'
import NotFound from './pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    }, {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
