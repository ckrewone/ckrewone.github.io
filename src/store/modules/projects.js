const projects = {
  state: {
    pageY: 0,
    style: {
      marginLeft: 0
    }
  },
  getters: {
    pageY: (state) => state.pageY,
    style: (state) => state.style
  },
  mutations: {
    UPDATE_PAGE_Y (state, payload) {
      state.pageY = payload
      state.style.marginLeft = payload
    }
  },
  actions: {
    updatePageY ({ commit }, payload) {
      commit('UPDATE_PAGE_Y', payload)
    }
  },
  namespaced: true
}

export default style
