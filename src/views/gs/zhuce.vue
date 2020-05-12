<template>
  <div class="bgimg">
  <div class="zhucebox">
    <h2>会员注册</h2>
    <div class="minbox">
      <el-form ref="dlform" :model="zcform" :rules="zcrules" label-width="90px" hide-required-asterisk=false
      >
        <el-form-item label="邮箱:" prop="email" >
          <el-input v-model="zcform.email" clearable placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="验证码:" prop="yzm">
          <el-input placeholder="请输入验证码" v-model="zcform.yzm">
            <template slot="append">
              <el-button type="text" @click="getyzm()">获取验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="用户名:" prop="username">
          <el-input  v-model="zcform.username" autocomplete="off"  placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码:"  prop="pass">
          <el-input type="password" v-model="zcform.pass" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码:"  prop="checkPass">
          <el-input type="password" v-model="zcform.checkPass" placeholder="请确认密码" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item  >
          <div class="ljzc" @click="register">立即注册</div>
          <!-- <el-button  @click="register">立即注册</el-button> -->
        </el-form-item>
        <el-form-item class="yyzh"><font color="white">已有账号？</font> <el-button type="text" @click="gologin">直接登录</el-button></el-form-item>
      </el-form>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.zcform.checkPass !== "") {
          this.$refs.zcform.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.zcform.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("邮箱不能为空"));
      } else if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*.[a-zA-Z0-9]{2,6}$/.test(value)) {
        callback(new Error("邮箱格式不正确"));
      } else {
        this.axios.post('/wb/emailVerify',{
          email:this.zcform.email
        }).then(res=>{
          console.log(res);
          var codees=res.data.code
          if(codees===200){
            this.$message.error('该邮箱已注册')
            callback(new Error("该邮箱已注册"));
            this.zcform.email=''
          } else {
            callback();
          }
        })
      }
    };
    return {
      zcform: {
        email: "",
        pass: "",
        checkPass: "",
        username:"",
        yzm: ""
      },
      zcrules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 8,max: 16,message: "密码长度在8 到 16个字符之间",trigger: "blur"
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        yzm: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 6,max: 6,message: "请输入6位验证码",trigger: "blur" }
          ],
          username:[
            { required: true, message: "请输入用户名", trigger: "blur"},
            {
               max: 10,message: "最多输入10个字符",trigger: "blur"
            }
          ]
      }
    };
  },
  methods: {
    gologin(){
      this.$router.push('/dl')
    },
    getyzm() {
      if(this.zcform.email==''){
        alert('请输入邮箱')
      }else{
      this.axios.post('/wb/sendEmail',{
        email:this.zcform.email
      }).then(res=>{
        console.log(res);
      })
      }
    },
    register(){
      var formdata=new FormData()
      this.axios.post('/wb/register',{
        code: this.zcform.yzm,
        email:this.zcform.email,
        password: this.zcform.pass,
        username: this.zcform.username
      }).then(res=>{
        console.log(res);
      })
    },
  }
};
</script>

<style>
.bgimg{
  width: 100%;
  height: 650px;
  overflow: hidden;
  background-image: url(../../assets/zhuce.jpg);
  background-size: 100% 100%;
}
.zhucebox .minbox .el-form-item__label {
  color: white;
  font-weight: bold;
  font-size: 16px;
}
.ljzc{
  width: 300px;
  height: 40px;
  background-color: rgba(243, 20, 20, 0.74);
  color: white;
  line-height: 40px;
  border-radius:5px ;
  cursor: pointer;
  font-size: 18px;  
  margin: 5px auto;
}
.ljzc:hover{
  background-color: rgba(252, 7, 7, 0.9);
}
h2 {
  color: salmon;
  margin: 20px 0;
}
.zhucebox {
  width: 500px;
  height: 500px;
  text-align: center;
  margin: 100px auto;
  background-color: rgba(23, 199, 155, 0.2);
  overflow: hidden;
  
}
.minbox {
  width: 400px;
  height: 100%;
  margin: 0 auto;
}
.yyzh  a{
  color: red;
  text-decoration: none;
  font-size: 12px;
}
.yyzh a:hover{
  text-decoration: underline;
}
</style>