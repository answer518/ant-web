const Center = () =>
  import(/* webpackChunkName: 'center' */ '@/views/center/index.vue')
// const UserCenter = () =>
//   import(
//     /* webpackChunkName: 'user-center' */ '@/views/center/user/Welcome.vue'
//   )
const UserBaseInfo = () =>
  import(
    /* webpackChunkName: 'user-baseinfo' */ '@/views/center/baseinfo/index.vue'
  )
const MyInfo = () =>
  import(/* webpackChunkName: 'info' */ '@/views/center/baseinfo/MyInfo.vue')
const PicUpload = () =>
  import(
    /* webpackChunkName: 'uploadpic' */ '@/views/center/baseinfo/PicUpload.vue'
  )
const Passwd = () =>
  import(
    /* webpackChunkName: 'password' */ '@/views/center/baseinfo/Passwd.vue'
  )
const UserSecurity = () =>
  import(
    /* webpackChunkName: 'user-baseinfo' */ '@/views/center/security/index.vue'
  )
const Accounts = () =>
  import(
    /* webpackChunkName: 'accounts' */ '@/views/center/security/AccountsBind.vue'
  )

const Msg = () =>
  import(/* webpackChunkName: 'user-msg' */ '@/views/center/user/Message.vue')
const Others = () =>
  import(/* webpackChunkName: 'others' */ '@/views/center/Others.vue')

const imchat = () =>
  import(/* webpackChunkName: 'imchat' */ '@/views/center/imchat.vue')

// const Posts = () =>
//   import(/* webpackChunkName: 'user-post' */ '@/views/center/content/Index.vue')
// const MyPost = () =>
//   import(/* webpackChunkName: 'mypost' */ '@/views/center/content/MyPost.vue')
// const MyCollection = () =>
//   import(
//     /* webpackChunkName: 'mycollection' */ '@/views/center/content/MyCollection.vue'
//   )

const User = () =>
  import(/* webpackChunkName: 'home' */ '@/views/channels/User.vue')

export default [
  {
    path: '/center',
    name: 'center',
    component: Center,
    meta: { requiresAuth: true },
    linkActiveClass: 'layui-current',
    children: [
      // {
      //   path: 'posts',
      //   component: Posts,
      //     {
      //       path: 'mycollection',
      //       name: 'mycollection',
      //       component: MyCollection,
      //     },
      //   ],
      // },
      {
        path: 'msg',
        name: 'msg',
        component: Msg,
      },
    ],
  },
  {
    path: '/baseinfo',
    name: 'baseinfo',
    component: UserBaseInfo,
    children: [
      {
        path: '/my',
        name: 'my',
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
    ],
  },
  {
    path: '/security',
    component: UserSecurity,
    children: [
      {
        path: 'changeidentify',
        name: 'changeidentify',
        component: Others,
      },
      {
        path: 'account',
        name: 'account',
        component: Accounts,
      },
      {
        path: 'others',
        name: 'others',
        component: Others,
      },
    ],
  },
  {
    path: '/user/:uid',
    name: 'userHome',
    props: true,
    component: User,
  },
  {
    path: '/imchat',
    name: 'imchat',
    component: imchat,
  },
]
