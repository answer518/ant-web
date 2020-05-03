<template>
  <div class="layui-container">
    <div class="layui-col-md8">
      <div class="ant-panel detail-box">
        <div class="detail-title">
          <h1>
            {{page.title}}
            <i>{{page.price}}</i>
          </h1>
        </div>

        <div class="detail-info">
          <!-- <span class="layui-badge" style="background-color: #999;" v-if="page.isEnd === '0'">未结</span>
          <span class="layui-badge" style="background-color: #5FB878;" v-else>已结</span>-->
          <h3 class="catalog">资质·代办</h3>
          <div class="time">{{page.created | moment}}</div>
          <div class="tag">
            <div class="tag-item">速度快</div>
            <div class="tag-item">无风险</div>
          </div>
        </div>
        <div class="detail-body">
          <div class="main">
            <div class="title">
              <h3>资质类型</h3>
            </div>
            <div class="content">
              <p>建筑工程施工总承包-三级</p>
            </div>
            <div class="content">
              <p>建筑工程施工总承包-二级</p>
            </div>
            <div class="content">
              <p>市政公用工程施工总承包-二级</p>
            </div>
          </div>
          <div class="main">
            <div class="title">
              <h3>所在城市</h3>
            </div>
            <div class="content">
              <p>{{page.uid ? page.uid.location : ''}}</p>
            </div>
          </div>
          <div class="main">
            <div class="title">
              <h3>资质描述</h3>
            </div>
            <div class="content" v-html="content"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-col-md4">
      <div class="ant-panel boss-box">
        <div class="logo">
          <a href="/zzs/hunterinfo/8a3ce029fad73b901ab8efa7c3118c3a.html">
            <img :src="page.uid ? page.uid.pic : null" :alt="page.uid ? page.uid.name : ''" />
          </a>
        </div>
        <div class="boss_name">
          <h1>
            <a
              href="/zzs/hunterinfo/8a3ce029fad73b901ab8efa7c3118c3a.html"
            >{{page.uid ? page.uid.name : null}}</a>
            <i
              class="layui-icon layui-icon-ok"
              style="width: 14px;height: 14px;background-color: #FF5000; font-size: 14px; color: #fff;"
            ></i>
          </h1>
          <p>{{page.uid ? page.uid.position : ''}}·刚刚在线</p>
        </div>
        <div class="communication_button">
          <button class="connectionInfo" data-job="190137">在线沟通</button>
          <button class="phoneinfo">查看联系方式</button>
          <div class="link_a">
            <i
              class="layui-icon layui-icon-link"
              style="font-size: 14px; color: #999999;font-weight: normal;"
            ></i>
            <a href="javascript:;" class="showqr">微信扫码分享</a>
            <!--  <i class="fa fa-exclamation fa-border fa-inverse"></i>
            <a href="#">举报</a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from '@/api/content'
import { addComment, updateComment, setHands } from '@/api/comments'
import { escapeHtml } from '@/utils/escapeHtml'
import { scrollToElem } from '@/utils/common'

export default {
  name: 'Detail',
  props: ['tid'],
  data() {
    return {
      total: 0,
      size: 10,
      current: 0,
      page: {},
      comments: [],
      editInfo: {
        content: '',
        code: '',
        sid: '',
      },
    }
  },
  mounted() {
    // window.vue = scrollToElem
    this.getPostDetail()
  },
  watch: {
    tid(newval, oldval) {
      this.getPostDetail()
    },
  },
  methods: {
    handleChange(val) {
      this.current = val
    },
    handleLimit(val) {
      this.size = val
    },
    getPostDetail() {
      getDetail(this.tid).then(res => {
        if (res.code === 200) {
          this.page = res.data
        }
      })
    },
    addContent(val) {
      this.editInfo.content = val
    },
    async submit() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        // ABORT!!
        return
      }
      // 用户未登录
      const isLogin = this.$store.state.isLogin
      if (!isLogin) {
        this.$pop('shake', '请先登录')
        return
      }
      // 用户禁言状态判断
      const user = this.$store.state.loginUser
      if (user.status !== '0') {
        this.$pop('shake', '用户已经禁言，请联系管理员')
        return
      }
      this.editInfo.code = this.code
      this.editInfo.sid = this.$store.state.sid
      this.editInfo.tid = this.tid

      // 获取评论用户的信息：图片、昵称、vip
      const cuid = {
        _id: user._id,
        pic: user.pic,
        name: user.name,
        isVip: user.isVip,
      }

      if (
        typeof this.editInfo.cid !== 'undefined' &&
        this.editInfo.cid !== ''
      ) {
        const obj = { ...this.editInfo }
        delete obj['item']
        // 判断用户是否修改了内容
        if (this.editInfo.content === this.editInfo.item.content) {
          this.$pop('shake', '确定编辑了内容~~~')
          return
        }
        // 更新评论
        updateComment(obj).then(res => {
          if (res.code === 200) {
            const temp = this.editInfo.item
            temp.content = this.editInfo.content
            this.$pop('', '更新评论成功')
            this.code = ''
            this.editInfo.content = ''
            // 方法一，只用更新特定的一条的content created， $set
            // 方法二，更新整个数组中的这一条
            this.comments.splice(
              this.comments.indexOf(this.editInfo.item),
              1,
              temp
            )
          }
        })
        return
      }
      // 添加评论
      addComment(this.editInfo).then(res => {
        if (res.code === 200) {
          this.$pop('', '发表评论成功')
          // 发表评论成功后，清空回复内容
          this.code = ''
          this.editInfo.content = ''
          // 添加新的评论到评论列表
          res.data.cuid = cuid
          this.comments.push(res.data)
          requestAnimationFrame(() => {
            this.$refs.observer && this.$refs.observer.reset()
          })
          // 刷新图形验证码
          this._getCode()
        } else {
          this.$alert(res.msg)
        }
      })
    },
    hands(item) {
      setHands({ cid: item._id }).then(res => {
        if (res.code === 200) {
          this.$pop('', '点赞成功')
          item.handed = '1'
          item.hands += 1
        } else {
          this.$pop('shake', res.msg)
        }
      })
    },
    reply(item) {
      // 插入@ + name 到 content
      // 滚动页面到输入框
      // focus 输入框
      const reg = /^@[\S]+/g
      if (this.editInfo.content) {
        if (reg.test(this.editInfo.content)) {
          this.editInfo.content = this.editInfo.content.replace(
            reg,
            '@' + item.cuid.name + ' '
          )
        } else {
          if (this.editInfo.content !== '') {
            // 非空的情况
            this.editInfo.content = `@${item.cuid.name} ${this.editInfo.content}`
          }
        }
      } else {
        // 评论框为空
        this.editInfo.content = '@' + item.cuid.name + ' '
      }
      // 动态滚动到输入框的位置，并且进行focus
      scrollToElem('.layui-input-block', 500, -65)
      document.getElementById('edit').focus()
    },
  },
  computed: {
    content() {
      if (typeof this.page.content === 'undefined') {
        return ''
      }
      if (this.page.content.trim() === '') {
        return ''
      }
      return escapeHtml(this.page.content)
    },
    user() {
      return this.$store.state.loginUser
    },
  },
}
</script>

<style lang="scss" scoped>
.detail-title {
  padding: 10px 0 10px 0px;
  color: #333333;
  font-family: 'Microsoft YaHei';

  i {
    font-style: normal;
    font-weight: bold;
    color: #fe7b40;
    font-size: 26px;
  }
}

.catalog {
  color: #58dfbb;
  font-weight: normal;
  padding-bottom: 14px;
}

.time {
  font-size: 14px;
  color: #999999;
  font-weight: normal;
  padding-bottom: 20px;
}

.tag {
  &-item {
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
    margin-right: 5px;
    padding: 0 12px;
    background-color: #ffffff;
    border: 1px solid #c8c8c8;
    font-size: 14px;
    color: #c8c8c8;
    display: inline-block;
  }
}

.title {
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    height: 2px;
    top: auto;
    bottom: 0;
    width: 24px;
    background-color: #2cdaaf;
  }
}

.content {
  color: #666666;
  padding: 15px 0;
  font-size: 14px;
}

.boss-box {
  width: 90%;
  margin-left: 5%;

  .logo {
    padding: 60px 130px 20px 130px;
    text-align: center;
    width: 100px;
    height: 100px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }

  .boss_name {
    text-align: center;

    h1 {
      font-size: 20px;
      color: #333333;
      font-weight: normal;
    }

    i {
      font-style: normal;
      font-weight: bold;
    }

    p {
      padding: 10px 0;
      color: #666666;
      font-size: 14px;
    }
  }

  .communication_button {
    text-align: center;
    padding: 5px 0 15px 0;

    button {
      width: 300px;
      height: 45px;
      margin: 10px 30px;
      font-size: 16px;
      color: #ffffff;
      background-color: #58dfbb;
      border: none;
      outline: none;

      &.phoneinfo {
        background-color: #fff;
        color: #2cdaaf;
        border: 1px solid #2cdaaf;
      }
    }

    .link_a {
      width: 300px;
      margin: 0 30px;
      text-align: left;

      a {
        color: #999999;
        padding: 0 4px;
        font-size: 14px;
      }
    }
  }
}
</style>
