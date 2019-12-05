import Vue from 'vue'
import Router from 'vue-router'

import NotFound from './pages/NotFound'
import Top from './pages/Top'
import Introduction from './pages/Introduction'
import Edit from './pages/Edit'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    }, {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
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
