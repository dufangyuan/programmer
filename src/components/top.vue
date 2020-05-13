<template>

    <div>
        
        <el-container>
  <el-header style="height:70px; ">
    <div class="a1">
      <ul class="navigation bar">
        <li class="navigation logo"></li>
        <li class="navigation page"> <a href="">首页</a></li>
         <li class="navigation page"><a href="">云端工作</a></li>
          <li class="navigation page"><a href="">程序员</a></li>
          <el-dropdown>
  <span class="el-dropdown-link">
    更多服务<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>
      <img :src="imgUrl" style="width:30px; height:28px;">技术圈
      </el-dropdown-item>
    <el-dropdown-item>
      <img :src="imgUrl1" style="width:30px; height:28px;">进制数据
      </el-dropdown-item>
    <el-dropdown-item>
        <img :src="imgUrl2" style="width:30px; height:28px;">招聘兼职
      </el-dropdown-item>
    <el-dropdown-item>
      <img :src="imgUrl3" style="width:30px; height:28px;">解决方案
      </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
          <li class="navigation register"><a href="">登录</a></li>
          <li class="navigation register"><a href="">注册</a></li>
      </ul>
      </div>
  </el-header>
  
</el-container>
    </div>
</template>
<script>
export default {
data(){
        return {
            imgUrl:require("../assets/fengche.svg"),
             imgUrl1:require("../assets/shuju.svg"),
             imgUrl2:require("../assets/zhaopin.svg"),
             imgUrl3:require("../assets/jiejue.svg"),
        }
}
}
</script>

<style>
.el-header{
     background-color: #B3C0D1;
     color: #fff;
    /* text-align: center; */
    line-height: 70px;
  }
  .el-header a{
    text-decoration: none;
    color: #fff;
  }
  .bar{
    width: 70%;
    height: 68px;
    border: 1px solid black;
    margin: auto;
  }
  .logo{
         width: 140px;
         height: 68px;
         border: 1px solid black;
         overflow: hidden;
         float: left;
  }
  .page{
    width: 90px;
    height: 68px;
    border: 1px solid black;
    overflow: hidden;
    float: left;
    line-height: 68px;
    text-align: center;
    
  }
  .register{
     width: 90px;
    height: 68px;
    border: 1px solid black;
    overflow: hidden;
    float: right;
    line-height: 68px;
    text-align: center;
    
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  
</style>