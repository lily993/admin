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
    <el-button @click="handleClose()">取 消</el-button>
    <el-button type="primary" @click="handleClose('ruleForm')">确 定</el-button>
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
      ruleForm: {
        name: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入角色名称', trigger: 'blur'},
        ],
      }
    }
  },
  methods: {
    handleClose(id){
      if(id=='ruleForm'){
        this.$refs[id].validate((valid) => {
          if (valid) {
            this.$emit("addDialog",false);
          } else {
            this.$message('请按照正确格式填写');
            return false;
          }
        });
      }else {
        this.$emit("addDialog",false);
        this.initData();
      }

    },

    //表单数据初始化
    initData(){
      this.ruleForm= {
        name: '',
      };
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
