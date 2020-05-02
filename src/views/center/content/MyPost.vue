<template>
  <div>
    <div class="overflow">
      <table class="layui-table" border="0">
        <thead>
          <tr class="layui-table-header">
            <th>
              <div class="layui-table-cell pl0">
                <span>标题</span>
              </div>
            </th>
            <th>
              <div class="layui-table-cell">
                <span>帖子内容</span>
              </div>
            </th>

            <th>
              <div class="layui-table-cell">
                <span>发表时间</span>
              </div>
            </th>
            <th class="min-cell">
              <div class="layui-table-cell">
                <span>操作</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center"
            v-for="(item, index) in list"
            :key="'mypost' + index"
          >
            <td class="text-left">
              <a class="link" :href="`/detail/${item._id}`" target="_blank">{{
                item.title
              }}</a>
            </td>
            <td class="text-left">{{ item.content.substr(0, 80) }}</td>
            <td>{{ item.created | moment }}</td>
            <td>
              <div
                class="layui-btn layui-btn-xs"
                :class="{ 'layui-btn-disabled': item.isEnd === '1' }"
                @click="editPost(item)"
              >
                编辑
              </div>
              <div
                class="layui-btn layui-btn-xs layui-btn-danger"
                @click="deletePost(item)"
              >
                删除
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination
      v-show="total > 1"
      :total="total"
      :current="current"
      :align="'left'"
      :hasTotal="true"
      :hasSelect="true"
      @changeCurrent="handleChange"
    ></pagination>
  </div>
</template>

<script>
import { getPostListByUid, deletePostByUid } from '@/api/user'
import Pagination from '@/components/pagination'

export default {
  name: 'my-post',
  components: {
    pagination: Pagination,
  },
  data() {
    return {
      list: [],
      total: 0,
      current: 0,
      page: 0,
      limit: 10,
    }
  },
  mounted() {
    this.getPostList()
  },
  methods: {
    getPostList() {
      getPostListByUid({
        page: this.current,
        limit: this.limit,
      }).then(res => {
        if (res.code === 200) {
          this.list = res.data
          this.total = res.total
        }
      })
    },
    deletePost(item) {
      this.$confirm(
        '确定删除吗?',
        () => {
          if (item.isEnd !== '0') {
            this.$pop('shake', '帖子已结贴，无法删除！')
            return
          }
          deletePostByUid({
            tid: item._id,
          }).then(res => {
            if (res.code === 200) {
              this.$pop('', '删除成功！')
              this.list.splice(this.list.indexOf(item), 1)
            } else {
              this.$pop('shake', res.msg)
            }
          })
        },
        () => {}
      )
    },
    handleChange(val) {
      this.current = val
      this.getPostList()
    },
    editPost(item) {
      if (item.isEnd === '1') {
        this.$pop('shake', '帖子已经结贴，无法编辑')
      } else {
        this.$router.push({
          name: 'edit',
          params: { tid: item._id, page: item },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.overflow {
  overflow-y: auto;
}
.min-cell {
  min-width: 80px;
}
.layui-table-header {
  th {
    text-align: center;
    &:first-child {
      text-align: left;
    }
  }
}
</style>
