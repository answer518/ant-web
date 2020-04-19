const Home = () =>
  import(/* webpackChunkName: 'home' */ '@/views/home/index.vue')
const UserWelcome = () =>
  import(/* webpackChunkName: 'user-welcome' */ '@/views/home/user/Welcome.vue')
const UserSettings = () =>
  import(
    /* webpackChunkName: 'user-settings' */ '@/views/home/user/settings/index.vue'
  )
// const Posts = () =>
//   import(/* webpackChunkName: 'user-post' */ '@/components/user/Posts.vue')
const Msg = () =>
  import(/* webpackChunkName: 'user-msg' */ '@/views/home/user/Message.vue')
const Others = () =>
  import(/* webpackChunkName: 'others' */ '@/views/home/user/Others.vue')
const MyInfo = () =>
  import(/* webpackChunkName: 'info' */ '@/views/home/user/settings/MyInfo.vue')
const PicUpload = () =>
  import(
    /* webpackChunkName: 'uploadpic' */ '@/views/home/user/settings/PicUpload.vue'
  )
const Passwd = () =>
  import(
    /* webpackChunkName: 'password' */ '@/views/home/user/settings/Passwd.vue'
  )
const Accounts = () =>
  import(
    /* webpackChunkName: 'accounts' */ '@/views/home/user/settings/AccountsBind.vue'
  )
// const MyPost = () =>
//   import(/* webpackChunkName: 'mypost' */ '@/components/user/common/MyPost.vue')
// const MyCollection = () =>
//   import(
//     /* webpackChunkName: 'mycollection' */ '@/components/user/common/MyCollection.vue'
//   )
// const User = () => import(/* webpackChunkName: 'home' */ '@/views/User.vue')

export default [
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true },
    linkActiveClass: 'layui-this',
    children: [
      {
        path: '',
        name: 'welcome',
        component: UserWelcome,
      },
      {
        path: 'user-settings',
        name: 'user-settings',
        component: UserSettings,
        children: [
          {
            path: '',
            name: 'info',
            component: MyInfo,
          },
          {
            path: 'pic',
            name: 'pic',
            component: PicUpload,
          },
          {
            path: 'passwd',
            name: 'passwd',
            component: Passwd,
          },
          {
            path: 'account',
            name: 'account',
            component: Accounts,
          },
        ],
      },
      // {
      //   path: 'posts',
      //   component: Posts,
      //   children: [
      //     {
      //       path: '',
      //       name: 'mypost',
      //       component: MyPost,
      //     },
      //     {
      //       path: 'mycollection',
      //       name: 'mycollection',
      //       component: MyCollection,
      //     },
      //   ],
      // },
      {
        path: 'msg',
        name: 'user-message',
        component: Msg,
      },
      {
        path: 'others',
        name: 'user-others',
        component: Others,
      },
    ],
  },
  // {
  //   path: '/user/:uid',
  //   name: 'home',
  //   props: true,
  //   component: User,
  // },
]