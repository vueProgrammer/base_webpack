import Vue from 'vue'
import App from './App.vue'

import './lib/rem.js'
import getData from '@/request/api'
import router from '@/router'
import store from '@/vuex'
import axios from 'axios'

Vue.prototype.$getData = getData
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
