<template>
  <div class="table">

    <el-table
      v-loading="loading"
      :data="list"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="编号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="客户名称"
        width="120px"
        :filters="nameArr"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="产品名称"
        width="180px"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="手机号码"
        width="120px"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="客户地址"
        width="220px"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="联系时间"
        width="150px"
      >
      </el-table-column>
      <el-table-column
        prop="province"
        label="下单时间"
        width="150px"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="status"
        label="状态"
        align="center"
        width="180px"
        :filters="[{ text: '未下载', value: '未下载' }, { text: '已下载', value: '已下载' }]"
        :filter-method="filterHandler"
      >
      </el-table-column>
    </el-table>

    <!--翻页-->
    <page-nation :total="page_total" @pageChange="pageChange"></page-nation>
  </div>
</template>

<script>
  import pageNation from '@/components/page'

export default {
  name: 'tableZ',
  components: {
    pageNation
  },
  data() {
    return {
      loading: true,
      list: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        status:'已下载'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333,
        status:'已下载'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333,
        status:'未下载'
      }, {
        date: '2016-05-03',
        name: '王虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333,
        status:'未下载'
      }],
      nameArr:[{text:'王小虎',value:'王小虎'},{text:'王虎',value:'王虎'}],
      page_index: 1, // 页数
      page_total: 4, // 总页数
      page_size: 10,
      multipleSelection:[]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      this.$confirm('此操作将下载此订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '下载成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消下载'
        });
      });
    },

    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    //翻页
    pageChange (item) {
      console.log(item)
      this.page_index = item.page_index;
      this.page_size = item.page_limit;
      // this.fetchData() //改变页码，重新渲染页面
    },

    //获取查询数据
    fetchData() {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
/*.block{*/
  /*margin-top: 20px;*/
  /*text-align: center;*/
  img{
    width: 200px;
    height: 50px;
  }
/*}*/
</style>
