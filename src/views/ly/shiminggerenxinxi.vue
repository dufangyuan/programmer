<template>
    <div>
       <div class="setting-main">
          <div class="ui-form">
            <img src="../../assets/yonghu1.svg" alt="" style="width:20px; height:20px;">
            <h4>实名个人信息</h4>
            <p class="inline-left">
                身份证正反面
            </p>
             <p class="inline-right">
                身份证反面
            </p>
            
          <el-upload action :http-request="fileuploadzm" class="zzm">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-upload
            action :http-request="fileuploadfm" class="ffm">
            <i class="el-icon-plus"></i>
          </el-upload>
 <div class="inline-filed">
    <el-form ref="formaas" :model="formaas" :rules="rules" label-width="80px">
            <el-form-item label="身份证号" prop="card">
                 <el-input v-model="formaas.card"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="name">
                 <el-input v-model="formaas.name"></el-input>
            </el-form-item>
  <el-button type="primary" @click="Submit" class="tijiao">提交</el-button>

  </el-form>
</div>
          </div>
       </div>
    </div>
</template>

<script>
     export default {
    data() {
      return {
          formaas: {
            card:'',
            name:''
          },
        filelistzm:{},
        filelistfm:{},
        rules: {
          card: [
            { required: true, message: '请输入证件号', trigger: 'blur' },
            { min:18,max:18, message: '长度在 18 到 18 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      fileuploadzm(zm){
        console.log(zm);
        this.filelistzm=zm.file
      },
      fileuploadfm(fm){
        console.log(fm);
        this.filelistfm=fm.file
      }, 
      Submit(){
        console.log(11)
          let fromData=new FormData();
           fromData.append('idCardFront',this.filelistzm)
           fromData.append('idCardOpposite',this.filelistfm)
           fromData.append('idNumber',this.formaas.card)
           fromData.append('realName',this.formaas.name)
          this.$axios.post('/wb/realName/verify',fromData).then(res=>{
                   console.log(res);
          })
       },
    }
  }
</script>

<style>
.setting-main{
    width: 830px;
    height: 600px;
    /* border: 1px solid black; */
    margin:auto;
}
.ui-form{
width:768px;
height: 600px;
/* border: 1px solid black; */
margin:30px auto;
}
.ui-form img{
    float: left;
}
.ui-form h4{
    margin-left: 10px;
    float: left;
}
.el-upload--picture-card{
  float: left;
  margin-top: 30px;
  /* position: absolute;
  left: 30px;
  top: 70px; */
  margin-left: 20px;
  
}
.ui-form .inline-left{
      width:100px;
      height: 20px;
      /* border: 1px solid black; */
      
      line-height: 20px;
      position: absolute;
      top: 93px;
      left: 63px;
  }
  .ui-form .inline-right{
      width:100px;
      height: 20px;
      /* border: 1px solid black; */
       margin-top: -22px;
      margin-left:170px; 
      /* padding: 10px; */
  }
  .inline-filed{
      width: 300px;
      height:245px;
      margin-top: 40px;
      /* border: 1px solid black; */
      /* float: left; */
  }
  .tijiao{
    margin-top:27px;
    margin-left: 50px;
  }
  .zzm{
    width:150px;
    height: 150px;
    border: 1px solid black;
    float: left;
    margin: 10px;
  }
  .ffm{
     width:150px;
    height: 150px;
    border: 1px solid black;
    margin: 10px;
    float: left;
  }
  
</style>