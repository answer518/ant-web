<template>
  <div class="search-container">
    <div class="layui-row select-city">
      <div class="layui-col-md1 leftlabel">城市选择</div>
      <div class="layui-col-md11">
        <div class="layui-col-md12 provice-list">
          <div
            v-for="(item, index) in cityList"
            :key="`city-list-${item.id}`"
            :class="{ active: selectCity === index }"
          >
            <a href="javascript:;" @click="chooseCity(index)">
              <span>{{ item.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-row select-city">
      <div class="layui-col-md1 leftlabel">资质需求</div>
      <div class="layui-col-md11 qualifycontent">
        <div class="layui-col-md6 selproject">
          <div
            v-for="(item, index) in qualifyTypeList"
            :key="`qualify_list_${index}`"
            class="isall"
            :class="{ active: selectQualifyType === index }"
            :data-type="index"
            @click="chooseQualify(index)"
          >{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="layui-row select-city">
      <div class="layui-col-md1 leftlabel">资质类型</div>
      <div class="layui-col-md11 qualifycontent">
        <div class="layui-col-md12 selqualify">
          <div class="addqualify selClassify" @click="show()">添加资质类型</div>
        </div>
        <div class="layui-col-md12 qualify-list">
          <div
            v-for="(item, index) in selectQualifyList"
            :key="`qualify-list-${index}`"
            class="qualify-list-item"
          >
            <span class="name">{{item}}</span>
            <i class="layui-icon layui-icon-close" @click="onRemoveType(index)"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-row select-city">
      <div class="layui-col-md1 leftlabel">资质价格</div>
      <div class="layui-col-md11">
        <div class="layui-col-md3" style="margin-top: 10px;">
          <div class="layui-form-item" lay-filter="qcprice">
            <div class="layui-inline">
              <div class="layui-input-inline" style="width: 100px;">
                <input
                  type="text"
                  name="price_min"
                  v-model="price_min"
                  placeholder="￥"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
              <div class="layui-form-mid">-</div>
              <div class="layui-input-inline" style="width: 100px;">
                <input
                  type="text"
                  name="price_max"
                  v-model="price_max"
                  placeholder="￥"
                  autocomplete="off"
                  class="layui-input"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="layui-col-md1 leftlabel">搜索内容</div>
        <div class="layui-col-md8 search-content">
          <input
            type="text"
            class="layui-input"
            placeholder="请输入相关内容进行搜索"
            autocomplete="off"
            v-model="keyword"
          />
        </div>
      </div>
    </div>
    <div class="layui-row btngroup">
      <div class="layui-inline">
        <button class="search layui-anim" @click="search()">搜索</button>
        <button class="reset layui-anim" @click="clear()">清空</button>
      </div>
    </div>
    <common-select :isShow="isShow" @onSelectType="onSelectType" @closeModal="close()"></common-select>
  </div>
</template>

<script>
import Select from '@/components/common/select'
import cityList from './city'
export default {
  name: 'common-search',
  components: {
    'common-select': Select,
  },
  data() {
    return {
      isShow: false,
      cityList: cityList,
      selectCity: 0,
      qualifyTypeList: ['全部', '转让', '求购', '代办'],
      selectQualifyType: 0,
      selectQualifyList: [],
      keyword: '',
      price_min: '',
      price_max: '',
    }
  },
  methods: {
    chooseCity(index) {
      this.selectCity = index
    },
    chooseQualify(index) {
      this.selectQualifyType = index
      this.$store.commit('setSearchInfo', {
        catalog: index,
      })
    },
    search() {},
    reset() {
      this.selectCity = 0
      this.selectQualifyType = 0
      this.keyword = ''
      this.price_min = ''
      this.price_max = ''
    },
    onSelectType(val) {
      if (!this.selectQualifyList.includes([val])) {
        this.selectQualifyList.push(val)
      }
    },
    onRemoveType(index) {
      this.selectQualifyList.splice(index, 1)
    },
    show() {
      this.isShow = true
    },
    close() {
      this.isShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
.search-container {
  background-color: #fff;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 0 24px;
  border-radius: 12px;
}

.select-city {
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
}

.leftlabel {
  font-size: 14px;
  color: #999999;
  margin-top: 10px;
  width: 74px;
  height: 36px;
  line-height: 36px;
}

.provice-list,
.city-list {
  box-sizing: border-box;
  padding-bottom: 16px;
  position: relative;
}

.city-list > div,
.provice-list > div {
  width: 74px;
  height: 30px;
  display: inline-block;
  margin-right: 8px;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  color: #333333;
  margin-top: 10px;
}

.city-list > div.active,
.provice-list > div.active {
  color: #fefefe;
  background-color: #2cdaaf;
  box-shadow: 0 4px 20px 0 rgba(44, 218, 175, 0.4);
}

.city-list > div.active a,
.provice-list > div.active a {
  color: #fff;
}

.qualifycontent {
  box-sizing: border-box;
  padding-bottom: 10px;
}

.qualify-list-item {
  display: inline-block;
  // height: 36px;
  // line-height: 36px;
  border-radius: 18px;
  background-color: #00b38a;
  padding: 5px 15px 5px 15px;
  color: #fff;
  margin-top: 10px;
  margin-right: 10px;

  .name {
    padding-right: 5px;
  }

  .layui-icon-close {
    position: relative;
    top: 1px;
    cursor: pointer;
  }
}

.isall {
  cursor: pointer;
}
.selqualify > div,
.selpeople > div,
.selproject > div,
.selphone > div,
.selregtype > div {
  margin-top: 10px;
  display: inline-block;
}
.selqualify .isall,
.selpeople .isall,
.selproject .isall,
.selphone .isall,
.selregtype .isall {
  width: 80px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 18px;
  box-shadow: 0 4px 20px 0 rgba(210, 210, 210, 0.4);
  margin-right: 20px;
}

.selqualify .isall.active,
.selpeople .isall.active,
.selproject .isall.active,
.selphone .isall.active,
.selregtype .isall.active {
  color: #fefefe;
  background-color: #2cdaaf;
  box-shadow: 0 4px 20px 0 rgba(44, 218, 175, 0.4);
}

.selqualify > div.addqualify,
.selpeople > div.addpeople {
  height: 36px;
  line-height: 36px;
  padding: 0 15px;
  border: 1px solid #2cdaaf;
  color: #2cdaaf;
  border-radius: 18px;
  cursor: pointer;
}

.search-content {
  padding-bottom: 10px;

  input {
    width: 60%;
    margin-top: 10px;
    color: #333;
    // border-radius: 5px;
    // border-color: #c8c8c8;
  }
}

.btngroup {
  padding: 15px 0 30px;

  > div {
    width: 100%;
    text-align: center;
  }

  button {
    cursor: pointer;
    border: none;
    text-align: center;
    margin-right: 20px;
    border-radius: 22px;
    font-size: 18px;
    display: inline-block;
    width: 110px;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 4px 20px 0 rgba(210, 210, 210, 0.4);
  }

  .reset {
    color: #2cdaaf;
    background-color: #fff;
  }

  .search {
    color: #fff;
    background-color: #2cdaaf;
  }
}
</style>
