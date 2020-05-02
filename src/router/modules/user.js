const Center = () =>
  import(/* webpackChunkName: 'center' */ '@/views/center/index.vue')
const UserCenter = () =>
  import(
    /* webpackChunkName: 'user-center' */ '@/views/center/user/Welcome.vue'
  )
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
const Accounts = () =>
  import(
    /* webpackChunkName: 'accounts' */ '@/views/center/baseinfo/AccountsBind.vue'
  )

const Posts = () =>
  import(/* webpackChunkName: 'user-post' */ '@/views/center/post/Index.vue')
const Msg = () =>
  import(/* webpackChunkName: 'user-msg' */ '@/views/center/user/Message.vue')
const Others = () =>
  import(/* webpackChunkName: 'others' */ '@/views/center/user/Others.vue')

const MyPost = () =>
  import(/* webpackChunkName: 'mypost' */ '@/views/center/post/MyPost.vue')
const MyCollection = () =>
  import(
    /* webpackChunkName: 'mycollection' */ '@/views/center/post/MyCollection.vue'
  )
// const User = () =>
//   import(/* webpackChunkName: 'home' */ '@/views/center/user/Index.vue')

export default [
  {
    path: '/center',
    component: Center,
    meta: { requiresAuth: true },
    linkActiveClass: 'layui-current',
    children: [
      {
        path: '',
        name: 'center',
        component: UserCenter,
      },
      {
        path: 'posts',
        component: Posts,
        children: [
          {
            path: '',
            name: 'mypost',
            component: MyPost,
          },
          {
            path: 'mycollection',
            name: 'mycollection',
            component: MyCollection,
          },
        ],
      },
      {
        path: 'msg',
        name: 'msg',
        component: Msg,
      },
      {
        path: 'others',
        name: 'others',
        component: Others,
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
      {
        path: 'account',
        name: 'account',
        component: Accounts,
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
