<template>
<div class="box">
   <div class="xiangqing">
       <h2>完善个人简历后，才能申请签约开发者进行接单</h2>
       <hr height="5px" width="900px">
       <div class="XQ">
       <p>成为程序员客栈签约开发者后，才能在平台接单，包括平台派单类项目、雇佣项目等，并享受交易担保等服务。</p>
       <p>申请签约需要满足以下条件：</p>
       <p>1.三年及以上正规互联网工作经验</p>
       <p>2.按签约规则如实填写个人简历</p>
       <p>3.具有契约精神、服务意识，能按约定高效完成开发</p>
       <p>4.不在程序员客栈黑名单（无开发黑历史）</p>
       </div>
   </div>
   <div class="SMRZ">
       <p>实名认证</p>
       <a href="">去认证</a>
   </div>
   <div class="JBmessage">
   <div class="JB_top">
       <p>基本信息</p>
       <el-button type="info">取消</el-button>
       <el-button type="primary">保存</el-button>
   </div>
   <hr height="5px" width="1000px">
   <div class="JB_bottom">
       <el-form ref="wanshanform" :model="wanshanform" :rules="loginrules" label-width="80px">
       <el-form-item label="用户名" prop="username">
       <el-input value="liangyong" v-model="input" clearable></el-input>
       </el-form-item>
       </el-form>
    </div>
   </div>
</div>
</template>
<script>
export default {
    data() {
        return{
            input: ''
        };
    }
}
</script>
<style scoped>
     .box{
         width:1000px;
         overflow: hidden;
         border:1px solid #f5f5f5;
         margin:100px auto;
     }
     .xiangqing{
         width:1000px;
         height:260px;
         text-align: center;
     }
     .xiangqing h2{
         font-weight:400;
         margin:20px auto;
     }
     hr{
         margin: auto;
         color: #f5f5f5;
         border:1px solid #f5f5f5;
     }
     .xiangqing p{
         text-align: left;
         font-size:14px;
         margin:10px 50px;
     }
     .XQ{
         width:1000px;
         margin-top:20px;
     }
     .SMRZ{
         width:1000px;
         height:40px;
         margin-top:10px;
         border:1px solid #f5f5f5;
     }
     .SMRZ p{
         font-size:16px;   
         margin-left:50px;
         line-height:40px;
         float: left;
    }
    .SMRZ a{
        text-decoration: none;
        float: right;
        line-height: 40px;
        color:#409EFF;
        font-size:14px;
        margin-right:50px;
    }  
    .JB_top{
        width:1000px;
        height:50px;
    } 
    .JB_top p{
       float: left;
       margin-left:50px;
       line-height: 50px;
    }
    .el-button{
        float:right;
        margin-right:50px;
        text-align: center;
        margin-top:5px;
    }
    .el-input{
        width:200px;

    }
</style>