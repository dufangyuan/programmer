<template>
    <div class="maxbox">
        <div class="box">
            <div class="classification">
                <ul>
                    <li v-for="(item,index) in demandtype" :key="index" @click="getcs(item.item)">{{item.item}}</li>
                </ul>
            </div>
            <div class="square">需求广场</div>
            <div class="minbox">
                <div class="no">
                    <div class="every" v-for="(item,index) in gs" :key='index' >
                        <div class="js">
                            <div class="two">
                                <div class="equal touxiang"><img :src=cfxs alt=""></div>
                                <span class="useemail">{{item.issueUser}}</span>  
                            </div>
                            <div class="equal">项目名称:<h3>{{item.demandName}}</h3></div>
                            <div class="equal">项目类型:<h5>{{item.demandType}}</h5></div>
                            <div class="equal xmjj">项目简介:<p class="jianjie">{{item.demandDetail}}</p></div>
                            <div class="equal">项目预算:<p>￥{{item.demandBudget}}</p></div>
                            <div class="ckxq" @click="getuseid(item.demandId)">
                                查看详情
                            </div>
                        </div>
                        
                    </div>
                </div>
                    <div class="fenye">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="pagesize"
                            layout="prev, pager, next, jumper"
                            :total="totalpage">
                        </el-pagination>
                    </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentPage:1,
                pagesize:15,
                totalpage:0,
                currentPage3: 1,
                typelx:'',
                id:'',
                cfxs:require('@/assets/erweima.png'),
                demandtype:[
                    {item:'全部',index:0},
                    {item:'Android',index:1},
                    {item:'iOS',index:2},
                    {item:'pc网站',index:3},
                    ],
                gs:''
            }
        },
        
        mounted(){
            this.getdata();
        },
        methods:{
            getcs(aa){

                if(aa=='全部'){
                    aa=''
                }
                this.typelx=aa;
                console.log(aa)
                this.getdata()
            },
            getuseid(id){
                // let ids=this.id
                // console.log(ids);
                
                this.$router.push("/xmxq?info="+id)

            },
            getdata(){
                let canshu={
                    demandType:this.typelx,
                }
                this.$axios.post('/wb/demand/demands',{
                        currentPage:this.currentPage,
                        pageSize:this.pagesize,
                        queryConditions:canshu,
                    
                }).then(res=>{
                    console.log(res);
                    this.gs=res.data.extend.page.records
                    console.log(this.gs);
                    this.id=this.gs.demandId;
                    
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                
            },
            handleCurrentChange(vals) {
                console.log(`当前页: ${vals}`);
            }
        },

    }
</script>

<style>
.maxbox{
    overflow: hidden;
}
.box{
    width: 100%;
    margin: 20px auto;
    overflow: hidden;
    /* background-color: #eff2f6; */

}
/* 广场 */
.box .square{
    /* background-color: #eff2f6; */
    color: red;
    font-size: 28px;
    text-align: center;
    line-height: 50px ;
    font-weight: bold;
    height: 50px;
    width: 100%;
    background-color: #eff2f6;
}
/* 分类 */
.classification{
    width: 1200px;
    height: 50px;
    /* background-color: red; */
    margin: 20px auto;
    overflow: hidden;
}
.classification ul{
    margin: 5px 0;
    height: 30px;
}
.classification ul li{
    list-style: none;
    float: left;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 0 10px;
    padding: 5px;
    border-radius:2px ;
}
.classification ul li:hover{
    background-color: #dcefff;
    cursor: pointer;
}
/* 发布广场 */
.minbox{
    width: 100%;
    margin: 0 auto;
    height: 1000px;
    overflow: hidden;
    background-color: #eff2f6;
}
/* 每个详情 */
.no{
    width: 1200px;
    /* height: 900px; */
    margin: 0px auto;
    background-color:white;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    flex-wrap:wrap ;
    padding: 20px 5px;
}
.every{
    width: 230px;
    /* height: 300px; */
    overflow: hidden;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin: 10px 4px;
}

/* 移入小框 */
.every:hover{
    background-color: #fafaff;
    transform: translate3d(0,-4px,0);
    border:1px solid rgba(119, 109, 109, 0.75);
}
.every:hover .equal h3{
    color: rgba(231, 58, 58,0.75);
}

/* 分页 */
.minbox .el-pagination{
    text-align: center;
}
/* 查看详情盒子 */
.js{
    width: 210px;
    height: 270px;
    margin: 5px 10px;
    position: relative;
}
.ckxq{
    width: 60px;
    height: 20px;
    border: 1px solid red;
    line-height: 20px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    border-radius: 5px;
    color: red;
}
.ckxq:hover{
    color: white;
    background-color: rgba(231, 58, 58,0.75);
    cursor: pointer;
}
.equal{
    margin-top: 10px;
}
.equal p{
    font-size: 14px;
    margin-top: 5px;
}
/* .equal h3{
    color: rgba(231, 58, 58,0.75);
} */
.xmjj{
    height: 65px;
}
.equal .jianjie{
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
/* 分页 */
.fenye{
    background: white;
    width: 1200px;
    margin: 0 auto;
    padding: 5px;
}
/* 发布者邮箱 */
.useemail{
    font-size: 14px;
}
.touxiang{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 5px;
}
.touxiang img{
    width: 100%;
    height: 100%;
}
.two{
    display: flex;
    justify-content: flex-start;
    height: 35px;
    line-height: 35px;

}
</style>