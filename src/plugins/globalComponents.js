import Alert from '@/components/common/alert'

export default function(Vue) {
  ;[Alert].forEach(_ => {
    Vue.component(_.name, _)
  })
}
