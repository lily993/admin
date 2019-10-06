<template>
  <div class="mineAccount app-container">
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号名称" prop="name">
        <el-input v-model="name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="累计金额" prop="name">
        <el-input v-model="name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="当前金额" prop="name">
        <el-input v-model="name" :disabled="true"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'mineAccount',
    data() {
      return {
        name:"sfsfsd"
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
.demo-ruleForm{
  width: 35%;
}
</style>

