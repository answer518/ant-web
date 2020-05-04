<template>
  <div class="modal" v-show="isShow">
    <div class="mask" @click="close()"></div>
    <div class="layui-layer" :class="{ active: isShow }">
      <div class="layui-layer-title">
        <h3>
          请选择职类
          <div class="position-search js-position-search s-position-search">
            <div class="position-input">
              <input class="ipt" placeholder="请输入职类关键词" type="text" name />
              <i class="icon-p-search"></i>
            </div>
            <div class="position-lists">
              <div class="normal">
                <ul class="hide"></ul>
              </div>
              <!--<div class="blank hide">暂无匹配分类，请自行在下方选择添加</div>-->
            </div>
          </div>
        </h3>
        <i class="layui-icon layui-icon-close" @click="close()"></i>
      </div>
      <div class="layui-layer-content">
        <div class="layui-left-nav">
          <ul>
            <li
              v-for="(item, index) in list"
              :key="item.value"
              :class="{'active': current === index}"
              @click="choose(index)"
            >{{item.label}}</li>
          </ul>
        </div>
        <div class="layui-right-content">内容时什么</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-dialog',
  props: {
    isShow: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      current: 0,
      list: [
        { label: '工程施工', value: '100000001' },
        { label: '工程勘察', value: '100000002' },
        { label: '工程设计', value: '100000003' },
        { label: '监理', value: '100000004' },
        { label: '设计施工一体化', value: '100000005' },
        { label: '工程造价咨询', value: '100000006' },
        { label: '城乡规划编制单位', value: '100000007' },
        { label: '测绘单位', value: '100000008' },
      ],
    }
  },
  methods: {
    choose(index) {
      this.current = index
    },
    close() {
      this.$emit('closeModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.layui-layer-content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  overflow: hidden;
  zoom: 1;
}
.layui-left-nav {
  width: 170px;
  background: #eee;
  float: left;
  height: 100%;
  overflow-y: auto;

  li {
    width: 100%;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 10px;
    cursor: pointer;
    overflow: hidden;

    &.active {
      background: #fff;
      font-weight: bold;
      position: relative;

      &::before {
        content: ' ';
        width: 2px;
        color: #2cc7b7;
        height: 50px;
        position: absolute;
        left: 0;
        border-left: 4px solid #18c3b1;
      }
    }
  }
}

.layui-right-content {
  width: 680px;
  padding: 18px;
  float: right;
}
</style>
