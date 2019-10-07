<template>
  <div class="dialog">
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="50%">

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <el-form-item label="任务名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="产品名称" prop="product">
        <el-input v-model="ruleForm.product"></el-input>
      </el-form-item>
      <el-form-item label="订单单价" prop="unit">
        <el-input v-model="ruleForm.unit"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="分配方式" prop="way">
            <el-select v-model="ruleForm.way" placeholder="请选择" class="selectW">
              <el-option label="顺序分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否执行" prop="use">
            <el-select v-model="ruleForm.use" placeholder="请选择" class="select">
              <el-option label="执行" value="1"></el-option>
              <el-option label="停用" value="2"></el-option>
            </el-select>
          </el-form-item>

        </el-col>
      </el-row>


    </el-form>
    <div class="btn">
      <el-button type="primary" @click="handleAdd()" class="button">添加账户</el-button>
    </div>

    <div>
      <el-form :rules="rulesF" label-width="80px" class="demo-ruleForm">
      <el-row v-for="(item,index) in form">
        <el-col :span="12">
          <el-form-item label="账户" prop="name">
            <el-select v-model="item.name" placeholder="请选择" class="selectW">
              <el-option label="张三" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="订单数量" prop="id">
            <el-input v-model="item.num"  class="select1"></el-input>
          </el-form-item>
          <!--<i class="el-icon-delete"></i>-->
        </el-col>
        <el-col :span="2">
          <el-button type="primary" icon="el-icon-delete" @click="delClick(index)"></el-button>
        </el-col>
      </el-row>

      </el-form>
    </div>

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
        product:'',
        unit:'',
        way:'',
        use:''
      },
      rules: {
        name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' },
        ],
        product: [
          { required: true, message: '请输入产品名称', trigger: 'blur' },
        ],
        unit: [
          { required: true, message: '请输入订单单价', trigger: 'blur' },
        ],
        way: [
          { required: true, message: '请选择分配方式', trigger: 'change' },
        ],
        use: [
          { required: true, message: '请选择是否执行', trigger: 'change' },
        ],

        },

      form:[],
      rulesF:{
        name: [
          { required: true, message: '请选择账户', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请选择状态', trigger: 'change' },
        ],
      }
    }
  },
  methods: {
    handleClose(id,data){
      if(id=='ruleForm'){
        this.$emit("addDialog",false);
        this.initData();
      }else {
        this.$refs[id].validate((valid) => {
          if (valid) {
            this.accountsData(data)
          } else {
            this.$message('请按照正确格式填写');
            return false;
          }
        });
      }

    },
    //校验账户数据
    accountsData(){
      if(this.form.length==0){
        this.$message('请添加账户');
      }
    },

    //表单数据初始化
    initData(){
      this.ruleForm= {
        name: '',
        product:'',
        unit:'',
        way:'',
        use:''
      };
      this.form=[];
    },


    handleAdd(){
      this.form.push( {name:"",num:''},)
    },
    delClick(index){
      console.log(index);
      this.form.splice(index,1);
    }
  }
}
</script>

<style lang="scss">
.dialog{
  .demo-ruleForm{
    padding: 0 10px 0 0;
    .selectW{
      width:90%;
    }
    .select{
      width: 70%;
      /*width:200px;*/
    }
    .select1{
      width: 90%;
      /*width:200px;*/
    }
  }
}
  .btn{
    text-align: center;
    margin-bottom: 20px;
    .button{
      margin: 0 auto;
    }

  }

</style>
