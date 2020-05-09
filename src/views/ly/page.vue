<template>
    <div>
     <top></top>
     <el-main style="height:1550px;">
<template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 3" :key="item">
      <img :src="lun" style="width:100%; height:500px;">
     
    </el-carousel-item> 
  </el-carousel>
</template>
<div class="topcontent">
       123
</div>
</el-main> 
     <bottom></bottom>
    </div>
</template>

<script>
import top from '../../components/top'
import bottom from '../../components/bottom'
    export default {
        components:{
            top,
            bottom,
        },data() {
            return {
                lun:require("../../assets/lunbo.png"),
            }
        },

    }
</script>

<style>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
.el-carousel{
    width: 100%;
    height: 500px;
    border: 1px solid black;
}
.el-carousel__item  {
    width: 100%;
    height: 500px;
  }
 .el-carousel__arrow--left{
     width:60px;
     height: 60px;
 }
 .el-carousel__arrow--right{
      width:60px;
     height: 60px;
 }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .topcontent{
      width: 1000px;
      height: 250px;
      border: 1px solid black;     
  }
</style>