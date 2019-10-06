<template>
  <div class="dialog">
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="40%">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="角色名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
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
    padding: 0 10px 0 0;
    .selectW{
      width: 120px;
    }
  }
}

</style>
