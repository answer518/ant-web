import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugins from './plugins'
import filter from './filter'

import '@/utils/veevalidate-i18n'

// 加载插件（包含全局组件，API，Vue全局方法等）
Vue.use(plugins)
// 加载全局过滤器
Vue.use(filter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
