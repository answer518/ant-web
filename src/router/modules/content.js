const Add = () =>
  import(/* webpackChunkName: 'add' */ '@/views/center/content/Add.vue')
const Edit = () =>
  import(/* webpackChunkName: 'edit' */ '@/views/center/content/Edit.vue')

export default [
  {
    path: '/add',
    name: 'add',
    component: Add,
    meta: { requiresAuth: true },
  },
  {
    path: '/edit/:tid',
    props: true,
    name: 'edit',
    component: Edit,
    meta: { requiresAuth: true },
    beforeEnter(to, from, next) {
      // 正常的情况 detail
      if (
        ['detail', 'mypost'].indexOf(from.name) !== -1 &&
        to.params.page &&
        to.params.page.isEnd === '0'
      ) {
        next()
      } else {
        // 用户在edit页面刷新的情况
        const editData = localStorage.getItem('editData')
        if (editData && editData !== '') {
          const editObj = JSON.parse(editData)
          if (editObj.isEnd === '0') {
            next()
          } else {
            next('/')
          }
        } else {
          next('/')
        }
      }
    },
  },
]
