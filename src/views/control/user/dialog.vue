<template>
  <div class="dialog">
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="40%">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="ruleForm.status" placeholder="请选择" class="selectW">
          <el-option label="正常" value="1"></el-option>
          <el-option label="停用" value="2"></el-option>
        </el-select>
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
      input3: '',
      select: '',

      ruleForm: {
        account:'',
        password:'',
        name: '',
        phone:'',
        status:''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号名称', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到15个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 2 到 6个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'change' },
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
        account:'',
        password:'',
        name: '',
        phone:'',
        status:''
      };
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
