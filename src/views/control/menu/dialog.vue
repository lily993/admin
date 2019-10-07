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
        <el-input v-model="ruleForm.path"></el-input>
      </el-form-item>
      <el-form-item label="图标名称" prop="icon">
        <el-input v-model="ruleForm.icon"></el-input>
      </el-form-item>
      <el-form-item label="父级id" prop="father">
        <el-input v-model="ruleForm.father"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单" prop="ranking">
        <el-select v-model="ruleForm.ranking" placeholder="请选择" >
          <el-option label="订单" value="1"></el-option>
          <el-option label="系统" value="2"></el-option>
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
        path:'',
        icon:"",
        father:"",
        ranking:"",
      },
      rules: {
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' },
        ],
        path: [
          { required: true, message: '请输入菜单路径', trigger: 'blur' },
        ],
        icon: [
          { required: true, message: '请输入图标名称', trigger: 'blur' },
        ],
        father: [
          { required: true, message: '请输入父级id', trigger: 'blur' },
        ],
        ranking: [
          { required: true, message: '请选择上级菜单', trigger: 'change' },
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
        path:'',
        icon:"",
        father:"",
        ranking:"",
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
