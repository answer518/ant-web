// import plugins from './plugins'
import globalComponents from './globalComponents'
import globalMethods from './globalMethods'

export default function(Vue) {
  Vue.use(globalMethods)
  // Vue.use(plugins)
  Vue.use(globalComponents)
}
