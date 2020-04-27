<template>
  <div class="mayi-footer">
    <div class="footer-content">
      <div class="layui-row">
        <div class="layui-col-md2">
          <div class="footer-title">关于我们</div>
          <div class="footer-list">
            <div>
              <a href="#">关于我们</a>
            </div>
            <div>
              <a href="#">产品介绍</a>
            </div>
            <div>
              <a href="#">蚂蚁网简介</a>
            </div>
          </div>
        </div>
        <div class="layui-col-md3">
          <div class="footer-title">使用与帮助</div>
          <div class="footer-list">
            <div>
              <a href="#" target="_blank">用户协议与隐私政策</a>
            </div>
            <div>
              <a href="#" target="_blank">职位发布规则</a>
            </div>
          </div>
        </div>
        <div class="layui-col-md4">
          <div class="footer-title">联系我们</div>
          <div class="footer-list">
            <div>工作日：9:00 - 18:00</div>
            <div>客服电话：0551-69020202</div>
            <div>违法和不良信息举报电话 0551-69020220</div>
          </div>
        </div>
      </div>
      <div class="layui-row">
        <div class="layui-col-md8">
          <div class="footer-list">
            Copyright © 2020 蚂蚁网
            <a href="#" rel="nofollow" target="_blank">贵ICP备19015290号</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer-content {
  width: 990px;
  box-sizing: border-box;
  padding: 30px 0;
  margin: 0 auto;
  text-align: left;
}

.footer-title {
  font-size: 18px;
  font-weight: bold;
  min-height: 24px;
}

.footer-list {
  font-size: 14px;
  padding-top: 14px;

  & > div {
    padding-top: 8px;
  }
}
</style>
