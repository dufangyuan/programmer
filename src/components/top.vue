<template>
    <div>     
<el-container>
  <el-header style="height:60px; " class="toubu">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo topnav"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">云端工作</el-menu-item>
  <el-menu-item index="3">程序员</el-menu-item>
  <el-submenu index="2">
    <template slot="title">更多服务</template>
    <el-menu-item index="2-1">
      技术圈
      </el-menu-item>
    <el-menu-item index="2-2">
      <img src="" alt="">进制数据
      </el-menu-item>
    <el-menu-item index="2-3">
      <img src="" alt="">兼职招聘
      </el-menu-item>
    <el-menu-item index="2-3">
      <img src="" alt="">解决方案
      </el-menu-item>
  </el-submenu>
   <el-menu-item index="4">
  <div class="sousuokuang">
  <el-input v-model="wprld" placeholder="请输入内容" class="sousuokuang1"></el-input>
  </div>
  </el-menu-item>
  <el-menu-item index="">
  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid" class="touxiangsss"></el-avatar>
    </div>
    
  </div>
  </el-menu-item>
</el-menu>
  </el-header>
</el-container>
    </div>
</template>
<script>
export default {
  data(){
      return {
        activeIndex: '1',
        activeIndex2: '1',
         restaurants: [],
        state: '',
        wprld:''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
  .toubu {
    background-color: rgb(84, 92, 100);
    color: #333;
    line-height: 60px;
    padding:0px 0px;
  }
  .el-menu-demo{
    width: 70%;
    margin: auto;
  }
  .topnav{
    position: relative;
  }
  .sousuokuang{
    width: 234px;
    height: 34.6px;
    /* border: 1px solid black; */
  }
  .el-menu-item [class^=el-icon-]{
    margin-top: -4px;
    margin-right: 0px;
    font-size: 22px;
  }
</style>