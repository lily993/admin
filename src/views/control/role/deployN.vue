<template>
  <div class="dialog">
  <el-dialog
      title="配置用户"
      :visible.sync="dialogVisibleN"
      :before-close="handleClose"
      width="40%">
    <el-form>
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="name" :disabled="true" class="inputW"></el-input>
      </el-form-item>
    </el-form>

    <p>配置用户</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
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
    dialogVisibleN:Boolean,
    redactN:{
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
        }, {
          id: 2,
          label: '订单管理',
        }, {
          id: 3,
          label: '个人信息',
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
      this.$emit("editDialogN",false)
    }
  }
}
</script>

<style lang="scss">
.dialog{
  .inputW{
    width: 280px;
  }
}

</style>
