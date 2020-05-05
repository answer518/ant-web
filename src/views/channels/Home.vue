<template>
  <div class="layui-container">
    <new-list></new-list>
  </div>
</template>

<script>
import NewList from '@/components/contents/NewList'

export default {
  name: 'index',
  components: {
    'new-list': NewList,
  },
}
</script>

<style lang="scss" scoped></style>
