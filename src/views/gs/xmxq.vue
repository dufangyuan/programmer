<template>
    <div class="box">
        <div class="dbox">
            <div class="xbox">
            <!-- 悬赏 -->
                <div class="jine">
                    <div class="xuanshang">
                            悬赏
                    </div>
                    <div class="qian">
                            ￥123
                    </div>
                    <div class="danbao">
                            诚信可靠，平台担保
                    </div>
                </div>
            <!-- 详情 -->
                <div>

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

                    </div>
                    <div v-if="step==1">
                    
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
                step:0,
                class1:"item itemactive",
                class2:"item",
            }
        },
        methods:{
            changecolor(n){
                this.step=n;
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
    overflow: hidden;
    background-color: #D1E9FE;
    margin: 20px auto;
    position: relative;
}
.xbox{
    width:1000px ;
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
</style>