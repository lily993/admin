<template>
  <div class="dialog">
  <el-dialog
      title="配置权限"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="40%">

    <el-form>
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="name" :disabled="true" class="inputW"></el-input>
      </el-form-item>
    </el-form>

    <p>配置权限</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps">
    </el-tree>

  <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose(1)">取 消</el-button>
    <el-button type="primary" @click="handleClose(2)">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialogZ',
  props:{
    dialogVisible:Boolean,
    redact:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      name: '三级权限',
      data: [
        {
          id: 0,
          label: '首页',
        },
        {
        id: 1,
        label: '用户管理',
        children: [{
          id: 4,
          label: '二级 1-1',
        }]
      }, {
        id: 2,
        label: '订单管理',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '个人信息',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleClose(id){
      if(id==1){

      }else {

      }
      this.$emit("editDialog",false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog{
    .inputW{
      width: 280px;
    }
  }

</style>
