import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const Index = () => import(/* webpackChunkName: 'login' */ './views/Index.vue')
const Home = () =>
  import(/* webpackChunkName: 'home' */ './views/channels/Home.vue')
const Login = () => import(/* webpackChunkName: 'login' */ './views/Login.vue')
const Reg = () => import(/* webpackChunkName: 'reg' */ './views/Reg.vue')
const Forget = () =>
  import(/* webpackChunkName: 'forget' */ './views/Forget.vue')
const Profile = () =>
  import(/* webpackChunkName: 'profile' */ './views/Profile.vue')

const UserProfile = () =>
  import(/* webpackChunkName: 'user-profile' */ '@/components/user/Profile.vue')
const UserSettings = () =>
  import(
    /* webpackChunkName: 'user-settings' */ '@/components/user/Settings.vue'
  )
const UserPosts = () =>
  import(/* webpackChunkName: 'user-post' */ '@/components/user/Posts.vue')
const UserMsg = () =>
  import(/* webpackChunkName: 'user-msg' */ '@/components/user/Message.vue')
const UserOthers = () =>
  import(/* webpackChunkName: 'othres' */ '@/components/user/Others.vue')

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
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      children: [
        {
          path: '',
          name: 'user-profile',
          component: UserProfile,
        },
        {
          path: '/settings',
          name: 'user-settings',
          component: UserSettings,
        },
        {
          path: '/posts',
          name: 'user-posts',
          component: UserPosts,
        },
        {
          path: '/message',
          name: 'user-message',
          component: UserMsg,
        },
        {
          path: '/others',
          name: 'user-others',
          component: UserOthers,
        },
      ],
      beforeEnter: (to, from, next) => {
        const isLogin = store.state.isLogin
        if (isLogin) {
          next()
        } else {
          const token = localStorage.getItem('token')
          if (token !== null && token !== '') {
            const loginUser = JSON.parse(localStorage.getItem('loginUser'))
            store.commit('setToken', token)
            store.commit('setLoginUser', loginUser)
            next()
          } else {
            next('/login')
          }
        }
      },
    },
  ],
})
