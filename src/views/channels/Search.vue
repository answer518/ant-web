<template>
  <div class="box">
    <div class="search-container">
      <div class="layui-row select-city">
        <div class="layui-col-md1 leftlabel">城市选择</div>
        <div class="layui-col-md11">
          <div class="layui-col-md12 provice-list">
            <div class="active">
              <a href="javascript:;" data-id=",">
                <span>全国</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0100,北京">
                <span>北京</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0600,重庆">
                <span>重庆</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0200,上海">
                <span>上海</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0900,四川">
                <span>四川</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0700,江苏">
                <span>江苏</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0300,广东">
                <span>广东</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1800,湖北">
                <span>湖北</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0800,浙江">
                <span>浙江</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="0500,天津">
                <span>天津</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1500,安徽">
                <span>安徽</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1100,福建">
                <span>福建</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1200,山东">
                <span>山东</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1300,江西">
                <span>江西</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1400,广西">
                <span>广西</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1000,海南">
                <span>海南</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1600,河北">
                <span>河北</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1700,河南">
                <span>河南</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="1900,湖南">
                <span>湖南</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2000,陕西">
                <span>陕西</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2100,山西">
                <span>山西</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2200,黑龙江">
                <span>黑龙江</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2300,辽宁">
                <span>辽宁</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2400,吉林">
                <span>吉林</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2500,云南">
                <span>云南</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2600,贵州">
                <span>贵州</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2700,甘肃">
                <span>甘肃</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2800,内蒙古">
                <span>内蒙古</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="2900,宁夏">
                <span>宁夏</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3000,西藏">
                <span>西藏</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3200,青海">
                <span>青海</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3700,新疆">
                <span>新疆</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3300,香港">
                <span>香港</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3400,澳门">
                <span>澳门</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3500,台湾">
                <span>台湾</span>
              </a>
            </div>
            <div>
              <a href="javascript:;" data-id="3600,国外">
                <span>国外</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-row select-city">
        <div class="layui-col-md1 leftlabel">资质需求</div>
        <div class="layui-col-md11 qualifycontent">
          <div class="layui-col-md6 selproject selsubtype">
            <div class="isall active" data-type>全部</div>
            <div class="isall" data-type="1">转让</div>
            <div class="isall" data-type="2">求购</div>
            <div class="isall" data-type="3">代办</div>
          </div>
        </div>
      </div>
      <div class="layui-row select-city">
        <div class="layui-col-md1 leftlabel">资质类型</div>
        <div class="layui-col-md11 qualifycontent">
          <div class="layui-col-md12 selqualify">
            <div class="addqualify selClassify">添加资质类型(可多选)</div>
          </div>
          <div class="layui-col-md12 qualifylist"></div>
        </div>
      </div>
      <div class="layui-row select-city">
        <div class="layui-col-md1 leftlabel">关键词</div>
        <div class="layui-col-md11">
          <div class="layui-col-md6 search-content">
            <input
              type="text"
              class="layui-input"
              placeholder="请输入相关内容进行搜索"
              autocomplete="off"
              value
              name="key"
            />
          </div>
        </div>
      </div>
      <div class="layui-row btngroup">
        <div class="layui-inline">
          <a class="reset" href="/zzs/colist.html">
            <div class="layui-anim">清空</div>
          </a>
          <button class="search layui-anim" lay-submit lay-filter="submitform">搜索</button>
        </div>
      </div>
    </div>
    <div class="layui-container">
      <div class="layui-col-md9">
        <content-list></content-list>
      </div>
      <div class="layui-col-md3">22222</div>
    </div>
  </div>
</template>

<script>
import List from '@/components/contents/List'
export default {
  name: 'search',
  components: {
    'content-list': List,
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 990px;
  margin: 20px auto 0;
}
.search-container {
  background-color: #fff;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 0 14px;
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
    width: 374px;
    margin-top: 10px;
    color: #333;
    border-radius: 20px;
    border-color: #c8c8c8;
  }
}

.btngroup {
  padding: 15px 0 30px;

  > div {
    width: 100%;
    text-align: center;

    .reset {
      font-size: 18px;
      display: inline-block;
      width: 110px;
      height: 44px;
      line-height: 44px;
      color: #2cdaaf;
      background-color: #fff;
      box-shadow: 0 4px 20px 0 rgba(210, 210, 210, 0.4);
      text-align: center;
      margin-right: 20px;
      border-radius: 22px;
    }

    .search {
      font-size: 18px;
      display: inline-block;
      width: 110px;
      height: 44px;
      line-height: 44px;
      color: #fff;
      background-color: #2cdaaf;
      box-shadow: 0 4px 20px 0 rgba(44, 218, 175, 0.4);
      text-align: center;
      margin-right: 20px;
      border-radius: 22px;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
