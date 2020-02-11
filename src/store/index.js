import Vuex from 'vuex'
import style from './modules/style'
import Vue from 'vue'
import info from './modules/info'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    style,
    info,
    projects
  },
  strict: process.env.NODE_ENV !== 'production'
})
