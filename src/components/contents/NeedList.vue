<template>
  <div class="need-list-warp">
    <div class="need-kind">
      <a href="javascript:;">
        <span class="layui-inline active">全部</span>
      </a>
      <a href="javascript:;">
        <span class="layui-inline">转让</span>
      </a>
      <a href="javascript:;">
        <span class="layui-inline">求购</span>
      </a>
      <a href="javascript:;">
        <span class="layui-inline">代办</span>
      </a>
    </div>
    <div class="need-list">
      <div class="need-item" v-for="(item, index) in list" :key="'mypost' + index">
        <div class="layui-row">
          <div class="layui-col-md9">
            <div class="layui-inline needtitle layui-elip">
              <a :href="`/detail/${item._id}`" target="_blank">
                {{
                item.title
                }}
              </a>
            </div>
            <div class="layui-inline pricearea">{{item.price}}</div>
          </div>
          <div class="layui-col-md3 certkind">
            资质
            <span class="layui-badge-dot"></span>
            转让
          </div>
        </div>
        <div class="layui-row needdesc">
          <div class="layui-col-md12 layui-elip">{{item.content}}</div>
        </div>
        <div class="layui-row usekind">
          <div class="layui-col-md12">
            <span>北京市</span>
            <span>速度快</span>
          </div>
        </div>
      </div>
    </div>
    <pagination
      v-show="total > 1"
      :total="total"
      :current="current"
      :align="'center'"
      :hasTotal="true"
      :hasSelect="true"
      @changeCurrent="handleChange"
    ></pagination>
  </div>
</template>

<script>
import Pagination from '@/components/pagination'
export default {
  name: 'needlist',
  components: {
    pagination: Pagination,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleChange(val) {
      // this.current = val
      // this.getPostList()
      this.$emit('handleChange', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.need-kind {
  padding-bottom: 20px;

  span {
    padding: 0 20px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #333333;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 2px 8px 0px rgba(200, 200, 200, 0.4);

    &.active {
      background-color: #2cdaaf;
      color: #fff;
      box-shadow: 0px 2px 8px 0px rgba(44, 218, 175, 0.4);
    }
  }
}
.need-item {
  width: 100%;
  box-sizing: border-box;
  padding: 24px 30px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  margin-bottom: 8px;
}

.needtitle {
  font-size: 20px;
  color: #333;
  max-width: 500px;
  padding-right: 10px;
  font-weight: bold;
}

.pricearea {
  font-size: 20px;
  color: #ff5000;
  font-weight: bold;
}

.certkind {
  text-align: right;
  color: #2cdaaf;
  padding-top: 3px;

  .layui-badge-dot {
    background-color: #2cdaaf;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    margin: 2px 4px;
  }
}

.needdesc {
  padding: 16px 0;
  font-size: 14px;
  color: #666666;
}

.usekind span {
  padding: 0 10px;
  font-size: 12px;
  color: #999999;
  border-right: 1px solid #e6e6e6;

  &:first-child {
    padding-left: 0;
  }
}
</style>
