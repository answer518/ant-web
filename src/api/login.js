import axios from '@/utils/request'

// 获取图片验证
const getCode = sid => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid,
    },
  })
}

// 忘记密码
const forget = option => {
  return axios.post('/login/forget', {
    ...option,
  })
}

// 用户登录
const login = loginInfo => {
  return axios.post('/login/login', {
    ...loginInfo,
  })
}

// 用户注册
const reg = regInfo => {
  return axios.post('/login/reg', {
    ...regInfo,
  })
}

export { getCode, forget, login, reg }
