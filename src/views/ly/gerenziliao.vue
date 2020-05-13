<template>
  <div>
    <top></top>
    <el-main style="height:1550px;">
        <div class="inn-work">
    <el-tabs :tab-position="tabPosition" style="height: 500px;">
    <el-tab-pane label="用户管理">
      <div class="navtop">
            <div :class="step==0  ? class1 : class2" @click="changecolor(0)">待办任务(0)</div>
            <div :class="step==1  ? class1 : class2" @click="changecolor(1)">平台项目 (0)</div>
            <div :class="step==2  ? class1 : class2" @click="changecolor(2)">雇佣项目 (0)</div>
            <div :class="step==3  ? class1 : class2" @click="changecolor(3)">云端工作 (0)</div>
            <div class="action">
              <el-button type="text" @click="zone" class="u-btn">成为签约开发者</el-button>
            </div>
        </div>
         <div class="navtop-box">
            <div v-if="step==0">
                <people>
                </people>
            </div>
            <div v-if="step==1">
                 <people1></people1>
            </div>
            <div v-if="step==2">
                <people2></people2>
            </div>
            <div v-if="step==3">
                <people3></people3>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="主页管理">
      <h2>主页管理</h2>
      <div class="contentarea">
       <el-button type="text" @click="ztwo" class="u-btn">
         <img src="../../assets/yonghu.png" alt="" style="width:255px; height:193px;" class="lefta">
         <p>创建我的程序员主页</p>
       </el-button>
       <el-button type="text" @click="zthree" class="u-btn">
         <img src="../../assets/qiyefang.png" alt="" style="width:255px; height:193px;" class="leftb">
         <p>创建我的程序员主页</p>
       </el-button>
      </div>
      
    </el-tab-pane>
    <el-tab-pane label="技术信用">
       <people4></people4>
    </el-tab-pane>
    <el-tab-pane label="协作群组"></el-tab-pane>
    <el-tab-pane label="资金账户"></el-tab-pane>
    <el-tab-pane label="信息设置">
       <div class="navtop">
            <div :class="step==0  ? class1 : class2" @click="changecolor(0)">个人资料</div>
            <div :class="step==1  ? class1 : class2" @click="changecolor(1)">工作设置</div>
            <div :class="step==2 ? class1 : class2" @click="changecolor(2)">实名个人信息</div>
            <div :class="step==3  ? class1 : class2" @click="changecolor(3)">修改密码</div>
            <!-- <div :class="step==4  ? class1 : class2" @click="changecolor(3)">修改头像</div>
            <div :class="step==5  ? class1 : class2" @click="changecolor(3)">绑定账户</div> -->
      </div>
      <div class="navtop-box">
            <div v-if="step==0">
                <people>
                </people>
            </div>
            <div v-if="step==1">
                 <people1></people1>
            </div>
            <div v-if="step==2">
                <people2></people2>
            </div>
            <div v-if="step==3">
                <people3></people3>
            </div>
            
        </div>
    </el-tab-pane>
    <el-tab-pane label="API交易平台"></el-tab-pane>
    <el-tab-pane label="代码托管"></el-tab-pane>
  </el-tabs>
         
      </div>
    </el-main>
  </div>
</template>

<script>
import people from "./perpleinfo";
import people1 from "./pintai";
import people2 from "./guyong";
import people3 from "./yunduan";
import people4 from "./jishuxinyong";
import top from "@/components/top";
export default {
  components: {
    top,
    people,
    people1,
    people2,
    people3,
    people4,
    },
  data() {
    return {
      step:0,
      class1:"item itemactive",
      class2:"item",
      tabPosition: "left"
    }
  },
  methods:{
            changecolor(n){
                this.step=n;
            },
      zone() {
      this.$router.push("");
    },
    ztwo() {
      this.$router.push("");
    },
    zthree() {
      this.$router.push("");
    },
        }
}
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
    height: 550px;
    /* border:1px solid black; */
    margin: auto;
}
.navtop{
    width: 800px;
    height: 30px;
    margin: 0px auto;
    /* border:1px solid black; */
}
.item{
    width: 100px;
    height: 30px;
    text-align: center;
    float: left;
    margin: 0 0px;
    /* border:1px solid black; */
    border-right: 1px solid black;
    line-height: 30px;
}
.itemactive{
    background: #409EFF;
    color: #333;
    float: left;
}
.el-tabs__nav-scroll{
  
  height: 500px;
  /* border: 1px solid black; */
}
.action{
  width: 100px;
    height: 20.2px;
    /* border:1px solid black; */
    float:right;
    background-color: #ffc420;
    line-height: 20.2px;
    margin-top:8px;
}
.u-btn{
   line-height: 0px;
   color: #fff;
}
.contentarea{
   width: 800px;
    height: 300px;
    /* border:1px solid black; */
    margin: auto;
}
.contentarea  .lefta{
  margin:23px 50px;
}
.contentarea  .leftb{
  margin:23px 0px;
}
</style>