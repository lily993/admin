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
      <el-form-item label="产品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="订单单价" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <!--<el-row>-->
        <!--<el-form-item label="分配方式" prop="region">-->
          <!--<el-select v-model="ruleForm.region" placeholder="请选择" class="selectW">-->
            <!--<el-option label="顺序分配" value="1"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="是否执行" prop="region">-->
          <!--<el-select v-model="ruleForm.region" placeholder="请选择" class="selectW">-->
            <!--<el-option label="执行" value="1"></el-option>-->
            <!--<el-option label="停用" value="2"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
      <!--</el-row>-->
      <el-row>
        <el-col :span="12">
          <el-form-item label="分配方式" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择" class="selectW">
              <el-option label="顺序分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否执行" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择" class="select">
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
      <el-form :rules="rules1" ref="form1" label-width="80px" class="demo-ruleForm">
      <el-row v-for="(item,index) in form1">
        <el-col :span="12">
          <el-form-item label="账户" prop="name">
            <el-select v-model="item.name" placeholder="请选择" class="selectW">
              <el-option label="张三" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="订单数量" prop="id">
            <el-input v-model="item.id"  class="select1"></el-input>
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
        region:""
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        },

      form1:[],
      rules1:{
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        id: [
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
    },
    handleAdd(){
      this.form1.push( {name:"",id:''},)
    },
    delClick(index){
      console.log(index);
      this.form1.splice(index,1);
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
