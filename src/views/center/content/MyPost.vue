<template>
  <div>
    <div class="needkind">
      <a href="/zzs/hunterinfo/37d87e1e77a7485fc54a083f26fc0767.html">
        <span class="layui-inline active">全部</span>
      </a>
      <a href="/zzs/hunterinfo/37d87e1e77a7485fc54a083f26fc0767.html?type=2">
        <span class="layui-inline">兼职</span>
      </a>
      <a href="/zzs/hunterinfo/37d87e1e77a7485fc54a083f26fc0767.html?type=1">
        <span class="layui-inline">资质</span>
      </a>
      <a href="/zzs/hunterinfo/37d87e1e77a7485fc54a083f26fc0767.html?type=4">
        <span class="layui-inline">全职</span>
      </a>
    </div>
    <div class="need-list">
      <div class="need-item" v-for="(item, index) in list" :key="'mypost' + index">
        <div class="layui-row">
          <div class="layui-col-md9">
            <div class="layui-inline needtitle layui-elip">
              <a :href="`/detail/${item._id}`" target="_blank">
                {{
                item.title
                }}
              </a>
            </div>
            <div class="layui-inline pricearea">{{item.price}}</div>
          </div>
          <div class="layui-col-md3 certkind">
            资质
            <span class="layui-badge-dot"></span>
            转让
          </div>
        </div>
        <div class="layui-row needdesc">
          <div class="layui-col-md12 layui-elip">{{item.content}}</div>
        </div>
        <div class="layui-row">
          <div class="layui-col-md12">
            <span class="layui-btn layui-btn-xs" @click="editPost(item)">编辑</span>
            <span class="layui-btn layui-btn-xs layui-btn-danger" @click="deletePost(item)">删除</span>
          </div>
        </div>
      </div>
    </div>
    <pagination
      v-show="total > 1"
      :total="total"
      :current="current"
      :align="'center'"
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
      // if (item.isEnd === '1') {
      //   this.$pop('shake', '帖子已经结贴，无法编辑')
      // } else {
      this.$router.push({
        name: 'edit',
        params: { tid: item._id, page: item },
      })
      // }
    },
  },
}
</script>

<style lang="scss" scoped>
.needkind {
  padding-bottom: 20px;

  span {
    padding: 0 20px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #333333;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 2px 8px 0px rgba(200, 200, 200, 0.4);

    &.active {
      background-color: #2cdaaf;
      color: #fff;
      box-shadow: 0px 2px 8px 0px rgba(44, 218, 175, 0.4);
    }
  }
}
.need-item {
  width: 100%;
  box-sizing: border-box;
  padding: 24px 30px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  margin-bottom: 8px;
}

.needtitle {
  font-size: 20px;
  color: #333;
  max-width: 500px;
  padding-right: 10px;
  font-weight: bold;
}

.pricearea {
  font-size: 20px;
  color: #ff5000;
  font-weight: bold;
}

.certkind {
  text-align: right;
  color: #2cdaaf;
  padding-top: 3px;

  .layui-badge-dot {
    background-color: #2cdaaf;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    margin: 2px 4px;
  }
}

.needdesc {
  padding: 16px 0;
  font-size: 14px;
  color: #666666;
}
</style>
