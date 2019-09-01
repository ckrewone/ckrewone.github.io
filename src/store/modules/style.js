const style = {
  state: {
    pageY: 0
  },
  getters: {
    pageY: (state) => state.pageY
  },
  mutations: {
    UPDATE_PAGE_Y (state, payload) {
      state.pageY = payload
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
