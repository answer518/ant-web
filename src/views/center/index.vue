<template>
  <div class="ant-user-main">
    <div class="left-content">
      <div class="content">
        <hunter-info></hunter-info>
        <collect-info></collect-info>
      </div>
      <div class="content needmanage">
        <div class="needhead">
          <div class="needtitle">需求列表</div>
          <router-link :to="{ name: 'add' }">
            <div class="addneed">
              <i class="layui-icon layui-icon-add-1"></i>免费发布需求
            </div>
          </router-link>
        </div>
        <div class="needlist">
          <my-post />
        </div>
      </div>
    </div>
    <div class="right-content">
      <sidebar-sign></sidebar-sign>
      <a href="/user/vip.html">
        <img src="https://www.douyiyun.com/static/images/ad/ad7.jpg" />
      </a>
      <img src="https://www.douyiyun.com/static/images/ad/ad4.png" />
    </div>
  </div>
</template>

<script>
import Sign from '@/components/sidebar/Sign'
import HunterInfo from '@/components/contents/HunterInfo'
import CollectList from '@/components/contents/CollectList'
import MyPost from './content/MyPost'
import { mapGetters } from 'vuex'
export default {
  name: 'center',
  components: {
    'sidebar-sign': Sign,
    'hunter-info': HunterInfo,
    'collect-info': CollectList,
    'my-post': MyPost,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['uid']),
  },
}
</script>

<style lang="scss" scoped>
.left-content .content {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 12px;
  position: relative;
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
