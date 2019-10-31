import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './pages/NotFound'
import Top from './pages/Top'
import Edit from './pages/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Top
    }, {
      path: '/edit/:data',
      name: 'edit',
      props: true,
      component: Edit
    }, {
      path: '/edit',
      name: 'edit',
      component: Edit
    }, {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
