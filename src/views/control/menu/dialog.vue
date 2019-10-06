<template>
  <div class="dialog">
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="40%">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="菜单名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单路径" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单图标" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="父级id" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单" prop="name">
        <el-select v-model="ruleForm.name" placeholder="请选择" >
          <el-option label="订单" value="1"></el-option>
          <el-option label="系统" value="2"></el-option>
        </el-select>
      </el-form-item>



    </el-form>

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
    title:String,
    dialogVisible:Boolean,
    redact:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      input3: '',
      select: '',
      ruleForm: {
        name: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        }
    }
  },
  methods: {
    handleClose(id){
      if(id==1){

      }else {

      }
      this.$emit("addDialog",false)
    }
  }
}
</script>

<style lang="scss">
.dialog{
  .demo-ruleForm{
    padding: 0 10px 0 0px;
    .selectW{
      width: 120px;
    }
  }
}

</style>
