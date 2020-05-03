<template>
  <div class="layui-container ant-marginTop" :class="{'d-hide': isHide}">
    <div class="ant-panel" pad20 style="padding-top: 5px;">
      <div class="layui-form layui-form-pane">
        <div class="layui-tab layui-tab-brief" lay-filter="user">
          <ul class="layui-tab-title">
            <li class="layui-this">修改需求</li>
          </ul>
          <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <form>
                <validation-observer ref="observer" v-slot="{ validate }">
                  <div class="layui-form-item">
                    <validation-provider name="title" rules="required" v-slot="{ errors }">
                      <div class="layui-row">
                        <label for="L_title" class="layui-form-label">标题</label>
                        <div class="layui-input-block">
                          <input type="text" class="layui-input" v-model="title" />
                        </div>
                      </div>
                      <div class="layui-row">
                        <span style="color: #c00;">{{ errors[0] }}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <editor @changeContent="add" :initContent="content"></editor>
                  <div class="layui-row layui-col-space15 layui-form-item">
                    <div class="layui-col-md3">
                      <validation-provider name="catalog" rules="is_not:请选择" v-slot="{ errors }">
                        <div class="layui-row">
                          <label class="layui-form-label">需求类型</label>
                          <div class="layui-input-block" @click="changeSelect()">
                            <div
                              class="layui-unselect layui-form-select"
                              :class="{ 'layui-form-selected': isSelect }"
                            >
                              <div class="layui-select-title">
                                <input
                                  type="text"
                                  placeholder="请选择"
                                  readonly
                                  v-model="catalogs[cataIndex].text"
                                  class="layui-input layui-unselect"
                                />
                                <i class="layui-edge"></i>
                              </div>
                              <dl class="layui-anim layui-anim-upbit">
                                <dd
                                  v-for="(item, index) in catalogs"
                                  :key="'catalog' + index"
                                  @click="chooseCatalog(item, index)"
                                  :class="{ 'layui-this': index === cataIndex }"
                                >{{ item.text }}</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div class="layui-row">
                          <span style="color: #c00;">{{ errors[0] }}</span>
                        </div>
                      </validation-provider>
                    </div>
                    <div class="layui-col-md3">
                      <div class="layui-inline">
                        <label class="layui-form-label">资质类型</label>
                        <div class="layui-input-block">
                          <input type="text" class="layui-input" v-model="qualification" />
                        </div>
                      </div>
                    </div>
                    <div class="layui-col-md3">
                      <div class="layui-inline">
                        <label class="layui-form-label">资质价格</label>
                        <div class="layui-input-block">
                          <input type="text" class="layui-input" v-model="price" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider
                      name="code"
                      ref="codefield"
                      rules="required|length:4"
                      v-slot="{errors}"
                    >
                      <div class="layui-row">
                        <label for="L_vercode" class="layui-form-label">验证码</label>
                        <div class="layui-input-inline">
                          <input
                            type="text"
                            name="code"
                            v-model="code"
                            placeholder="请输入验证码"
                            autocomplete="off"
                            class="layui-input"
                          />
                        </div>
                        <div class>
                          <span class="svg" style="color: #c00;" @click="_getCode()" v-html="svg"></span>
                        </div>
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <button
                      type="button"
                      class="layui-btn btn-save"
                      @click="validate().then(submit)"
                    >立即发布</button>
                  </div>
                </validation-observer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updatePost } from '@/api/content'
import CodeMix from '@/mixin/code'
import Editor from './editor/Index'
export default {
  name: 'Edit',
  props: ['tid', 'page'],
  mixins: [CodeMix],
  components: {
    Editor,
  },
  data() {
    return {
      isSelect: false,
      cataIndex: 0,
      catalogs: [
        {
          text: '请选择',
          value: '',
        },
        {
          text: '转让',
          value: 1,
        },
        {
          text: '求购',
          value: 2,
        },
        {
          text: '代办',
          value: 3,
        },
      ],
      content: '',
      title: '',
      price: '',
      qualification: '', // 资质
    }
  },
  mounted() {
    if (this.page) {
      this.title = this.page.title
      this.content = this.page.content
      this.qualification = this.page.qualification
      this.price = this.page.price
      this.cataIndex = this.catalogs.indexOf(
        this.catalogs.filter(
          item => item.value === parseInt(this.page.catalog)
        )[0]
      )
      // 缓存edit内容
      localStorage.setItem('editData', JSON.stringify(this.page))
    } else {
      // 页面上无page内容，可能是用户进行了刷新，则取本地缓存的内容
      const saveData = localStorage.getItem('editData')
      if (saveData && saveData !== '') {
        this.$confirm(
          '是否加载未编辑完的内容？',
          () => {
            const obj = JSON.parse(saveData)
            this.content = obj.content
            this.title = obj.title
            this.qualification = obj.qualification
            this.price = obj.price
            this.cataIndex = obj.cataIndex
          },
          () => {
            localStorage.setItem('editData', '')
          }
        )
      }
    }
  },
  methods: {
    chooseCatalog(item, index) {
      this.cataIndex = index
    },
    changeSelect() {
      this.isSelect = !this.isSelect
    },
    add(val) {
      this.content = val
      const saveData = {
        title: this.title,
        content: this.content,
        cataIndex: this.cataIndex,
        qualification: this.qualification,
        price: this.price,
      }
      if (this.title.trim() !== '' && this.content.trim() !== '') {
        const editData = localStorage.getItem('editData')
        let newObj = {}
        if (editData && editData !== '') {
          newObj = { ...saveData, ...JSON.parse(editData) }
        }
        localStorage.setItem('editData', JSON.stringify(newObj))
      }
    },
    async submit() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        // ABORT!!
        return
      }
      // 文章内容是否为空的判断
      if (this.content.trim() === '') {
        this.$alert('文章内容不得为空！')
        return
      }
      // 添加新的文章
      updatePost({
        tid: this.tid,
        title: this.title,
        content: this.content,
        catalog: this.catalogs[this.cataIndex].value,
        qualification: this.qualification,
        price: this.price,
        code: this.code,
        sid: this.$store.state.sid,
      }).then(res => {
        if (res.code === 200) {
          // 清空已经发布的内容
          localStorage.setItem('editData', '')
          this.$pop('', '更新成功!')
          setTimeout(() => {
            this.$router.push({ name: 'detail', params: { tid: this.tid } })
          }, 1000)
        } else {
          this.$alert(res.msg)
        }
      })
    },
  },
  computed: {
    isHide() {
      return this.$store.state.isHide
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
