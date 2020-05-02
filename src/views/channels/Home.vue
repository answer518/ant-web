<template>
  <div class="layui-container">
    <!--
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8"></div>
      <div class="layui-col-md4">
        <sidebar-tips></sidebar-tips>
        <sidebar-sign></sidebar-sign>
      </div>
    </div>
    -->
    <new-list></new-list>
  </div>
</template>

<script>
// import Tips from '@/components/sidebar/Tips'
// import Sign from '@/components/sidebar/Sign'
import NewList from '@/components/contents/NewList'

export default {
  name: 'index',
  components: {
    // 'sidebar-tips': Tips,
    // 'sidebar-sign': Sign,
    'new-list': NewList,
  },
  mounted() {
    window.Vue = this
  },
}
</script>

<style lang="scss" scoped></style>
