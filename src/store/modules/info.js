const style = {
  state: {
    name: 'Michal Zakowski',
    items: [
      {
        title: 'Home',
        scrollTo: {
          element: '#home'
        }
      },
      {
        title: 'O mnie',
        scrollTo: {
          el: '#about',
          duration: 1500
        }
      },
      {
        title: 'Projekty',
        scrollTo: {
          el: '#projects',
          duration: 1500
        }
      },
      {
        title: 'Kontakt',
        scrollTo: {
          el: '#contact',
          duration: 1500
        }
      }
    ],
    drawer: false
  },
  getters: {
    name: (state) => state.name,
    items: (state) => state.items,
    getdrawer: (state) => state.drawer
  },
  mutations: {
    UPDATE_NAME (state, payload) {
      state.name = payload
    },
    UPDATE_DRAWER (state, payload) {
      state.drawer = payload
    }
  },
  actions: {
    updateName ({ commit }, payload) {
      commit('UPDATE_NAME', payload)
    },
    updateDrawer ({ commit }, payload) {
      commit('UPDATE_DRAWER', payload)
    }
  },
  namespaced: true
}

export default style
