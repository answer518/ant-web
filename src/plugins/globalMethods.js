function autoInjectMethod(r, Vue) {
  r.keys().forEach(key => {
    Vue.use(r(key).default)
  })
}
export default function(Vue) {
  // 引入全局方法
  autoInjectMethod(require.context('./methods/', false, /\.js$/), Vue)
}
