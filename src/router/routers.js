import user from './modules/user'
import login from './modules/login'
import content from './modules/content'

const Index = () => import(/* webpackChunkName: 'index' */ '@/views/Index.vue')
const Home = () =>
  import(/* webpackChunkName: 'home' */ '@/views/channels/Home.vue')

const Search = () =>
  import(/* webpackChunkName: 'search' */ '@/views/channels/Search.vue')

const NotFound = () => import(/* webpackChunkName: '404' */ '@/views/404.vue')

export default {
  mode: 'history',
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
      ],
    },
    {
      path: '/search/:catalog',
      name: 'catalog',
      component: Search,
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
