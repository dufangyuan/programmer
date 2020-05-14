<template>
    <div class="maxbox">
        <div class="box">
            <div class="classification">
                <ul>
                    <li>全部</li>
                    <li v-for="(item,index) in demandtype" :key="index" @click="getcs(item.item)">{{item.item}}</li>
                </ul>
            </div>
            <div class="square">需求广场</div>
            <div class="minbox">
                <div class="no">
                    <div class="every">

                    </div>
                </div>
                <!-- <el-pagination  background layout="prev, pager, next" :total="100" class="fenye"></el-pagination> -->
                 <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pagesize"
                    layout="total, prev, pager, next"
                    :total="totalpage">
                </el-pagination>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentPage:1,
                pagesize:8,
                totalpage:0,
                typelx:'',
                demandtype:[
                    {item:'Android',index:1},
                    {item:'iOS',index:2},
                    {item:'网页',index:3},
                    ],
                
            }
        },
        mounted(){
            this.getdata();
        },
        methods:{
            getcs(aa){
                console.log(aa)
                this.typelx=aa;
                this.getdata()
            },
            getdata(){
                let canshu={
                    demandType:this.typelx,
                }
                this.$axios.get('/wb/demand/demands',{
                    params:{
                        currentPage:this.currentPage,
                        pageSize:this.pagesize,
                        queryConditions:canshu,
                    }
                }).then(res=>{
                    console.log(res);
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
    height: 900px;
    margin: 5px auto;
    background-color:white;
    overflow: hidden;
}
.every{
    width: 230px;
    height: 280px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 5px;
}
/* 移入小框 */
.every:hover{
    background-color: #fafaff;
    transform: translate3d(0,-4px,0);
}
/* 分页 */
.minbox .el-pagination{
    text-align: center;
}
</style>