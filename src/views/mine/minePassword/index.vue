<template>
  <div class="minePassword app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="原密码" prop="former">
        <el-input v-model="ruleForm.former" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="passwordN">
        <el-input v-model="ruleForm.passwordN" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">修改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'minePassword',
    data() {
      return {
        ruleForm: {
          former: '',
          passwordN: '',
          password: '',
        },
        rules: {
          former: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到15个字符', trigger: 'blur' }
          ],
          passwordN: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到15个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入确认密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到15个字符', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('校验成功');
          } else {
            this.$message('请按照正确格式填写');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>
.demo-ruleForm{
  width: 35%;
}
</style>

