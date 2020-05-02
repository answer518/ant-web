<template>
  <div class="main">
    <ant-search></ant-search>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from '@/components/Panel.vue'

export default {
  name: 'home',
  components: {
    'ant-search': Search,
  },
}
</script>

<style lang="scss" scoped></style>
