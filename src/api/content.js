import axios from '@/utils/request'
import qs from 'qs'
import store from '@/store'

/**
 * 读取文章列表
 * @param {Object} options 读取文章列表接口参数
 */
const getPostList = options => {
  return axios.get('/public/getPostList?' + qs.stringify(options))
}

// 温馨提醒
const getTips = () => {
  return axios.get('/public/getTips')
}

// 本周热议
const getTop = () => {
  return axios.get('/public/getTopWeek')
}

// 友情链接
const getLinks = () => {
  return axios.get('/public/getLinks')
}

// 发贴接口
const addPost = data => axios.post('/content/add', { ...data })

// 获取文章详情
const getDetail = tid => {
  const token = store.state.token
  let headers = {}
  if (token !== '') {
    headers = {
      headers: {
        Authorization: 'Bearer ' + store.state.token,
      },
    }
  }
  return axios.get('/public/content/detail?tid=' + tid, headers)
}

// 更新文章，编辑帖子
const updatePost = data => axios.post('/content/update', { ...data })

export {
  getPostList,
  getTips,
  getTop,
  getLinks,
  addPost,
  getDetail,
  updatePost,
}
