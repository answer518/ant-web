<template>
  <div class="job-list-warpper">
    <div v-for="(item, index) in lists" :key="index" class="job-list-box">
      <div class="job-list-content">
        <a target="_blank" href="#">
          <div class="boss_details">
            <div class="logo">
              <img :src="item.uid.pic" alt="个人头像" />
            </div>
            <div class="name_title">
              <h3>{{ item.uid.name }}</h3>
            </div>
            <div class="boss_position">
              <p>{{ item.uid.position }}</p>
            </div>
          </div>
        </a>
        <div class="job_details">
          <div class="job_title">
            <router-link :to="{ name: 'detail', param: { tid: item._id } }">
              <div>
                <div>
                  <div class="layui-elip">
                    <span>{{ item.title }}</span>
                  </div>
                </div>
                <i>{{ item.price }}</i>
              </div>
            </router-link>
          </div>
          <div class="newData">{{ item.created | moment }}</div>
          <div class="job_certificate">
            <span class="certificate"
              >资质{{ item.catalog === '1' ? '转让' : '' }}</span
            >
            <span class="level">{{ item.qualification }}</span>
          </div>
          <div class="job_qualification">
            <p>{{ item.content }}</p>
          </div>
          <div class="job_address">
            <span>{{ item.uid.location }}</span>
            <i>|</i>
            <span>速度快</span>
          </div>
        </div>
      </div>
      <div class="job-list-connect">
        <div class="connect-btn">立即沟通</div>
      </div>
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
