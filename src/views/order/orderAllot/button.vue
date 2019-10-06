<template>
  <div class="button">
    <el-button type="primary" @click="handleAdd()">添加分配规则</el-button>
    <el-button type="primary" @click="handleAdd1()">分配所有未分配的订单</el-button>
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
      this.$emit("dialogClick",true)
    },
    handleAdd1(){
      this.$confirm('确定要分配所有未分配的订单吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // });
      });
      // console.log(1111);
      // this.$emit("dialogClick",true)
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  margin-bottom: 20px;
}
</style>
