<template>
  <div class="table">

    <el-table
      v-loading="loading"
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        fixed
        type="index"
        label="序号"
        align="center"
        width="65">
      </el-table-column>
      <el-table-column
        prop="date"
        label="客户名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="证件名称">
      </el-table-column>
      <el-table-column
        prop=""
        label="证件照片"
        width="220px"
      >
        <template slot-scope="scope">
          <img src="../../../assets/timg.jpg" alt="照片" class="">
        </template>
      </el-table-column>
      <el-table-column
        prop="province"
        label="当前状态">
      </el-table-column>
      <el-table-column
        prop="province"
        label="提交状态">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        width="180px"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">通过</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">不通过</el-button>
        </template>
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
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      page_index: 1, // 页数
      page_total: 4, // 总页数
      page_size: 10,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    handleEdit(index, row) {
      this.$confirm('此操作将通过此资质, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消此操作'
        });
      });
    },
    handleDelete(index, row) {
      this.$confirm('此操作将不通过此资质, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消此操作'
        });
      });
      console.log(index, row);
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
