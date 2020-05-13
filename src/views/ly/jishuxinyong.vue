<template>
    <div>
      <div class="title-area">
        <h2>技术信用(查询我的)</h2>
        <div class="stips">
            这是他人查询您的技术信用查询记录，共0个 ，同意授权(0) ，拒绝授权(0)
        </div>
        <div class="stipss">
            点击左侧菜单栏“前往企业版”按钮，查看“我查询的”授权记录
        </div>
        <el-dropdown split-button type="primary" class="asd">
  全部
  <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>全部</el-dropdown-item>
    <el-dropdown-item>待授权</el-dropdown-item>
    <el-dropdown-item>已同意</el-dropdown-item>
    <el-dropdown-item>已拒绝</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
      <div class="bottom-area">
       <!-- <el-switch v-model="value">
 </el-switch> -->
 <el-pagination
  :hide-on-single-page="value"
  :total="5"
  layout="prev, pager, next">
</el-pagination>
      </div>
    </div>
</template>

<script>
   export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>

<style >
.stips{
    width: 800px;
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #919aa7;
    margin-top: 10px;
}
.stipss{
    color: orange;
    width: 800px;
    height: 20px;
    font-size: 12px;
    font-weight: 400;
     margin-top: 10px;
}
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-dropdown .el-button-group{
      width: 200px;
      height: 40px;
  }
  .asd{
      width: 200px;
      height: 40px;
      margin-top: 50px;
  }
  .el-button--primary{
        width:150px;
      height: 40px;
         color: #606266;
       background-color:white;      
  }
  .el-button-group .el-button--primary{
       width: 100px;
      height: 40px;
       
  }
  .bottom-area{
      width:830px;
      height: 70px;
      /* border: 1px solid black; */
      background: white;
      margin-top: 10px;

  }
  .el-pagination{
      padding:20px 360px;
  }
</style>