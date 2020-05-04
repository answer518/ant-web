<template>
  <div class="ant-user-main">
    <div class="left-content">
      <div class="left-nav-menu">
        <div class="left-nav-item">
          <router-link :to="{name: 'changeidentify'}">变更身份</router-link>
        </div>
        <div class="left-nav-item">
          <router-link :to="{name: 'account'}">帐号绑定</router-link>
        </div>
        <div class="left-nav-item">
          <router-link :to="{name: 'others'}">其他</router-link>
        </div>
      </div>
      <div class="nav-menu-content">
        <div class="layui-form-content">
          <div class="layui-form-info">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <img src="https://www.douyiyun.com/static/images/ad/ad2.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'security',
}
</script>

<style lang="scss">
.left-nav-menu {
  width: 190px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: #f2f5fa;

  .left-nav-item {
    font-size: 16px;
    color: #333333;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    box-sizing: border-box;
    border-right: 4px solid transparent;
    cursor: pointer;

    > a {
      display: block;

      &.router-link-active {
        background-color: #fff;
        border-right: 4px solid #2cdaaf;
      }
    }
  }
}

.nav-menu-content {
  width: 100%;
  box-sizing: border-box;
  padding: 0 36px 0 190px;
  position: relative;
  margin-top: 40px;
}

.layui-form-content {
  width: 100%;
  box-sizing: border-box;
  // padding: 0 36px 0 190px;
  position: relative;
  margin-top: 40px;
}

.layui-form-info {
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 50px;
  min-height: 600px;
}
</style>
