<template>
  <div class="ant-panel" style="margin-bottom: 0;">
    <list-item :lists="lists" :isEnd="isEnd" @nextpage="nextPage()"></list-item>
    <Pagination
      v-show="total > 1"
      :total="total"
      :current="current"
      :align="'center'"
      :hasTotal="true"
      :hasSelect="true"
      @changeCurrent="handleChange"
    ></Pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getPostList } from '@/api/content'
import ListItem from './ListItem'
import Pagination from '@/components/pagination'

export default {
  name: 'list',
  data() {
    return {
      sort: 'created',
      catalog: '',
      isEnd: false,
      isRepeat: false,
      lists: [],
      total: 0,
      current: 0,
      page: 0,
      limit: 10,
    }
  },
  computed: {
    ...mapState({
      searchInfo: state => state.searchInfo,
    }),
  },
  components: {
    ListItem,
    Pagination,
  },
  watch: {
    current(newval, oldval) {
      // 去兼听current标签是否有变化，如果有变化，则需要重新进行查询
      this.init()
    },
    $route(newval, oldval) {
      // let catalog = this.$route.params['catalog']
      // if (typeof catalog !== 'undefined' && catalog !== '') {
      //   this.catalog = catalog
      // }
      this.init()
    },
  },
  mounted() {
    this._getPostList()
  },
  methods: {
    search(val) {
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
      switch (val) {
        // 未结贴
        case 0:
          this.status = '0'
          this.tag = ''
          break
        // 已结贴
        case 1:
          this.status = '1'
          this.tag = ''
          break
        // 查询"精华"标签
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        // 按照时间去查询
        case 3:
          this.sort = 'created'
          break
        // 按照评论数去查询
        case 4:
          this.sort = 'answer'
          break
        // 综合查询
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
      }
    },
    handleChange(val) {
      this.current = val
      this._getPostList()
    },
    _getPostList() {
      getPostList({
        ...this.searchInfo,
        page: this.current,
        limit: this.limit,
      }).then(res => {
        if (res.code === 200) {
          const { list, total } = res.data
          this.lists = list
          this.total = total
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
