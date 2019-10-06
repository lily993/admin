<template>
  <div class="user app-container">
    <div class="clearfix">
      <search-z class="search fr" @searchData="searchData"></search-z>
    </div>

    <table-z></table-z>

  </div>
</template>

<script>
import tableZ from './tabel'
import searchZ from './search'

export default {
  name: 'user',
  components:{
    tableZ,
    searchZ
  },
  data() {
    return {

    }
  },
  methods: {
    //搜索
    searchData(val){
      console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
