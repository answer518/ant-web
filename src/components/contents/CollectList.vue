<template>
  <div class="collectlist">
    <div>
      <div class="cimg">
        <img src="https://www.douyiyun.com/static/images/c_company.png" />
      </div>
      <div class="cnum">0</div>
      <div class="cname">收藏公司</div>
    </div>
    <div>
      <div class="cimg">
        <img src="https://www.douyiyun.com/static/images/c_need.png" />
      </div>
      <div class="cnum">0</div>
      <div class="cname">收藏需求</div>
    </div>
    <div>
      <div class="cimg">
        <img src="https://www.douyiyun.com/static/images/c_people.png" />
      </div>
      <div class="cnum">0</div>
      <div class="cname">收藏人才</div>
    </div>
    <div>
      <div class="cimg">
        <img src="https://www.douyiyun.com/static/images/c_position.png" />
      </div>
      <div class="cnum">0</div>
      <div class="cname">收藏职位</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collectlist',
}
</script>

<style lang="scss" scoped>
.collectlist {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  font-size: 14px;
  color: #666666;
  box-sizing: border-box;
  padding: 36px 84px 0 334px;

  > div {
    display: inline-block;
    text-align: center;
    margin-right: 70px;

    .cimg,
    img {
      width: 56px;
      height: 56px;
    }

    .cnum {
      font-size: 36px;
      color: #333333;
      font-weight: bold;
      margin: 8px 0 5px;
    }
  }
}
</style>
