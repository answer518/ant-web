<template>
  <div class="modal" v-show="isShow">
    <div class="mask" @click="close()"></div>
    <div class="layui-layer" :class="{ active: isShow }">
      <div class="layui-layer-title">
        <h3>
          请选择职类
          <div class="position-search">
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
              @click="switchNav(index)"
            >{{item.label}}</li>
          </ul>
        </div>
        <div class="layui-right-content">
          <div class="selected" style="display: none;">
            <div class="selectedInfo btnpostion">确定</div>
          </div>
          <div class="type-title">
            <div class="js-oneInfo">
              <span class="js-one">{{list[current].label}}</span>
              <i class="icon-arrow-right"></i>
            </div>
          </div>
          <div class="type-list">
            <div
              v-for="(item, index) in list[current].sublist"
              :key="`sublist-${index}`"
              class="type-list-item"
              @click="chooseThis(item)"
            >
              <i class="icon-reduce"></i>
              <span>{{item}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from './data.json'
export default {
  name: 'common-select',
  props: {
    isShow: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      current: 0,
      list: list,
    }
  },
  methods: {
    switchNav(index) {
      this.current = index
    },
    chooseThis(data) {
      this.$emit('onSelectType', `${this.list[this.current].label} - ${data}`)
      setTimeout(() => {
        this.close()
      })
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

.type-title {
  position: relative;

  > div {
    display: inline-block;
    cursor: pointer;
    font-weight: bold;
  }

  .icon-arrow-right {
    display: inline-block;
    width: 8px;
    height: 10px;
    background: url(https://www.douyiyun.com/zzs/static/images/icon-arrow-right.png)
      no-repeat;
    background-size: contain;
    cursor: pointer;
    margin-left: 4px;
  }
}

.type-list {
  height: 420px;
  overflow-y: auto;

  &-item {
    display: inline-block;
    margin-right: 15px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    color: #9fa3af;
  }

  .icon-reduce::after {
    content: '-';
    display: inline-block;
    width: 11px;
    height: 11px;
    line-height: 11px;
    text-align: center;
    color: #2cc7b7;
    border: 1px #2cc7b7 solid;
    margin-right: 5px;
    margin-top: -2px;
    vertical-align: middle;
  }
}
</style>
