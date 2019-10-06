<template>
  <div class="search">
    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="searchClick(1)"></el-button>
    </el-input>
    <el-button @click="searchClick(2)">清空</el-button>
    <!--<table-z></table-z>-->
  </div>
</template>

<script>
// import tableZ from './tabel'

export default {
  name: 'searchZ',
  components:{

  },
  data() {
    return {
      input3: '',
      select: ''
    }
  },
  methods: {
    searchClick(id){
      if(id==1){
        this.$emit("searchData",111);
      }else if(id==2) {
        this.input3= '';
        this.select= '';
        // this.$emit("searchData",111);
      }

      // console.log(222);
    }
  }
}
</script>

<style lang="scss">
  .search{
    margin-bottom: 20px;
    .el-select .el-input {
      width: 220px;
    }
    .input-with-select{
      width: 560px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
  }

</style>
