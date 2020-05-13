<template>
  <div>
    <top></top>
    <el-main style="height:3550px;">
      <el-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="imgArr[item-1]" style="width:100%; height:550px;"/>
        </el-carousel-item>
        <div class="topcontent">
          <div class="top-motto-content">
            <p>互联网软件外包服务平台</p>
          </div>
          <div class="sub-motto-content">
            <p>提供您所需的全套软件开发服务</p>
          </div>
          <div class="btn-list">
            <el-button type="text" @click="jmp" class="start-button">发布您的需求</el-button>
            <el-button type="text" @click="mup" class="start-button1">查看项目列表</el-button>
          </div>
        </div>
      </el-carousel>
      <!-- 最大框 -->
      <div class="home-box">
        <!-- 开发服务框 -->
        <div class="title-box">
          开发服务方案
          <i></i>
        </div>
        <!-- 第一个大框 -->
        <div class="body-box">
          <!-- 需求梳理框 -->
          <div class="wraper">
            <div class="first">
              <img src="../../assets/one1.png" class="one1" />
              <!-- <img src="../../assets/two.png"  class="one2" /> -->
              <p class="first-name">需求梳理</p>
            </div>
            <div class="secd">
              产品需求规划，是软件项目成功的关键，
              <br />帮助您把产品想法更好地落地。
            </div>
            <div class="third">
              <div class="third-item">
                <span>
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />
                  <span class="keyword">严选资深</span>产品专家 更懂用户的需求
                </span>
                <span>
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />标准产品文档
                  <span class="keyword">节约40%</span>开发成本
                </span>
                <span>
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />免费提供开发工期、报价评估服务
                </span>
              </div>
            </div>
            <div class="forth">
              <div class="forth-txt">
                <el-button type="text" @click="num" class="forth-txts">了解详情</el-button>
              </div>
            </div>
          </div>
          <!-- 整包项目框 -->
          <div class="wraper">
            <div class="first1">
              <img src="../../assets/one2.png" class="one1" />
              <!-- <img src="../../assets/three.png"  class="one2" /> -->
              <p class="first-name">项目整包</p>
            </div>
            <div class="secd">
              一站式软件开发服务，智能匹配优质开发者，
              <br />五星级的过程体验和交付质量。
            </div>
            <div class="third">
              <div class="third-item">
                <span>
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />专属项目经理
                  <span class="keyword">全程跟进</span>轻松高效
                </span>
                <span>
                  <br />
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />标准化开发流程 可视化在线监管
                </span>
                <span>
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />按阶段付款 平台
                  <span class="keyword">托管担保</span>
                </span>
              </div>
            </div>
            <div class="forth">
              <div class="forth-txt">
                <el-button type="text" @click="num" class="forth-txts">了解详情</el-button>
              </div>
            </div>
          </div>
          <!-- 云端工作框 -->
          <div class="wraper">
            <div class="first2">
              <img src="../../assets/four.png" class="one1" />
              <!-- <img src="../../assets/four1.png"  class="one2" /> -->
              <p class="first-name">项目整包</p>
            </div>
            <div class="secd">
              按月聘用程序员，最快一天到岗，
              <br />节省55%的人力成本
            </div>
            <div class="third">
              <div class="third-item">
                <span>
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />优选
                  <span class="keyword">5年+经验</span>的资深开发者
                </span>
                <span>
                  <br />
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />可选
                  <span class="keyword">全职兼职</span>
                </span>
                <span>
                  <br />
                  <img :src="op2" class style="width:20px; height:20px; margin-right:10px;" />每天提交日报，进度可控
                </span>
              </div>
            </div>
            <div class="forth">
              <div class="forth-txt">
                <el-button type="text" @click="num" class="forth-txts">了解详情</el-button>
              </div>
            </div>
          </div>
        </div>
        <!-- 第二个大框 -->
        <div class="home1-box">
          <!-- 内容框 -->
          <div class="box-ly">
            <!-- 开通会员，享用更多特权框 -->
            <div class="box-hd">
              开通会员，享用更多特权
              <i></i>
            </div>
            <!-- 企业会员框 -->
            <div class="vip-infos-index">
              <div class="vip-title">
                <img src="../../assets/qiye.png" class="two" />
              </div>
              <div class="vip-line"></div>
              <div class="vip-come-text1">
                <div class="vip-come-text2">
                  <img src="../../assets/guan.png" alt class="qw" />
                </div>
                <div class="vip-come-text3">需求优先</div>
              </div>
              <div class="vip-come-text4">
                <div class="vip-come-text5">
                  <img src="../../assets/bang.png" alt class="qwe" />
                </div>
                <div class="vip-come-text6">最优技术人力解决方案</div>
              </div>
              <div class="vip-more">
                <div class="vip-more1">
                  <el-button type="text" @click="num" class="vip-more2">了解详情</el-button>
                </div>
              </div>
            </div>
          <!-- 开发者会员 -->
          <div class="vip-infos-index1">
              <div class="vip-title">
                <img src="../../assets/kaifazhe.png" class="two" />
              </div>
              <div class="vip-line"></div>
              <div class="vip-come-text1">
                <div class="vip-come-text2">
                  <img src="../../assets/huojian.png" alt class="qw" />
                </div>
                <div class="vip-come-text3">极速接单</div>
              </div>
              <div class="vip-come-text9">
               
                <div class="vip-come-text7">
                  <div class="vip-come-text8">
                  <img src="../../assets/mu.png" alt class="qwe" />
                </div>
                  更多接单机会
                  </div>
              </div>
              <div class="vip-more3">
                <div class="vip-more1">
                  <el-button type="text" @click="num" class="vip-more2">了解详情</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rating">
             <div class="box-title">
               最新精选评价
                <i></i>
             </div>
             <div class=""></div>
        </div>
      </div>
    </el-main>
    <bottom></bottom>
  </div>
</template>
<script></script>

<script>
// import top from "../../components/top";
// import bottom from "../../components/bottom";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      op2: require("../../assets/duigou.svg"),
      imgArr:[
             require("../../assets/lunbo.png"),
      ]
    };
  },
  methods: {
    jmp() {
      this.$router.push("");
    },
    mup() {
      this.$router.push("");
    },
    num() {
      this.$router.push("");
    }
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
.el-carousel {
  width: 100%;
  height: 550px;
  border: 1px solid black;
}
.el-carousel__item {
  width: 100%;
  height: 550px;
}
.el-carousel__arrow--left {
  width: 60px;
  height: 60px;
}
.el-carousel__arrow--right {
  width: 60px;
  height: 60px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.topcontent {
  width: 1000px;
  height: 300px;
  /* border: 1px solid red;  */
  position: relative;
  z-index: 10;
  top: 200px;
  left: 16%;
}
.top-motto-content {
  width: 1000px;
  height: 60px;
  /* border: 1px solid red;  */
}
.top-motto-content p {
  text-align: center;
  line-height: 60px;
  font-size: 2.5rem;
  color: #fff;
}
.sub-motto-content {
  width: 1000px;
  height: 30px;
  /* border: 1px solid red;  */
  margin-top: 20px;
}
.sub-motto-content p {
  line-height: 30px;
  text-align: center;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 200;
}
.btn-list {
  width: 450px;
  height: 110px;
  /* border: 1px solid red;  */
  margin: auto;
}
.btn-list .start-button {
  width: 200px;
  height: 50px;
  /* border: 1px solid black; */
  text-align: center;
  background-color: #4187db;
  color: #fff;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  float: left;
  margin-top: 50px;
  line-height: 30px;
}
.btn-list .start-button1 {
  width: 200px;
  height: 50px;
  border: 1px solid #ffffff;
  text-align: center;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  margin-top: 50px;
  line-height: 30px;
  float: right;
}
.btn-list .start-button:hover {
  background: #fff;
  color: #4289db;
}
.btn-list .start-button1:hover {
  background: #fff;
  color: #4289db;
}
.home-box {
  width: 100%;
  height: 738px;
  border: 1px solid black;
}
.title-box {
  position: relative;
  width: 1000px;
  height: 50px;
  border: 1px solid black;
  margin: 40px auto;
  font-size: 32px;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 25px;
}
.title-box i {
  position: absolute;
  width: 44px;
  height: 3px;
  background-color: #44a0ff;
  bottom: 0;
  left: 48%;
}
.body-box {
  width: 1000px;
  height: 600px;
  border: 1px solid black;
  margin: auto;
}
.service-item {
  width: 333px;
  height: 500px;
  border: 1px solid black;
  font-family: PingFangSC-Regular;
  text-align: center;
  float: left;
}
.wraper {
  width: 310px;
  height: 500px;
  background: #ffffff;
  border: 1px solid #ebeff5;
  box-shadow: 0 4px 14px 0 rgba(239, 243, 248, 0.84);
  float: left;
  margin-left: 20px;
}
.first {
  background-size: 100%;
  background-repeat: no-repeat;
  width: 308px;
  height: 194px;
  margin: 0 auto;
  text-align: center;
  /* border: 1px solid black; */
  background-image: url("../../assets/two.png");
}
.first1 {
  background-size: 100%;
  background-repeat: no-repeat;
  width: 308px;
  height: 194px;
  margin: 0 auto;
  text-align: center;
  /* border: 1px solid black; */
  background-image: url("../../assets/three.png");
}
.first1 .one1 {
  width: 55px;
  height: 55px;
  /* border: 1px solid black; */
  background-position: 0px, 0px;
  position: relative;
  z-index: 10;
  margin-top: 49px;
}
.first2 {
  background-size: 100%;
  background-repeat: no-repeat;
  width: 308px;
  height: 194px;
  margin: 0 auto;
  text-align: center;
  /* border: 1px solid black; */
  background-image: url("../../assets/four1.png");
}
.first2 .one1 {
  width: 55px;
  height: 55px;
  /* border: 1px solid black; */
  background-position: 0px, 0px;
  position: relative;
  z-index: 10;
  margin-top: 49px;
}
.first .one1 {
  width: 55px;
  height: 55px;
  /* border: 1px solid black; */
  background-position: 0px, 0px;
  position: relative;
  z-index: 10;
  margin-top: 49px;
}
.first .one2 {
  width: 308px;
  height: 194px;
  background-repeat: no-repeat;
  margin: 0 -182px;
  position: absolute;
  z-index: 0;
}
.first-name {
  width: 308px;
  height: 28.8px;
  /* border: 1px solid black; */
  position: relative;
  z-index: 10;
  margin-top: 20px;
  font-family: PingFangSC-Semibold;
  line-height: 29px;
  color: #ffffff;
  font-size: 21px;
}
.secd {
  width: 308px;
  /* height: 35px;  */
  /* border: 1px solid black; */
  font-size: 14px;
  color: #1d2a3a;
  text-align: left;
  line-height: 25px;
  margin: 40px auto auto 28px;
}
.third {
  width: 246px;
  margin: 22px auto auto auto;
}
.third-item {
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #858e9b;
  letter-spacing: 0;
  line-height: 30px;
}
.third-item .keyword {
  font-weight: 800;
}
.forth {
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  width: 150px;
  height: 40px;
  margin: 28px auto 29px auto;
  /* line-height: 30px; */
  /* border: 1px solid black; */
}
.forth-txt {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #465364;
  letter-spacing: 0;
  width: 56px;
  height: 20px;
  margin: 10px auto;
  /* border: 1px solid black; */
}
.forth-txts {
  line-height: 0px;
}
/* .wraper:hover{
  border: #308EFF;
} */
.wraper:hover .first {
  background: #308eff;
}
.wraper:hover .first1 {
  background: #308eff;
}
.wraper:hover .first2 {
  background: #308eff;
}
.wraper:hover .keyword {
  color: #e1a83f;
}
.wraper:hover .forth-txts {
  background: #308eff;
  color: #fff;
}
.wraper:hover .forth {
  background: #308eff;
}
.wraper:hover {
  border: 3px solid #308eff;
}
.home1-box {
  width: 100%;
  height: 700px;
  border: 1px solid black;
}
.home1-box .box-ly {
  width: 1000px;
  height: 600px;
  border: 1px solid black;
  margin: auto;
}
.box-hd {
  position: relative;
  width: 1000px;
  height: 50px;
  /* border: 1px solid black; */
  margin: 40px auto;
  font-size: 32px;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 25px;
}
.box-hd i {
  position: absolute;
  width: 44px;
  height: 3px;
  background-color: #44a0ff;
  bottom: 0;
  left: 48%;
}
.vip-infos {
  width: 1000px;
  height: 500px;
  border: 1px solid black;
}
.vip-infos-index {
  width: 414px;
  height: 440px;
  border: 1px solid #44a0ff;
  border-radius: 10px;
  float: left;
  margin-left: 66px;
  background-color:#F0F8FF; 
}
.vip-title {
  width: 143px;
  height: 113px;
  /* border: 1px solid #44a0ff; */
  margin: 30px auto;
}
.vip-title .two {
  width: 143px;
  height: 113px;
}
.vip-line {
  width: 344px;
  height: 1px;
  /* border: 1px solid #eee; */
  margin: 41px 32px 24px;
  background: #eee;
}
.vip-come-text1 {
  width: 126px;
  height: 31.6px;
  /* border: 1px solid black; */
  margin: 20px auto;
}
.vip-come-text2 {
  width: 30px;
  height: 31.6px;
  /* border: 1px solid black; */
  float: left;
}
.vip-come-text3 {
  width: 78px;
  height: 31.6px;
  /* border: 1px solid black; */
  float: left;
  line-height: 31.6px;
  font-size: 18px;
  color: #222222;
  font-weight: bold;
}
.vip-come-text1 .qw {
  width: 22px;
  height: 22px;
  margin: 5px 0 0 0;
}
.vip-come-text4 {
  width: 220px;
  height: 31.6px;
  /* border: 1px solid black; */
  margin: 30px auto;
}
.vip-come-text5 {
  width: 30px;
  height: 31.6px;
  /* border: 1px solid black; */
  float: left;
}
.vip-come-text5 .qwe {
  width: 25px;
  height: 25px;
  margin: 5px 0 0 0;
}
.vip-come-text6 {
  width: 180px;
  height: 31.6px;
  /* border: 1px solid black; */
  float: left;
  line-height: 31.6px;
  font-size: 18px;
  color: #222222;
  font-weight: bold;
}
.vip-more {
  width: 190px;
  height: 42px;
  border-radius: 21px;
  background: #1994ff;
  color: white;
  margin: auto;
}
.vip-more1 {
  width: 60px;
  height: 28px;
  /* border: 1px solid black; */
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  margin: 40px auto;
  line-height: 30px;
  margin-left: 66px;
}
.vip-more2 {
  color: #fff;
  line-height: 19px;
}
.vip-infos-index1 {
  width: 414px;
  height: 440px;
  border: 1px solid #E1A83F;
  border-radius: 10px;
  float: left;
  margin-left: 40px;
  background-color:#FFFBF4;
}
.vip-come-text7 {
  width: 200px;
  height: 31.6px;
  /* border: 1px solid black; */
  float: left;
  line-height: 31.6px;
  text-align: center;
  font-size: 18px;
  color: #222222;
  font-weight: bold;
}
.vip-come-text8{
  width: 30px;
  height: 31.6px;
  /* border: 1px solid black; */
  float: left;
  margin-left: 59px;
}
.vip-come-text8 .qwe {
  width: 25px;
  height: 25px;
  margin: 5px 0 0 0;
}
.vip-more3{
   width: 190px;
  height: 42px;
  border-radius: 21px;
  background: #E1A83F;
  color: white;
  margin: auto;
}
.vip-come-text9 {
  width: 220px;
  height: 31.6px;
  /* border: 1px solid black; */
  margin: 30px auto;
  margin-left:66px;
}
.rating{
    width: 100%;
    height: 564px;
    background: rgba(250,250,250,1);
    border: 1px solid black;
}
.box-title{
position: relative;
  width: 1000px;
  height: 50px;
  border: 1px solid black;
  margin: 40px auto;
  font-size: 32px;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 25px;
}
.box-title i {
  position: absolute;
  width: 44px;
  height: 3px;
  background-color: #44a0ff;
  bottom: 0;
  left: 48%;
}
</style>