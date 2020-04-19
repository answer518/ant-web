const Login = () => import(/* webpackChunkName: 'login' */ '@/views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ '@/views/Reg.vue')
const Forget = () =>
  import(/* webpackChunkName: 'forget' */ '@/views/Forget.vue')

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/reg',
    name: 'reg',
    component: Reg,
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget,
  },
]
