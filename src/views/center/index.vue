<template>
  <div class="mayi-user-main">
    <div class="left-content">
      <div class="content">
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
        <div class="collectlist">
          <div>
            <div class="cimg">
              <img src="https://www.douyiyun.com/static/images/c_company.png" />
            </div>
            <div class="cnum">0</div>
            <div class="cname">收藏公司</div>
          </div>
          <div>
            <div class="cimg">
              <img src="https://www.douyiyun.com/static/images/c_need.png" />
            </div>
            <div class="cnum">0</div>
            <div class="cname">收藏需求</div>
          </div>
          <div>
            <div class="cimg">
              <img src="https://www.douyiyun.com/static/images/c_people.png" />
            </div>
            <div class="cnum">0</div>
            <div class="cname">收藏人才</div>
          </div>
          <div>
            <div class="cimg">
              <img src="https://www.douyiyun.com/static/images/c_position.png" />
            </div>
            <div class="cnum">0</div>
            <div class="cname">收藏职位</div>
          </div>
        </div>
      </div>
      <div class="content needmanage">
        <div class="needhead">
          <div class="needtitle">职位管理</div>
          <a href="/user/comp/job.html">
            <div class="addneed">
              <i class="layui-icon layui-icon-add-1"></i>免费发布职位
            </div>
          </a>
        </div>
        <div class="needlist">
          <div></div>
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
import { mapGetters } from 'vuex'
export default {
  name: 'center',
  components: {
    'sidebar-sign': Sign,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['uid']),
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
.left-content {
  width: 100%;
  box-sizing: border-box;
  padding-right: 276px;

  .content {
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 12px;
    position: relative;
  }
}

.right-content {
  width: 260px;
  margin-left: 16px;
  position: absolute;
  right: 0;
  top: 0;

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }
}

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

.collectlist {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 14px;
  color: #666666;
  box-sizing: border-box;
  padding: 36px 84px 0 334px;

  > div {
    display: inline-block;
    text-align: center;
    margin-right: 70px;

    .cimg,
    img {
      width: 56px;
      height: 56px;
    }

    .cnum {
      font-size: 36px;
      color: #333333;
      font-weight: bold;
      margin: 8px 0 5px;
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
