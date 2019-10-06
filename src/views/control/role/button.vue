<template>
  <div class="button">
    <el-button type="primary" @click="handleAdd()">添加角色</el-button>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.button{
  margin-bottom: 20px;
}
</style>
