import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    isLogin: false,
    token: '',
    loginUser: {},
    isHide: false,
    ws: null,
    num: 0,
  },
  mutations: {
    setSid(state, value) {
      state.sid = value
    },
    setToken(state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    setIsLogin(state, value) {
      state.isLogin = value
    },
    // 保存当前登录用户
    setLoginUser(state, value) {
      if (value === '') return
      state.loginUser = value
      // console.log(value)
      localStorage.setItem('loginUser', JSON.stringify(value))
    },
  },
  getters: {
    uid: state => (state.loginUser ? state.loginUser._id : ''),
  },
  actions: {},
})
