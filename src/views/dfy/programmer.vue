<template>
<div class="pro_box">
     <el-container>
        <el-header>
            <el-link type="primary">平台程序员兼职</el-link>
            <el-link target="_blank"><span><el-link type="primary">418419</el-link></span>位兼职程序员符合条件</el-link>
        </el-header>
        <el-main>Main</el-main>
    </el-container>
    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
        <el-main>Main</el-main>
    </el-container>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.el-header {
    border:1px solid #f5f5f5;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header .el-link:nth-child(1){
      float: left;
  }
   .el-header .el-link:nth-child(2){
      float: right;
  }
  .el-main {
    border:1px solid #f5f5f5;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
      margin:100px auto;
      width:1000px;
      
  }
</style>