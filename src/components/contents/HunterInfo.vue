<template>
  <div class="hunterinfo">
    <div class="headimg">
      <img :src="userInfo.pic" class="layui-nav-img" />
    </div>
    <div class="username">{{userInfo.nickname}}</div>
    <div>{{userInfo.regmark}}</div>

    <div class="vipinfo">
      <div class="vipserver">
        <div>尊享会员特权</div>
        <div>{{userInfo.created.slice(0, 10)}}到期</div>
      </div>
      <div>
        <div class="searchdetails">
          <a href="/user/vip.html">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hunterinfo',
  computed: {
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
.hunterinfo {
  width: 250px;
  height: 220px;
  background-image: url(https://www.douyiyun.com/static/images/selfbg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: absolute;
  top: -10px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  .headimg {
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 40px;
    margin: 16px auto 6px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }

  .username {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .vipinfo {
    width: 100%;
    background-color: #232331;
    color: #f4ca3a;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    height: 56px;
    padding: 10px 18px;
    text-align: left;
    > div {
      float: left;

      &:last-child {
        float: right;
        line-height: 56px;
      }
    }
  }
  .vipserver {
    font-size: 13px;
  }

  .searchdetails {
    height: 26px;
    line-height: 26px;
    background-color: #f4ca3a;
    width: 80px;
    border-radius: 13px;
    color: #000;
    text-align: center;
    margin: 5px 0;
  }
}
</style>
