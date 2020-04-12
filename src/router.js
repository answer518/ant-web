import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import(/* webpackChunkName: 'login' */ './views/Index.vue')
const Home = () =>
  import(/* webpackChunkName: 'home' */ './views/channels/Home.vue')
const Login = () => import(/* webpackChunkName: 'login' */ './views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ './views/Reg.vue')
const Forget = () =>
  import(/* webpackChunkName: 'forget' */ './views/Forget.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        // {
        //   path: '/index/:catalog',
        //   name: 'catalog',
        //   component: Template1
        // }
      ],
    },
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
  ],
})
