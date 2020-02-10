import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Vuetify from 'vuetify'
import store from './store/index'
import 'vuetify/dist/vuetify.min.css'
import * as VueScrollTo from 'vue-scrollto'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(VueScrollTo, {
  duration: 2000
})
Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
