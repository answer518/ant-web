<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <content-list></content-list>
      </div>
      <div class="layui-col-md4">
        <sidebar-tips></sidebar-tips>
        <sidebar-sign></sidebar-sign>
      </div>
    </div>
  </div>
</template>

<script>
import Tips from '@/components/sidebar/Tips'
import Sign from '@/components/sidebar/Sign'
import List from '@/components/contents/List'
export default {
  name: 'index',
  components: {
    'sidebar-tips': Tips,
    'sidebar-sign': Sign,
    'content-list': List,
  },
  mounted() {
    window.Vue = this
  },
}
</script>

<style lang="scss" scoped></style>
