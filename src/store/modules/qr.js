export default {
  state: {
    code: null
  },
  actions: {
    setCode (context, payload) {
      context.commit('setCode', payload)
    },
    resetCode (context, payload) {
      context.commit('setCode', payload)
    }
  },
  mutations: {
    setCode (state, payload) {
      state.code = payload
    }
  },
  getters: {
    getCode: state => state.code
  }
}
