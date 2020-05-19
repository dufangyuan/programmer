<template>
    <div class="box">
        <div class="dbox" >
            <div class="xbox" >
                <!-- 悬赏 -->
                <div class="jine">
                    <div class="xuanshang">
                            悬赏
                    </div>
                    <div class="qian">
                        ￥{{xxzl.demandBudget}}
                            <!-- ￥{{item.demand_budget}} -->
                    </div>
                    <div class="danbao">
                            诚信可靠，平台担保
                    </div>
                </div>
            <!-- 详情 -->
                <div class="xqbox">
                    <div class="tx">
                        <h2 class="biao">{{xxzl.demandName}}</h2>
                        <span class="lei">{{xxzl.demandType}}</span>
                        <div class="jdt">
                            <p class="rwjd">任务进度:</p>
                            <el-steps :active="state">
                                <el-step title="任务发布" icon="el-icon-goods"></el-step>
                                <el-step title="任务进行中" icon="el-icon-refresh"></el-step>
                                <el-step title="任务结束" process-status="success" icon="el-icon-circle-check"></el-step>
                            </el-steps>
                        </div>
                    </div>
                    <div>
                        <!-- 一个红长方形 -->
                        <div>
                            <div class="titles">
                                <img :src="cfxs" alt="">
                                <span >参加要求</span>
                            </div>
                            <div class="cnx">
                                <div class="cn">
                                    <p>承诺：保证完成</p>
                                </div>
                                <div class="cn">
                                    <p>承诺：保证售后</p>
                                </div>
                                <div class="cn">
                                    <p>承诺：保证原创</p>
                                </div>
                            </div>
                        </div>
                        <!-- 一个红长方形 -->
                        <div>
                            <div class="titles">
                                <img :src="cfxs" alt="">
                                <span >任务需求</span>
                            </div>
                            <div class="rwxq">
                                <p>{{xxzl.demandDetail}}</p>
                            </div>
                        </div>
                        <!-- 一个红长方形 -->
                        <div>
                            <div class="titles">
                                <img :src="cfxs" alt="">
                                <span >任务附件</span>
                            </div>
                            <div class="rwfj">
                                <el-link class="xiazai" :href='xxzl.demandFile'>点击下载附件</el-link>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- 提示 -->
                <div class="tishi">
                    <p>温馨提示:</p>
                    <p>1、请勿轻信需要交钱（报名费、抵押金等）才能承接的任务，如遇到请第一时间联系客服。</p>
                    <p>2、雇主对您工作的满意度评价，关系着您收到的赏金数额。点击了解</p>
                    <p>收费需知：招标任务、雇佣任务收取平台服务费，普通威客10%，V客优享0%。</p>
                </div>
                
            </div>
            <!-- 右边 -->
            <div class="youbian">
                <div class="navtop">
                    <div :class="step==0  ? class1 : class2" @click="changecolor(0)">热门问题</div>
                    <div :class="step==1  ? class1 : class2" @click="changecolor(1)">热门答案</div>
                </div>
                <div>
                    <div v-if="step==0">
                        <ul class="uls" >
                            <li v-for="(item,index) in geci" :key="index" >
                                {{item.item}}
                            </li>
                        </ul>
                    </div>
                    <div v-if="step==1">
                        <ul class="uls">
                            <li v-for="(item,index) in geci2" :key="index" >{{item.item}}</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         components:{
            
        },
        data(){
            return {
                state:0,
                step:0,
                class1:"item itemactive",
                class2:"item",
                cfxs:require('@/assets/cfx.png'),
                xxzl:'',
                id:'',
                geci:[
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                    {item:'快乐池塘栽种了',index:1},
                ],
                geci2:[
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},
                    {item:'酷酷的眼神没有那只青蛙能比美',index:1},

                ]
            }
        },
        mounted(){
            this.getdate();
        },
        created(){
            console.log(this.$route);
            this.id=this.$route.query.info;
            console.log(this.id);
            
        },
        methods:{
            changecolor(n){
                this.step=n;
            },

            getdate(){
                this.axios.get('/wb/demand/demand/' + this.id
                ).then(res=>{
                    // console.log(res)
                    this.xxzl=res.data.extend.demand
                    this.state=this.xxzl.demandState+1;
                    console.log(this.xxzl);
                })
            }
        }
    }
</script>

<style >

.box{   
    width: 100%;
    overflow: hidden;
    background-color: #D1E9FE;
    overflow: hidden;
}
.dbox{
    width: 1200px;
    /* overflow: hidden; */
    background-color: #D1E9FE;
    margin: 20px auto;
    position: relative;
}
.xbox{
    width:1000px ;
    /* height: 1000px; */
    overflow: hidden;
    /* margin: 20px auto; */
    background-color: white;
}
/* 悬赏 */
.jine{
	width: 950px;
	height: 80px;
	/*background-color: red;*/
	margin: auto;
	margin-top: 20px;
	
}
.xuanshang{
	width: 100px;
	height: 50px;
	background-color: red;
	font-size: 18px;
	font-weight: bold;
	line-height: 50px;
	text-align: center;
	color: white;
	float: left;
}
.qian{
	width: 150px;
	height: 48px;
	line-height: 48px;
	text-align: center;
	background-color: white;
	font-weight: bold;
	font-size: 18px;
	float: left;
	border: 1px solid red;
	color: red;
}
.danbao{
	width: 130px;
	height: 30px;
	font-size: 12px;
	line-height: 30px;
	text-align: center;
	color: white;
	background-image: url(../../assets/duihuankuang.png);
	background-size: 100% 100%;
	float: left;
	margin: 20px 0 0 20px ;
}
/* 提示 */
.tishi {
    width: 1000px;
    height: 110px;
    overflow: hidden;
    background-color: #FFEA7F;
}

.tishi p {
    margin: 5px 33px;
    font-size: 14px;
}

/* 右边 */
.youbian{
	width: 180px;
	height: 470px;
	/*margin:0 10px;*/
	background-color: white;
	position: absolute;
	right: 10px;
	top: 0;
}
.navtop{
    width: 178px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    
    
    /* margin: 50px auto; */
}
.item{
    width: 90px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    float: left;
    box-shadow: 2px 2px 3px #cccccc;
    font-size: 14px;
    /* color: red; */
    /* margin: 0 20px; */
}
.itemactive{

    background: rgb(240, 45, 45);
    color: white;
    float: left;
    font-size: 14px;

}
/* 详情 */
.xqbox{
    width: 950px;
    overflow: hidden;
    margin: 0 auto;
}
.titles{
    height: 40px;
    margin: 10px 0; 
    display: flex;
    justify-content: flex-start;
}
.xqbox .titles span{
    font-weight: bold;
    font-size: 18px;
    line-height: 40px;
}
/* 承诺 */
.cn{
    width: 120px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #999999;
    color: #999999;
    /* float: left; */
    margin-left: 25px;
    text-align: center;
    /* margin: 5px 10px 5px 15px; */
}
.cn p:hover {
    border: 1px solid #1782D9;
    background-color: #1782D9;
    color: white;
}
.cnx{
    display: flex;
    justify-content: flex-start;
}
.rwxq{
    height: 80px;
}
.rwxq p{
    margin-left: 25px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
}
.rwfj{
    height: 80px;
}
/* 右边新闻 */
.uls li{
    list-style: none;
    margin-left: 5px;
    margin-top: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
}
/* 头像 */
.tx{
    width: 950px;
    height: 200px;
    /* background-color: red; */
    margin: 0 auto;
}

.biao{
    margin-left: 20px;
}
.lei{
    font-size: 14px;
    margin-left: 20px;
    color: #aaaaaa;
}
/* 进度条 */
.jdt{
    width: 500px;
    margin: 40px 0 10px 20px;
}
.rwjd{
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 18px;
}
/* 下载 */
.xiazai{
    margin-left: 25px;
}
</style>