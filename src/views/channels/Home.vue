<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <content-top></content-top>
        <content-list></content-list>
      </div>
      <div class="layui-col-md4">
        <sidebar-tips></sidebar-tips>
        <sidebar-sign></sidebar-sign>
        <sidebar-hotlist></sidebar-hotlist>
        <sidebar-ads></sidebar-ads>
        <sidebar-links></sidebar-links>
      </div>
    </div>
  </div>
</template>

<script>
import Tips from '@/components/sidebar/Tips'
import Sign from '@/components/sidebar/Sign'
import HotList from '@/components/sidebar/HotList'
import Ads from '@/components/sidebar/Ads'
import Links from '@/components/sidebar/Links'
import List from '@/components/contents/List'
import Top from '@/components/contents/Top'
export default {
  name: 'index',
  components: {
    'sidebar-tips': Tips,
    'sidebar-sign': Sign,
    'sidebar-hotlist': HotList,
    'sidebar-ads': Ads,
    'sidebar-links': Links,
    'content-list': List,
    'content-top': Top,
  },
  mounted() {
    window.Vue = this
  },
}
</script>

<style lang="scss" scoped></style>
