import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentUser: {"token":"eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyRGV0YWlscyI6IntcInVzZXJuYW1lXCI6XCJiZW5pbmFAZW1haWwuY29tXCIsXCJwYXNzd29yZFwiOm51bGwsXCJhdXRvcml6YWNhb1wiOlwiUk9MRV9BRE1JTlwiLFwidG9rZW5cIjpudWxsfSIsImlzcyI6ImJyLmdvdi5zcC5mYXRlYyIsInN1YiI6ImJlbmluYUBlbWFpbC5jb20iLCJleHAiOjE2MDcwNDExNTJ9.dNS4Yvey0jpZQIOd_ah3w_kgHayIeJHgOzfSkgx2N0APz8g1Jd6qJH3UUyY1gzIopJWnfHKsHgOmAHUHsYTnCA","autorizacao":"ROLE_ADMIN","email":"benina@email.com"}
  },
  mutations: {
      setCurrentUser (state, value) {
          state.currentUser = value
      }
  },
  actions: {
  },
  modules: {
  }
})
