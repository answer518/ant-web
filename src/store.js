import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    token: '',
    userInfo: {},
    isHide: false,
    ws: null,
    num: 0
  },
  mutations: {
    setSid(state, value) {
      state.sid = value
    },
  },
  actions: {},
})
