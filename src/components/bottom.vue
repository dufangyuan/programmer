<template>
    <div>
<el-container>
  <el-footer style="height:320px;">
      <div class="last">
           <a href="" class="logos"></a>
           <div class="container">
            <h5>
                重点城市程序员兼职推荐
            </h5>
            <ul class="chengshi">
                <li> <a href="">北京程序员兼职</a></li>
                <li> <a href="">上海程序员兼职</a></li>
                <li> <a href="">深圳程序员兼职</a></li>
                <li> <a href="">广州程序员兼职</a></li>
                <li> <a href="">杭州程序员兼职</a></li>
                <li> <a href="">成都程序员兼职</a></li>
                <li> <a href="">武汉程序员兼职</a></li>
                <li><a href="">更多</a></li>
            </ul>
           </div>
           <div class="container1">
            <h5>
                重点岗位程序员兼职推荐
            </h5>
            <ul class="zhiye">
                <li><a href="">java兼职</a></li>
                <li><a href="">c++兼职</a></li>
                <li><a href="">php兼职</a></li>
                <li><a href="">C兼职</a></li>
                <li><a href="">C#兼职</a></li>
                <li><a href="">前端兼职</a></li>
                <li><a href="">python兼职</a></li>
                <li><a href="">Ruby兼职</a></li>
                <li><a href="">Node.js兼职</a></li>
                <li><a href="">ios兼职</a></li>
                <li><a href="">更多</a></li>
            </ul>
           </div>
      </div>
      <div class="final">
          <ul class="final1">
              <li>
                APP下载
              </li>
              <li>
                帮助
              </li>
              <li>
               关于我们
              </li>
              <li>
                合作伙伴
              </li>
              <li>
                意见反馈
              </li>
              <li>
                远程工作
              </li>
          </ul>
      </div>
  </el-footer>
</el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
.el-footer {
    background-color: #fff;
    color: #333;
     text-align: center;
     line-height: 60px; 
  }
  .last{
      width: 70%;
      height: 250px;
      border: 1px solid black;
      border-bottom: 1px solid #eee;;
      margin: auto;
  }
  .container{
      width: 80%;
      height: 125px;
      border: 1px solid black;
       margin:auto;
    /* float: right; */
  }
  .container h5{
      float: left;
  }
  .container1{
      width: 80%;
      height: 122px;
      border: 1px solid black;
       margin:auto;
      /* float: right; */
  }
  .container1 h5{
       float: left;
  }
  .chengshi{
       width: 100%;
       height: 61px;
       border: 1px solid black;
       margin-top:63px;
       
  }
   .chengshi li{
      width: 90px;
       height: 61px;
       /* border: 1px solid black; */
       float: left;
       font-size: 12px;
       list-style: none;
       margin-left:0px;
  }
  .chengshi a{
      text-decoration: none;
      color: #4a4a4a;
  }
  .geng{
      width: 50px;
      height: 61px;
       /* border: 1px solid black; */
       float: right;
  }
  .geng a{
      font-size: 12px;
  }
  .zhiye{
       width: 100%;
       height: 61px;
       /* border: 1px solid black; */
       margin-top:60px;
  }
  .zhiye li{
      width: 69px;
       height: 61px;
       /* border: 1px solid black; */
       float: left;
       font-size: 12px;
       list-style: none;
       margin-left:0px;
  }
   .zhiye a{
      text-decoration: none;
      color: #4a4a4a;
  }
  .final{
      width: 70%;
      height: 60px;
      /* border-top: 1px solid #eee; */
      margin: auto;
  }
  .final1 {
      width: 700px;
      height: 60px;
      /* border: 1px solid black; */
       color:#4a4a4a;
       margin: auto;
  }
  .final1 li{
      width: 100px;
      height: 59px;
      /* border: 1px solid black; */
       float:left;
      list-style: none;
      font-size: 12px;
      color:#4a4a4a;
  } 
</style>