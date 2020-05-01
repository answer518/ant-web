<template>
  <div class="box">
    <!-- 统一搜索栏 -->
    <common-search></common-search>
    <div class="layui-container">
      <div class="layui-col-md9">
        <content-list></content-list>
      </div>
      <div class="layui-col-md3">
        <div class="imgs">
          <ul>
            <li>
              <img src="https://www.douyiyun.com/zzs/static/images/ad/ad1.png" />
            </li>
            <li>
              <img src="https://www.douyiyun.com/zzs/static/images/ad/ad4.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search'
import List from '@/components/contents/List'
export default {
  name: 'search',
  components: {
    'common-search': Search,
    'content-list': List,
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 1200px;
  margin: 20px auto 0;
}

.imgs {
  float: right;

  ul li {
    list-style: none;
    margin-bottom: 10px;
  }
}
</style>
