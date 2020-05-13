<template>
  <div>
    <div class="todo">
        <ul class="quanbu">
          <li>全部</li>
          <li>开发中</li>
          <li>已完成</li>
          <el-dropdown size="small" split-button type="primary" class="xiaoxing">
          时间筛选
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>1个月内开发</el-dropdown-item>
            <el-dropdown-item>1-3个月开发</el-dropdown-item>
            <el-dropdown-item>3-6个月开发</el-dropdown-item>
            <el-dropdown-item>6个月以前开发</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </ul>
        
      <div class="empty">
        <img src="../../assets/tip.png" alt class="empty1" />
      </div>
      <p>
        您还未签约，
        <el-button type="text" @click="uio" class>成为签约开发者</el-button>，享受平台项目推送
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uio() {
      this.$router.push("");
    }
  }
};
</script>

<style >
.todo {
  width: 800px;
  height: 300px;
  /* border: 1px solid black; */
  margin: auto;
}
.empty {
  width: 80px;
  height: 80px;
  /* border: 1px solid black; */
  margin: 40px auto;
}
.todo p {
  width: 800px;
  height: 30px;
  /* border: 1px solid black; */
  margin: auto;
  font-size: 14px;
  text-align: center;
  color: #999;
}
.quanbu {
  width: 800px;
  height: 50px;
  /* border: 1px solid black; */
  background-color:#eee;
}
.quanbu li {
  width: 80px;
  height: 50px;
  /* border: 1px solid black; */
  float: left;
  list-style: none;
  line-height: 50px;
  text-align: center;
}
.xiaoxing{
  float: right;
  margin-top:10px;
}
</style>