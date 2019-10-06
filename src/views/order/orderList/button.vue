<template>
  <div class="button">
    <el-button type="primary" @click="handleAdd()">删除订单</el-button>
  </div>
</template>

<script>

export default {
  name: 'buttonZ',
  components:{
  },
  data() {
    return {}
  },
  methods: {
    handleAdd(){
      console.log(1111);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
      this.$emit("dialogClick",true)
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  margin-bottom: 20px;
}
</style>
