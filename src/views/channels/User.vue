<template>
  <div class="layui-container">
    <div class="layui-row user-header">
      <div class="layui-row">
        <div class="layui-col-md6">
          <div class="layui-inline headimg">
            <img :src="userInfo.pic" alt />
          </div>
          <div class="layui-inline peopleinfo">
            <div>{{userInfo.name}}</div>
            <div>{{userInfo.position}}</div>
          </div>
        </div>
        <div class="layui-col-md6 companyinfo">
          <a href="/zzs/huntercompinfo/1083.html">贵州景顺建筑工程有限责任公司</a>
        </div>
      </div>
    </div>
    <div class="ant-user-main">
      <div class="left-content">
        <div class="content needmanage">
          <div class="needhead">
            <div class="needtitle">发布的需求</div>
          </div>
          <div class="needlist">
            <need-list :list="list" :total="total" :current="current" @handleChange="handleChange" />
          </div>
        </div>
      </div>
      <div class="right-content">
        <img src="https://www.douyiyun.com/static/images/ad/ad2.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { getInfo, getPostPublic } from '@/api/user'
import NeedList from '@/components/contents/NeedList'
export default {
  name: 'userHome',
  components: {
    'need-list': NeedList,
  },
  data() {
    return {
      userInfo: {},
      list: [],
      total: 0,
      current: 0,
      page: 0,
      limit: 10,
    }
  },
  mounted() {
    this.getUserInfo()
    this.getPostList()
  },
  methods: {
    getUserInfo() {
      getInfo({
        uid: this.$route.params['uid'],
      }).then(res => {
        if (res.code === 200) {
          this.userInfo = res.data
        } else {
          this.$alert(res.message)
        }
      })
    },
    getPostList() {
      getPostPublic({
        uid: this.$route.params['uid'],
        limit: this.limit,
        page: this.page,
      }).then(res => {
        if (res.code === 200) {
          this.list = res.data
          this.total = res.total
        }
      })
    },
    handleChange(page) {
      this.current = page
      this.getPostList()
    },
  },
}
</script>

<style lang="scss" scoped>
.user-header {
  width: 100%;
  min-height: 120px;

  > div {
    width: 1200px;
    min-width: 1200px;
    min-height: 120px;
    margin: auto;
    background: url(https://www.douyiyun.com/zzs/static/images/hunterinfobg.png)
      no-repeat center center;
    border-radius: 8px;
  }

  .headimg {
    width: 76px;
    height: 76px;
    padding: 20px 24px 20px 30px;

    img {
      width: 76px;
      height: 76px;
      border-radius: 38px;
      border: 2px solid #2cdaaf;
    }
  }

  .peopleinfo {
    color: #fff;
    font-size: 14px;

    > div:first-child {
      font-size: 24px;
      padding-bottom: 10px;
    }
  }

  .companyinfo {
    text-align: right;
    box-sizing: border-box;
    padding-right: 50px;

    a {
      font-size: 24px;
      color: #ffffff;
      padding-top: 42px;
      display: block;
    }
  }
}

.needmanage {
  width: 100%;
  margin-top: 28px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 30px;
  min-height: 500px;

  .needhead {
    width: 100%;
    position: relative;

    .needtitle {
      font-size: 18px;
      color: #333333;
      position: relative;
      padding-left: 12px;

      &:before {
        content: '';
        display: block;
        width: 4px;
        height: 16px;
        border-radius: 2px;
        background-color: #2cdaaf;
        position: absolute;
        left: 0;
        top: 5px;
      }
    }

    .addneed {
      padding: 0 12px;
      height: 30px;
      line-height: 30px;
      border-radius: 8px;
      background-color: #2cdaaf;
      color: #fff;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .needlist {
    margin-top: 20px;
    border-top: 1px solid #f0f0f0;
    width: 100%;
    box-sizing: border-box;
    padding: 16px 0;
  }
}
</style>
