<template>
  <div class="ant-panel" style="margin-bottom: 0;">
    <list-item :lists="lists" :isEnd="isEnd" @nextpage="nextPage()"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem'
import listMix from '@/mixin/list'
export default {
  name: 'list',
  mixins: [listMix],
  data() {
    return {
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: '',
      isEnd: false,
      isRepeat: false,
      current: '',
      lists: [
        // {
        //   name: '孟经理',
        //   title: '经理',
        //   publishDate: '2020-04-26',
        //   certificate: '资质·转让',
        //   level: '市政公用工程施工总承包-二级',
        //   job_title: '震惊！客户急出房二市二资质，居然给出这种价格。',
        //   job_price: '40W-42W',
        //   job_qualification:
        //     '全国公司业务：资质整合、分立 资质升级、资质代办、中高端**猎聘、北京华建英才人力资源顾问有限公司成立于贰零壹壹年，总部位于首都北京，北京华聚远航企业管理咨询有限公司是旗下子公司、目前在全国范围内有34家分公司，营销网络覆盖华东、华南、华中、华北、西北、西南等，建立了以北京为核心。',
        //   job_address: ['南京市', '无债务', '速度快'],
        //   pic:
        //     'https://www.douyijob.com/upload/img/user/B11173.jpg?1587723313730',
        // },
      ],
    }
  },
  components: {
    ListItem,
  },
  watch: {
    current(newval, oldval) {
      // 去兼听current标签是否有变化，如果有变化，则需要重新进行查询
      // this.init()
    },
    $route(newval, oldval) {
      // let catalog = this.$route.params['catalog']
      // if (typeof catalog !== 'undefined' && catalog !== '') {
      //   this.catalog = catalog
      // }
      // this.init()
    },
  },
  methods: {
    search(val) {
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
      switch (val) {
        // 未结贴
        case 0:
          this.status = '0'
          this.tag = ''
          break
        // 已结贴
        case 1:
          this.status = '1'
          this.tag = ''
          break
        // 查询"精华"标签
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        // 按照时间去查询
        case 3:
          this.sort = 'created'
          break
        // 按照评论数去查询
        case 4:
          this.sort = 'answer'
          break
        // 综合查询
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
