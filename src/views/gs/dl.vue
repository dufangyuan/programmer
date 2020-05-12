<template>
<div class="bgm">
    <div class="dl_box"> 
        <h2>请登录</h2>
        <div class="fuji">
        <el-form ref="dlform" :model="dlform" :rules="dlrules"  label-width="80px" hide-required-asterisk=false>

            <el-form-item label="邮箱:"  prop="email" >
               <el-input v-model="dlform.email"  clearable></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="mima" >
                <el-input v-model="dlform.mima" clearable show-password></el-input>
            </el-form-item>
                <!-- <el-button type="primary" size="medium"  @click="submitForm('dlform')">立即登录</el-button> -->
                <!-- <el-button type="success" size="medium" plain @click="submitForm('dlform')">立即注册</el-button> -->
               
        </el-form>
        </div>
         <div class="ljdl" @click="submitForm()">登录</div>
         <h4>没有账号？<el-button type="text" @click="gozhuce">去注册</el-button></h4>
    </div>
    </div>
</template>
<script>
export default {
  data() {
      var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$/.test(value)) {
        callback(new Error("邮箱格式不正确"));
      } else {
        this.axios.post('/wb/emailVerify',{
          email:this.dlform.email
        }).then(res=>{
          console.log(res);
          var codees=res.data.code
          if(codees===400){
            this.$message.error('该邮箱未注册')
            callback(new Error("该邮箱未注册"));
          } else {
            callback();
          }
        })
      }
    };
    return {
      dlform: {
          email:'',
          mima:''
      },
      dlrules:{
        email: [{ validator: validateEmail, trigger: "blur" }],
        mima:[
            {required: true, message:"请输入密码",trigger:'blur'},
            {min:8,max:16,message:'密码长度在8 到 16个字符之间',trigger: 'blur'}
        
        ]
          
      },
    }
    
  },
  methods:{
     gozhuce(){
         this.$router.push('/zhuce')
     },
     submitForm(){
         var formdata=new FormData()
         this.axios.post('/wb/login',{
            email: this.dlform.email,
            password: this.dlform.mima,
         }).then(res=>{
             console.log(res)
             var codes=res.data.code
             if(codes===200){
                this.$message({
                message: '登陆成功',
                type: 'success'
                });
             }else{
                 alert('账号或密码输入错误')
             }
         })
     },

  },

}
</script>

<style>
.dl_box .fuji .el-form-item__label{
    color:white;
    font-size: 18px;
}
.dl_box{
    width: 500px;
    height: 300px;
    margin: 100px auto;
    border: 1px solid #efefef;
    background-color: rgba(13, 156, 137, 0.2);
}

.dl_box h2{
    text-align: center;
    margin: 20px auto;
    color: white;
}
.dl_box h4{
    color: white;
    font-size: 12px;
    margin: 10px 120px;
}
.dl_box .qu{
    color: rgba(230, 123, 109, 0.8);
    cursor: pointer;
    
}
.dl_box .qu:hover{
text-decoration: underline;
color: rgba(243, 43, 17, 0.8);
}
.fuji{
    width: 400px;
    margin: 5px 40px;
}
.denglu{
    margin: 30px 30px;
}
.bgm{
    width: 100%;
    /* height: 600px; */
    background-image: url(../../assets/kejifeng.jpg);
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
}
.ljdl{
    width: 320px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    background-color: rgba(233, 79, 58, 0.8);
    margin: 5px 120px;
    border-radius: 5px;
}
.ljdl:hover{
    background-color: rgba(243, 43, 17, 0.8);
}
</style>