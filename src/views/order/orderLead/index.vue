<template>
  <div class="orderLead app-container">
    <div>
      <p>注意1：订单导入前请将数据严格按照数据模板Excel的格式进行填入，否则将会导入失败。</p>
      <p>注意2：默认重复手机号码的订单不会被导入。</p>
      <p>注意3：请将所有数据放在sheet1，不要建立多个sheet。</p>
      <el-button type="primary" @click="handleAdd()">导出模板</el-button>
      <el-button type="primary" @click="handleAdd()">导入订单</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderLead',
    data() {
      return {}
    },
    methods: {
      handleAdd(){}
    }
  }
</script>

<style lang="scss" scoped>

</style>

