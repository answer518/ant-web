import Alert from '@/components/common/alert'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default function plugin(Vue) {
  if (plugin.installed) {
    return
  }

  let Component = Vue.extend(Alert)
  let vm = new Component({ el: document.createElement('div') })
  document.body.appendChild(vm.$el)

  function alert(content = '') {
    vm.content = content
    vm.isShow = true
  }

  function confirm(content = '', onOk, onCancel) {
    vm.content = content
    vm.type = 'confirm'
    vm.onOk = onOk && onOk
    vm.onCancel = onCancel && onCancel
    vm.isShow = true
  }

  window.addEventListener(
    'hashchange',
    () => {
      if (vm.isShow) {
        vm.isShow = false
      }
    },
    false
  )

  window.addEventListener(
    'popstate',
    () => {
      if (vm.isShow) {
        vm.isShow = false
      }
    },
    false
  )

  // Vue.alert = alert
  Vue.prototype.$alert = alert
  Vue.prototype.$confirm = confirm
}
