<template>
  <div v-show="isShow" class="alert-warp">
    <div class="alert">
      <div class="inner">{{ content }}</div>
      <div v-if="type === 'alert'" class="button-group">
        <div class="button success" @click="close">确定</div>
      </div>
      <div v-else class="button-group">
        <div class="button cancel" @click="cancelClick">取消</div>
        <div class="button success" @click="okClick">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask"></div>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: {
    type: {
      type: String,
      default: 'alert',
    },
    content: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    onOk: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    close() {
      this.isShow = false
    },
    closeMask() {
      if (this.type === 'alert') {
        this.close()
      }
    },
    cancelClick() {
      this.onCancel()
      this.close()
    },
    okClick() {
      this.onOk()
      this.close()
    },
  },
}
</script>
<style lang="scss" scoped>
$btn-normal: #009688;
$btn-hover: darken($btn-normal, 6%);
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background-color: #fff;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  z-index: 99;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.inner {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.button-group {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}

.button {
  width: 106px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;

  &.success {
    background-color: $btn-normal;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: $btn-hover;
    }
  }

  &.cancel {
    background-color: #ededed;
    color: #333;
  }
}

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 98;
  background: rgba(0, 0, 0, 0.4);
}
</style>
