<template>
  <div class="layui-row header">
    <div class="layui-header">
      <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item">
          <router-link :to="{name: 'home'}">首页</router-link>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{name: 'catalog', params: {catalog: 'company'}}">公司</router-link>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{name: 'catalog', params: {catalog: 'personal'}}">个人</router-link>
        </li>
      </ul>

      <ul class="layui-nav layui-layout-right">
        <!-- 未登入的状态 -->
        <template v-if="!isShow">
          <li class="layui-nav-item">
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{name: 'reg'}">注册</router-link>
          </li>
        </template>

        <!-- 登入后的状态 -->
        <template v-else>
          <!-- 调整了Hover的区域 -->
          <li class="layui-nav-item" @mouseenter="show" @mouseleave="hide">
            <router-link class="mayi-nav-avatar" :to="{name: 'home'}">
              <img :src="userInfo.pic" />
              <span class="layui-nav-more"></span>
            </router-link>
            <dl
              class="layui-nav-child layui-anim layui-anim-upbit"
              :class="{'layui-show': isHover}"
            >
              <dd>
                <router-link :to="{name: 'center'}">
                  <div>
                    个人中心
                    <br />
                    <span>职位、需求、简历、VIP</span>
                  </div>
                </router-link>
              </dd>
              <dd>
                <router-link :to="{name: 'info'}">
                  <div>
                    基本信息
                    <br />
                    <span>基本信息、头像</span>
                  </div>
                </router-link>
              </dd>
              <dd>
                <router-link :to="{name: 'others'}">
                  <div>
                    身份安全
                    <br />
                    <span>认证公司、修改密码</span>
                  </div>
                </router-link>
              </dd>
              <dd>
                <a href="javascript:void(0);" @click="logout()">退出登录</a>
              </dd>
            </dl>
          </li>
          <div class="mayi-nav-msg" v-show="num.message && num.message !== 0">{{num.message}}</div>
          <transition name="fade">
            <div class="layui-layer-tips" v-show="hasMsg">
              <div class="layui-layer-content">
                您有{{num.message}}条未读消息
                <i class="layui-layer-TipsG layui-layer-TipsB"></i>
              </div>
            </div>
          </transition>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      isHover: false,
      hoverCtrl: {},
      hasMsg: false,
    }
  },
  methods: {
    show() {
      // 当用户的鼠标移入头像的时候，去显示操作菜单
      clearTimeout(this.hoverCtrl)
      this.hoverCtrl = setTimeout(() => {
        this.isHover = true
      }, 200)
    },
    hide() {
      // 当用户的鼠标移出头像的时候，去隐藏操作菜单
      clearTimeout(this.hoverCtrl)
      this.hoverCtrl = setTimeout(() => {
        this.isHover = false
      }, 500)
    },
    logout() {
      this.$confirm(
        '确定退出吗？',
        () => {
          localStorage.clear()
          this.$store.commit('setToken', '')
          this.$store.commit('setLoginUser', {})
          this.$store.commit('setIsLogin', false)
          this.$router.push({ name: 'home' }, () => {})
        },
        () => {}
      )
    },
  },
  watch: {
    num(newval, oldval) {
      if (newval.event && newval !== oldval) {
        // 判断消息数量
        if (newval.message && newval.message > 0) {
          this.hasMsg = true
          setTimeout(() => {
            this.hasMsg = false
          }, 2000)
        }
      }
    },
  },
  computed: {
    ...mapState({
      num: state => state.num,
    }),
    isShow() {
      return this.$store.state.isLogin
    },
    userInfo() {
      return (
        this.$store.state.loginUser || {
          name: '',
          pic: '',
          isVip: '0',
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #2cdaaf;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  > div {
    width: 1200px;
    min-width: 1200px;
    margin: auto;
  }
}

.layui-nav {
  background-color: #2cdaaf;
  font-weight: bold;

  .layui-nav-item {
    a {
      font-size: 16px;
      color: #fff;
    }
    .layui-nav-child {
      right: 0;
      left: auto;
      border: none;

      a {
        color: #333333 !important;

        > div {
          border-bottom: 1px solid #f0f0f0;
        }
        span {
          color: #999999;
          margin-top: -12px;
          display: inherit;
        }
      }
    }
  }

  .layui-layout-right .layui-nav-item a {
    padding: 0 15px;
  }
}

.layui-layout-left {
  left: 0;
}

.layui-header {
  z-index: 1000;
  height: 60px;
}
</style>
