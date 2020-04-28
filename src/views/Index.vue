<template>
  <div class="main">
    <mayi-search></mayi-search>
    <router-view></router-view>
  </div>
</template>

<script>
import Search from '@/components/Panel.vue'

export default {
  name: 'home',
  components: {
    'mayi-search': Search,
  },
}
</script>

<style lang="scss" scoped></style>
