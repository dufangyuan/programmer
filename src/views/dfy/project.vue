<template>
    <div class="box">
        <div class="centern">
                <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title">我的工作</template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">主页管理</template>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">技术信用</template>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title">协作群组</template>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">资金账户</template>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">信息设置</template>
      </el-submenu>
       <el-submenu index="7">
        <template slot="title">API交易平台</template>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">代码托管</template>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">其他</template>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
            </div>
    </div>
</template>
<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
<style scoped>
     .centern{
         width:1000px;
         overflow:hidden;
         border:1px solid red;
         margin:100px auto;
     }
     .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>