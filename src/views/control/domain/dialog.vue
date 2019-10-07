<template>
  <div class="dialog">
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="40%">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="网站名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="域名网址" prop="url">
        <el-input v-model="ruleForm.url"></el-input>
      </el-form-item>

      <el-form-item label="是否生效" prop="using">
        <el-select v-model="ruleForm.using" placeholder="请选择" class="selectW">
          <el-option label="生效" value="1"></el-option>
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

      ruleForm: {
        name: '',
        url:'',
        using:''
      },
      rules: {
        name: [
          { required: true, message: '请输入网站名称', trigger: 'blur' },
        ],
        url: [
          { required: true, message: '请输入域名', trigger: 'blur' },
        ],
        using: [
          { required: true, message: '请选择是否生效', trigger: 'change' },
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
        url:'',
        using:''
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
