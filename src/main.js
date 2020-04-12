import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/utils/veevalidate-i18n'

// 加载插件（包含全局组件，API，Vue全局方法等）
import plugins from './plugins'
Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
