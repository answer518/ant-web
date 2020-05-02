<template>
  <div class="new-item">
    <div class="commontitle layui-row">
      <div class="layui-col-md9">{{data.title}}</div>
      <div class="layui-col-md3 moreinfo">
        <a href="/article.html?type=1">更多&gt;&gt;</a>
      </div>
    </div>
    <div v-if="data.list && data.list.length > 0" class="newdetails">
      <div>
        <div class="newslogo" :style="`background-image:url(${data.topNews.logo});`"></div>
        <div class="newscontent">
          <div>
            <a href="/article/158.html" target="_blank">
              <span>{{data.topNews.title}}</span>
            </a>
          </div>
          <div class="newsinfo">{{data.topNews.content}}</div>
          <div class="newstime">{{data.topNews.datetime}}</div>
        </div>
      </div>

      <!-- 循环4条数据 -->

      <div v-for="(item, index) in data.list" :key="`news-list-${index}`" class="newstitle">
        <a href="/article/153.html" target="_blank">
          <div class="layui-elip">{{item.title}}</div>
        </a>
        <div class="newstime">{{item.datetime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newitem',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.commontitle {
  font-size: 18px;
  color: #333333;
  position: relative;
  padding-left: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdcdc;
}
.moreinfo {
  text-align: right;
  color: #2cdaaf;
  > a {
    text-align: right;
    color: #999999;
    font-size: 14px;
  }
}

.newstime {
  font-size: 14px;
  color: #999;
  padding-top: 10px;
}

.newsinfo {
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 20px;
  padding-top: 5px;
  color: #666666;
  height: 38px;
}

.newstitle {
  font-size: 16px;
  color: #333333;
  padding-bottom: 16px;
  position: relative;

  .layui-elip {
    width: 100%;
    box-sizing: border-box;
    padding-right: 140px;
  }

  .newstime {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px;
  }
}
.newdetails {
  box-sizing: border-box;
  padding-top: 18px;
  > div {
    position: relative;
    width: 100%;

    &:first-child {
      padding-bottom: 24px;
    }
  }
  .newslogo {
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 110px;
    background-size: cover;
    background-position: center;
  }

  .newscontent {
    width: 100%;
    box-sizing: border-box;
    padding-left: 180px;
    font-size: 14px;
    > div:first-child {
      font-size: 18px;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
