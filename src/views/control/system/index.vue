<template>
  <div class="user app-container">
    <div class="clearfix">
      <search-z class="search fr" @searchData="searchData"></search-z>
    </div>

    <table-z @editDialog="editDialog"></table-z>
  </div>
</template>

<script>
import tableZ from './tabel'
import searchZ from './search'


export default {
  name: 'user',
  components:{
    tableZ,
    searchZ,

  },
  data() {
    return {
      title:"",
      dialogVisible:false,
      redact:{}
    }
  },
  methods: {
    //搜索
    searchData(val){
      console.log(val);
    },
    editDialog(val){
      console.log(val);
      this.title="编辑";
      this.dialogVisible=true;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
