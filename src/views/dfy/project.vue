<template>
  <div class="box">
    <div class="contern_left">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="2">
              <span slot="title">我的工作</span>
            </el-menu-item>
            <el-menu-item index="1">
              <span slot="title">主页管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">技术信用</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">协作群组</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">资金账户</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title">信息设置</span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title">API交易平台</span>
            </el-menu-item>
            <el-menu-item index="8">
              <span slot="title">代码托管GitInn</span>
            </el-menu-item>
            <el-menu-item index="9">
              <span slot="title">其他</span>
            </el-menu-item>
            <el-button type="primary" round>主要按钮</el-button>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="contern_right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">代办任务(0)</el-menu-item>
        <el-menu-item index="2">
          <template slot="title">平台项目(0)</template>
        </el-menu-item>
        <el-menu-item index="3">雇佣项目(0)</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">云端工作(0)</a>
        </el-menu-item>
      </el-menu>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      ></el-menu>
      <img src="../../assets/project/wenhao.jpg" alt="您暂且未签约" class="wenhao">
      <p>您目前还未签约，无法享受平台项目推行送，<a href="wanshan">成为签约开发者</a></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  handleSelect(key, keyPath) {
    console.log(key, keyPath);
  }
  }
};
</script>
<style scoped>
.box {
  margin-top: 100px;
  margin-left: 250px;
}
.el-menu-item {
  height: 40px;
  width: 150px;
  line-height: 40px;
}
.contern_left .tac .el-col-12{
width:100%;
}
.el-button {
  margin-left: 20px;
  margin-top: 10px;
}
.contern_left {
  width: 150px;
  height: 430px;
  text-align: center;
  float: left;
  border: 1px solid #f7f7f7;
}
.contern_right {
  width: 700px;
  height: 430px;
  border: 1px solid #f7f7f7;
  float: left;
  margin-left: 10px;
}
.wenhao{
    margin-top:30px;
    margin-left:270px;
}
.contern_right p{
    color: rgb(167, 161, 161);
    text-align: center;
}
.contern_right a{
    text-decoration: none;
    color: #409EFF;
}
</style>