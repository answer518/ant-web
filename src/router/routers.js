import user from './modules/user'
import login from './modules/login'
import content from './modules/content'

const Index = () => import(/* webpackChunkName: 'login' */ '@/views/Index.vue')
const Home = () =>
  import(/* webpackChunkName: 'home' */ '@/views/channels/Home.vue')

const NotFound = () =>
  import(/* webpackChunkName: 'not-found' */ '@/views/404.vue')

export default {
  linkExactActiveClass: 'layui-this',
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
    ...login,
    ...user,
    ...content,
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
}
