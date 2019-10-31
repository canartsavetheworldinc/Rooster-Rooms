import Vue from 'vue'
import VModal from 'vue-js-modal'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VModal)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
