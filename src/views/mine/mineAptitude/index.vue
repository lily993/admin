<template>
  <div class="user app-container">
    <div class="clearfix">
      <button-z class="btn fl" @dialogClick="dialogClick"></button-z>
      <search-z class="search fr" @searchData="searchData"></search-z>
    </div>

    <table-z></table-z>
    <!--弹框-->
    <dialogZ :title="title" :dialogVisible="dialogVisible" @addDialog="addDialog"></dialogZ>
  </div>
</template>

<script>
import tableZ from './tabel'
import searchZ from './search'
import buttonZ from './button'
import dialogZ from './dialog'

export default {
  name: 'user',
  components:{
    tableZ,
    searchZ,
    buttonZ,
    dialogZ
  },
  data() {
    return {
      title:"",
      dialogVisible:false,
    }
  },
  methods: {
    addDialog(val){
      console.log(val);
      this.dialogVisible=false;
    },
    //新增事件
    dialogClick(val){
      this.title="添加证件";
      this.dialogVisible=true;
      // console.log(val);
    },
    //搜索
    searchData(val){
      console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
