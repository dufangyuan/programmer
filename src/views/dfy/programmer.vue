<template>
<div>
  <top></top>
  <div class="pro_box">
    <el-container>
      <el-header>
        <el-link type="primary">平台程序员兼职</el-link>
        <el-link target="_blank">
          <span>
            <el-link type="primary">418419</el-link>
          </span>位兼职程序员符合条件
        </el-link>
      </el-header>
      <el-main>
        <el-collapse accordion>
          <el-collapse-item title="角色">
            <ul>
              <li v-for="(item,index) in message" :key="index">
                <a class="info" v-for="(aa,index) in message[index].info" :key="index">{{aa}}</a>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item title="地点">
            <ul>
              <li v-for="(item,index) in messages" :key="index">
                <a class="info" v-for="(aa,index) in messages[index].info" :key="index">{{aa}}</a>
              </li>
            </ul>
          </el-collapse-item>
          <el-collapse-item title="行业">
            <ul>
              <li v-for="(item,index) in messagess" :key="index">
                <a class="info" v-for="(aa,index) in messagess[index].info" :key="index">{{aa}}</a>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </el-container>
    <el-container>
      <el-header>
        <p>首页>平台程序员兼职</p>
      </el-header>
      <el-main>
        <ul class="youxiu" v-for="(item,index) in cxyArr" :key="index">
          <li>
            <div class="demo-type">
              <el-avatar :size="60" :src="item.avater" @click="topForm('proTop')">
                <!-- <img :src="item.avater" /> -->
              </el-avatar>
            </div>
            <h3 class="infos" >{{item.prog_company}}</h3>
            <el-button
              type="info">{{item.zone}}</el-button>
            <el-button
              type="info">{{item.type}}</el-button>
            <el-button type="info">{{item.timelarge}}</el-button>
            <p class="skill">
                <b>技能:</b><span>{{item.tech}}</span>
            </p>
            <p class="work">
                <b>作品:</b> <span>{{item.work}}</span>
            </p>
            <p class="place">
                可工作地点：{{item.sc}}
            </p>
            <p class="time">
                可预约时间：{{item.time}}
            </p>
          </li>
        </ul>
      </el-main>
      
    </el-container>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
  </div>
</template>
<script>
import top from "@/components/top"
export default {
   components:{
    top,
    },
  data() {
    return {
      cxyArr: [
        // {
        //     avater:require('@/assets/hongqi.svg'),
        //     infos:"北京东方国信科技股份有限有司产品经理",
        //     zone:'深圳',
        //     type:'B2C',
        //     timelarge:'9年',
        //     tech:'产品设计',
        //     work:'运营商线上商城,B2C商城,本地生活服务平台',
        //     time:'周末09:30-17:30',
        //     sc:'远程'
        // },
        // {
        //     avater:require('@/assets/hongqi.svg'),
        //     infos:"北京东方国信科技股份有限有司产品经理",
        //     zone:'深圳',
        //     type:'B2C',
        //     timelarge:'6年',
        //     tech:'产品设计',
        //     work:'运营商线上商城,B2C商城,本地生活服务平台',
        //     time:'周末09:30-17:30',
        //     sc:'公司'
        // }
      ],
      message: [
        {
          info: [
            "产品经理","设计师","前端","移动端","小程序","游戏","后端","测试","DBA","运维","其他"
          ]
        }
      ],
      messages: [
        {
          info: [
            "北京","上海","深圳","杭州","广州","成都","武汉","南京","西安","重庆","厦门",
            "郑州","天津","济南", "苏州","合肥","福州","青岛","大连","沈阳","石家庄","珠海",
            "无锡","太原","南昌","哈尔滨","南宁","宁波","昆明","东莞","贵阳","美国","长春",
            "温州", "佛山", "常州","呼和浩特","兰州","乌鲁木齐","中山","汕头","海口","嘉兴",
            "洛阳"
          ]
        }
      ],
      messagess: [
        {
          info: [
            "电子商务","社交","人工智能","媒体门户","工具软件","消费生活","金融","医疗健康","企业服务",
            "数字教育","厦门","郑州","天津","济南","苏州","合肥","在线教育","其他"
          ]
        }
      ]
    };
  },
  mounted(){
    this.$axios.post("/kz/excellent").then(res=>{
      console.log(res.data.data.showExcellent);
    //   console.log(res);
    //   this.cxyArr=res.data.data.showExcellent
    // console.log(this.cxyArr)
    })
  },
};
</script>
<style scoped>
.el-header {
  border: 1px solid #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header .el-link:nth-child(1) {
  float: left;
}
.el-header .el-link:nth-child(2) {
  float: right;
}
.el-main {
  border: 1px solid #f5f5f5;
  color: #333;
  text-align: center;
  height: 160px;
  position: relative;
}
.el-container {
  margin: 50px auto;
  width: 1000px;
}
.el-header p {
  float: left;
  font-size: 14px;
}
.demo-type .el-avatar {
  /* float: left; */
  margin-top: 30px;
}
.el-main h3 {
  font-weight: 400;
  position: absolute;
  top: 20px;
  left: 120px;
}
.el-button {
  height: 25px;
  line-height: 3px;
  margin-left:10px;
}
ul a {
  width: 80px;
  height: 30px;
  float: left;
  cursor: pointer;
}
.skill {
  position: absolute;
  top: 50px;
  left: 120px;
  font-size: 14px;
}
.skill span {
  font-weight: bold;
}
.work {
  position: absolute;
  top: 80px;
  left: 120px;
  font-size: 14px;
}
.work span {
  font-weight: bold;
}
.place {
  position: absolute;
  top: 110px;
  left: 120px;
  font-size: 14px;
}
.time {
  position: absolute;
  top: 110px;
  left: 350px;
  font-size: 14px;
}
</style>