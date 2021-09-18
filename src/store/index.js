import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      expiresIn: null
    }
  },
  mutations: {
    setExpiresIn(state, val) {
      state.expiresIn = val
    }
  }
})