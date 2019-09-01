import Vuex from 'vuex'
import style from './modules/style'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    style
  },
  strict: process.env.NODE_ENV !== 'production'
})
