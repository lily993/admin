<template>
  <div class="dialog">
  <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="40%">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible1">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

  <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose(1)">取 消</el-button>
    <el-button type="primary" @click="handleClose(2)">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialogZ',
  props:{
    title:String,
    dialogVisible:Boolean
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible1: false
    }
  },
  methods: {
    handleClose(id) {
      if (id == 1) {

      } else {

      }
      this.$emit("addDialog", false)
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible1 = true;
    }
  }
}
</script>

<style lang="scss">
.dialog{
  .demo-ruleForm{
    padding: 0 10px 0 0px;
    .selectW{
      width: 120px;
    }
  }
}

</style>
