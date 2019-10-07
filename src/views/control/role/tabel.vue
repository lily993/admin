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
        label="角色名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建人">
      </el-table-column>
      <el-table-column
        prop="province"
        label="创建时间">
      </el-table-column>

      <el-table-column
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">配置权限</el-button>
          <el-button
            size="mini"
            @click="handleEditN(scope.$index, scope.row)">配置用户</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--翻页-->
    <page-nation :total="page_total" @pageChange="pageChange"></page-nation>
    <!--配置权限 -->
    <deploy :dialogVisible="dialogVisible" :redact="redact" @editDialog="editDialog"></deploy>
    <!--  配置用户  -->
    <deploy-n :dialogVisibleN="dialogVisibleN" :redactN="redactN" @editDialogN="editDialogN"></deploy-n>
  </div>
</template>

<script>
  import pageNation from '@/components/page'
  import deploy from './deploy'
  import deployN from './deployN'

export default {
  name: 'tableZ',
  components: {
    pageNation,
    deploy,
    deployN
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
      dialogVisible:false,
      redact:{},
      dialogVisibleN:false,
      redactN:{},

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    //配置权限
    handleEdit(index, row) {
      this.dialogVisible=true;
    },
    //配置用户
    handleEditN(index, row) {
      this.dialogVisibleN=true;
    },

    editDialog(val){
      this.dialogVisible=val;
    },

    editDialogN(val){
      this.dialogVisibleN=val;
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
.block{
  margin-top: 20px;
  text-align: center;
}
</style>
