<template>
  <div>
    <ant-panel></ant-panel>
    <router-view></router-view>
  </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  name: 'home',
  components: {
    'ant-panel': Panel,
  },
}
</script>

<style lang="scss" scoped></style>
