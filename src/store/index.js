import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentUserToken: ''
  },
  mutations: {
      setCurrentUserToken (state, value) {
          state.currentUserToken = value
      }
  },
  actions: {
  },
  modules: {
  }
})
