import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      expiresIn: null,
      hasAccessToken: false
    }
  },
  mutations: {
    setExpiresIn(state, val) {
      state.expiresIn = val
    },
    setHasAccesToken(state, val){
      state.hasAccessToken = val
    }
  }
})