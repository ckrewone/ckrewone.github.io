import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { ICONS } from './icons/FontAwesomeSvgIcons'

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas, far);

Vue.use(Vuetify, {
  icons: ICONS
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
