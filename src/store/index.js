import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      accessToken: null,
      refreshToken: null,
      expiresIn: null
    }
  },
  mutations: {
    setAccessToken(state, val){
      state.accessToken = val
    },
    setRefreshToken(state, val){
      state.refreshToken = val
    },
    setExpiresIn(state, val) {
      state.expiresIn = val
    }
  }
})