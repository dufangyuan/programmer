<template>
  <div>
    <top></top>
    <el-main style="height:1550px;">
        <div class="inn-work">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <!-- <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>-->
        <!-- <el-radio-button label="left">left</el-radio-button> -->
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="我的工作">
            <!-- 中间导航 -->
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label">
                <!-- <i class="el-icon-date"></i> -->待办任务 
              </span>
              待办任务
            </el-tab-pane>
            <el-tab-pane label="消息中心">平台项目</el-tab-pane>
            <el-tab-pane label="角色管理">雇佣项目 (0)</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
      </div>
    </el-main>
    <bottom></bottom>
  </div>
</template>

<script>
// import top from "../../components/top";
// import bottom from "../../components/bottom";
export default {
  // components: {
  //   top,
  //   bottom
  // },
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>

<style>
.el-main {
  background-color: #fff;
  color: #333;
  /* text-align: center;
    line-height: 160px; */
}
.inn-work{
    width: 1000px;
    height: 830px;
    border: 1px solid black;
    margin: auto;
}
</style>