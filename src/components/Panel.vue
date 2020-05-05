<template>
  <div class="search-warp">
    <div class="search">
      <div class="logo">
        <img src="https://www.douyiyun.com/static/images/logo.png" alt="蚂蚁网" />
      </div>
      <div class="search-kind">
        <span :class="{'active': active === 0}" @click="choose(0)">查公司</span>
        <span :class="{'active': active === 1}" @click="choose(1)">查个人</span>
        <!-- <span :class="{'active': active === 2}" @click="choose(2)">查到期</span> -->
      </div>
      <div class="search-input">
        <form action method="get" id="indexsearchform">
          <input type="text" name="name" placeholder="请输入搜索内容" />
          <div class="search-btn">
            <i class="layui-icon layui-icon-search"></i>搜索
          </div>
        </form>
      </div>
    </div>
    <div class="wave1">
      <div></div>
      <div></div>
    </div>
    <div class="wave2">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    choose(val) {
      this.active = val
    },
  },
}
</script>

<style lang="scss" scoped>
.search-warp {
  width: 100%;
  height: 430px;
  background: url(https://www.douyiyun.com/static/images/indexmainbg.png)
    no-repeat center center;
  padding-top: 60px;
  position: relative;

  .search {
    width: 750px;
    padding-top: 40px;
    margin: auto;

    .logo {
      width: 140px;
      height: 140px;
      margin: 0 auto 40px;
      border-radius: 8px;
    }

    &-kind {
      width: 100%;
      box-sizing: border-box;
      padding-left: 20px;
      color: #fff;
      font-size: 16px;
      padding-bottom: 20px;

      span {
        margin-right: 30px;
        position: relative;
        cursor: pointer;

        &.active:after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border: 8px solid;
          border-color: transparent transparent #fff;
          position: absolute;
          bottom: -22px;
          left: 50%;
          margin-left: -8px;
        }
      }
    }

    &-input {
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 108px 0 25px;
      position: relative;
      input {
        width: 100%;
        height: 100%;
        border: none;
      }

      .search-btn {
        width: 108px;
        height: 42px;
        line-height: 42px;
        text-align: center;
        color: #fff;
        background-color: #2cdaaf;
        border-radius: 21px;
        position: absolute;
        top: 4px;
        right: 5px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  .wave1,
  .wave2 {
    width: 100%;
    height: 90px;
    padding-top: 0;
    text-align: center;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }

  .wave1 {
    > div {
      display: inline-block;
      width: 100%;
      height: 100px;
      padding: 20px 0;
      position: absolute;
      top: 0;
      left: 0;
      background: url(https://www.douyiyun.com/static/images/wave1.png)
        no-repeat center;
      background-size: 100%;
      animation: mymove 10s linear infinite;

      &:first-child {
        left: -100%;
        animation: mymove 10s linear infinite;
      }
    }
  }

  .wave2 {
    > div {
      display: inline-block;
      width: 100%;
      height: 100px;
      padding: 20px 0;
      position: absolute;
      top: 0;
      left: 0;
      background: url(https://www.douyiyun.com/static/images/wave2.png)
        no-repeat center;
      background-size: 100%;
      animation: mymove 6s linear infinite reverse;

      &:first-child {
        left: -100%;
        animation: mymove 6s linear infinite reverse;
      }
    }
  }
}

@keyframes mymove {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    opacity: 1;
  }
}
</style>
