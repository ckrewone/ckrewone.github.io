const projects = {
  state: {
    projects: [
      {
        title: 'PiioApp',
        description: 'Lorem ipsum dolar amet 1',
        images: []
      },
      {
        title: 'JSON/XML CRUD',
        description: 'Lorem ipsum dolar amet 2',
        images: []
      },
      {
        title: 'Portfolio',
        description: 'Lorem ipsum dolar amet 3',
        images: []
      }
    ],
    activeIndex: 0
  },
  getters: {
    projects: (state) => state.projects,
    project: (state) => index => state.projects[index],
    activeProject: (state) => state.projects[state.activeIndex],
    active: (state) => state.activeIndex
  },
  mutations: {
    SET_ACTIVE (state, payload) {
      state.activeIndex = payload
    }
  },
  actions: {
    setActive ({ commit }, payload) {
      commit('SET_ACTIVE', payload)
    }
  },
  namespaced: true
}

export default projects
