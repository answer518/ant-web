<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <imooc-list></imooc-list>
      </div>
      <div class="layui-col-md4">
        <imooc-hotlist></imooc-hotlist>
        <imooc-links></imooc-links>
      </div>
    </div>
  </div>
</template>

<script>
import HotList from '@/components/sidebar/HotList'
import Links from '@/components/sidebar/Links'
import List from '@/components/contents/List'
export default {
  name: 'template1',
  components: {
    'imooc-hotlist': HotList,
    'imooc-links': Links,
    'imooc-list': List,
  },
}
</script>

<style lang="scss" scoped>
</style>
