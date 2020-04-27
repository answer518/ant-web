<template>
  <div class="mayi-panel">
    <div class="inner">
      <h3 class="list-title">全国企业资质</h3>
      <div class="list-details" lay-filter="psall">
        <div lay-filter="ps0" class="layui-progress ps0">
          <div class="layui-progress-bar" lay-percent="100%" style="width: 100%;"></div>
          <div class="qcname layui-elip">建筑业企业资质</div>
          <div class="qcnumber">1155136</div>
        </div>
        <div lay-filter="ps1" class="layui-progress ps1">
          <div class="layui-progress-bar" lay-percent="19.69%" style="width: 19.69%;"></div>
          <div class="qcname layui-elip">安许资质</div>
          <div class="qcnumber">227452</div>
        </div>
        <div lay-filter="ps2" class="layui-progress ps2">
          <div class="layui-progress-bar" lay-percent="5.04%" style="width: 5.04%;"></div>
          <div class="qcname layui-elip">设计资质</div>
          <div class="qcnumber">58214</div>
        </div>
        <div lay-filter="ps3" class="layui-progress ps3">
          <div class="layui-progress-bar" lay-percent="2.01%" style="width: 2.01%;"></div>
          <div class="qcname layui-elip">测绘资质</div>
          <div class="qcnumber">23247</div>
        </div>
        <div lay-filter="ps4" class="layui-progress ps4">
          <div class="layui-progress-bar" lay-percent="2.06%" style="width: 2.06%;"></div>
          <div class="qcname layui-elip">监理资质</div>
          <div class="qcnumber">23804</div>
        </div>
        <div lay-filter="ps5" class="layui-progress ps5">
          <div class="layui-progress-bar" lay-percent="1%" style="width: 1%;"></div>
          <div class="qcname layui-elip">勘察资质</div>
          <div class="qcnumber">11608</div>
        </div>
        <div lay-filter="ps6" class="layui-progress ps6">
          <div class="layui-progress-bar" lay-percent="0.39%" style="width: 0.39%;"></div>
          <div class="qcname layui-elip">造价咨询资质</div>
          <div class="qcnumber">4510</div>
        </div>
        <div lay-filter="ps7" class="layui-progress ps7">
          <div class="layui-progress-bar" lay-percent="0.05%" style="width: 0.05%;"></div>
          <div class="qcname layui-elip">承装（修、试）电力设施许可证</div>
          <div class="qcnumber">599</div>
        </div>
        <div lay-filter="ps8" class="layui-progress ps8">
          <div class="layui-progress-bar" lay-percent="0.28%" style="width: 0.28%;"></div>
          <div class="qcname layui-elip">设计与施工一体化资质</div>
          <div class="qcnumber">3239</div>
        </div>
        <div lay-filter="ps9" class="layui-progress ps9">
          <div class="layui-progress-bar" lay-percent="0.01%" style="width: 0.01%;"></div>
          <div class="qcname layui-elip">信息系统集成及服务资质</div>
          <div class="qcnumber">134</div>
        </div>
        <!-- 循环项 -->

        <!-- 循环结束 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tips',
  data() {
    return {
      lists: [],
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
$border-color: #f2f2f2;

.inner {
  padding: 10px;
}

.list-title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 8px;
}

.layui-progress {
  border-radius: 0;
  height: 30px;
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #2cdaaf;
  margin-top: 10px;

  .layui-progress-bar {
    border-radius: 0;
    height: 30px;
    background-color: #2cdaaf;
  }

  .qcname {
    position: absolute;
    top: 0;
    left: 5px;
    line-height: 30px;
    max-width: 220px;
  }

  .qcnumber {
    position: absolute;
    top: 0;
    right: 5px;
    line-height: 30px;
  }
}
</style>
