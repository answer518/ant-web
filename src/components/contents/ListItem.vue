<template>
  <div class="job-list-box">
    <div class="job-list-content">
      <a target="_blank" href>
        <div class="boss_details">
          <div class="logo">
            <img src="https://www.douyijob.com/upload/img/user/B11173.jpg?1587723313730" alt="个人头像" />
          </div>
          <div class="name_title">
            <h3>孟经理</h3>
          </div>
          <div class="boss_position">
            <p>经理</p>
          </div>
        </div>
      </a>
      <div class="job_details">
        <div class="job_title">
          <a href="/zzs/coinfo/191868.html" target="_blank">
            <div>
              <div>
                <div class="layui-elip">
                  <span>震惊！客户急出房二市二资质，居然给出这种价格。</span>
                </div>
              </div>
              <i>40W-42W</i>
            </div>
          </a>
        </div>
        <div class="newData">2020-04-26</div>
        <div class="job_certificate">
          <span class="certificate">资质·转让</span>

          <span class="level">市政公用工程施工总承包-二级</span>
        </div>
        <div class="job_qualification">
          <p>全国公司业务：资质整合、分立 资质升级、资质代办、中高端**猎聘、北京华建英才人力资源顾问有限公司成立于贰零壹壹年，总部位于首都北京，北京华聚远航企业管理咨询有限公司是旗下子公司、目前在全国范围内有34家分公司，营销网络覆盖华东、华南、华中、华北、西北、西南等，建立了以北京为核心。</p>
        </div>
        <div class="job_address">
          <span>南京市</span>

          <i>|</i>
          <span>无债务</span>

          <i>|</i>
          <span>速度快</span>
        </div>
      </div>
    </div>
    <div class="job-list-connect">
      <div class="connect-btn">立即沟通</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listitem',
  props: {
    lists: {
      default: () => [],
      type: Array,
    },
    isShow: {
      default: true,
      type: Boolean,
    },
    isEnd: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    items() {
      this.lists.map(item => {
        switch (item.catalog) {
          case 'ask':
            item.catalog = '提问'
            break
          case 'share':
            item.catalog = '分享'
            break
          case 'logs':
            item.catalog = '动态'
            break
          case 'notice':
            item.catalog = '公告'
            break
          case 'advise':
            item.catalog = '建议'
            break
          case 'discuss':
            item.catalog = '交流'
            break
        }
      })
      return this.lists
    },
  },
  methods: {
    more() {
      this.$emit('nextpage')
    },
  },
  // filters: {
  //   moment (date) {
  //     // 超过7天，显示日期
  //     if (moment(date).isBefore(moment().subtract(7, 'days'))) {
  //       return moment(date).format('YYYY-MM-DD')
  //     } else {
  //       // 1小前，xx小时前，X天前
  //       return moment(date).locale('zh-cn').from(moment())
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.job-list-box {
  overflow: hidden;
  padding: 0 24px;
  position: relative;

  &:hover {
    background: #f6fdfb;

    .job-list-connect {
      display: block !important;
    }
  }
}

.job-list-content {
  border-bottom: 1px solid #f0f0f0;
  padding: 24px 0;

  .boss_details {
    float: left;
    width: 86px;
    text-align: center;
  }

  .logo {
    height: 60px;
    width: 60px;
    margin-left: 13px;

    img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
    }
  }

  .name_title {
    padding-top: 12px;

    h3 {
      font-size: 14px;
      color: #333333;
      font-weight: normal;
    }
  }

  .boss_position {
    padding-top: 10px;
    p {
      font-size: 14px;
      color: #999999;
    }
  }

  .job_details {
    margin-left: 100px;
    position: relative;

    .newData {
      position: absolute;
      right: 0;
      width: 93px;
      top: 2px;
      font-size: 14px;
      color: #999999;
      font-weight: normal;
    }
  }

  .job_title a > div > div {
    max-width: 430px;
    display: inline-block;
  }

  .job_title i {
    padding: 1px 8px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    margin-left: 10px;
    position: absolute;
    top: 2px;
    color: #ff5000;
    font-style: normal;
  }

  .job_qualification,
  .job_certificate {
    padding: 8px 0;
  }

  .certificate {
    font-size: 14px;
    color: #fff;
    background-color: #2cdaaf;
    border-radius: 2px;
    padding: 2px 8px;
    margin: 0 6px 6px 0;
    float: left;
  }

  .level {
    font-size: 14px;
    color: #999999;
    border-radius: 2px;
    padding: 2px 8px;
    margin: 0 6px 6px 0;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
    float: left;
  }

  .job_qualification p {
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 620px;
  }

  .job_address {
    padding-top: 8px;
    span {
      font-size: 12px;
      color: #999999;
    }
    i {
      padding: 0 10px;
      color: #e6e6e6;
      font-style: normal;
      font-size: 12px;
    }
  }
}

.job-list-connect {
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
  height: 100%;
  background: #f6fdfb;
  z-index: 10;
  text-align: center;
  display: none;

  > div {
    cursor: pointer;
    width: 100px;
    text-align: center;
    margin-top: 63px;
    height: 36px;
    line-height: 36px;
    background: #2cdaaf;
    font-size: 14px;
    color: #fff;
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px solid #2cdaaf;
  }
}
</style>
