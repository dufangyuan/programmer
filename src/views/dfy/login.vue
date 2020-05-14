<template>
  <div class="login_box">
    <h1>注册新账号</h1>
    <el-form ref="loginform" :model="loginform" :rules="loginrules" label-width="80px">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="loginform.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="yzm">
        <el-input placeholder="请输入验证码" v-model="loginform.yzm">
            <template slot="append">
            <div>
                <el-button type="primary" @click="getcode">获取验证码</el-button>
            </div>
            </template>
        </el-input>
      </el-form-item>
       <el-form-item label="用户名" prop="username">
        <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
           <el-form-item label="密码" prop="password1">
        <el-input v-model="loginform.password1" placeholder="请输入密码" type="password"><i class="el-icon-view"></i></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input v-model="loginform.password2" placeholder="请确认密码" type="password"></el-input>
      </el-form-item>
       <el-form-item size="large">
        <el-button type="primary"  @click="submitForm('loginform')" class="zhuce">立即注册</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
          email:'',
          yzm:'',
          password1:'',
          password2:'',
          username:''
      },
      loginrules:{
            email:[ 
                { required: true, message: '请输入邮箱', trigger: 'blur' },
                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式错误'}
            ],
            yzm:[
                 { required: true, message: '请输入验证码', trigger: 'blur' },
            ],
            username:[
                 { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            password:[
                 { required: true, message: '请输入密码', trigger: 'blur' },
            ]
      }
    };
  },
  created(){
    this.$axios.get("").then(function(res){
      console.log(res);
    })
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //调取相应接口
      getcode(){
        this.$axios.post('/dfy/sendEmail',{
          email:this.loginform.email,
        }).then(res=>{
          console.log(res);
        })
      },
      submitForm(){
        this.$axios.post('/dfy/emailVerify',{
          email:this.loginform.email,
          }).then(a=>{
            console.log(a);
          })
      }

      }
  }
</script>

<style scoped>
h1{
  text-align: center;
  margin-bottom: 10px;
  font-weight: 400;
}
.login_box {
  width: 400px;
  height: 500px;
  margin: 130px auto;
}
.op_yzm{
    display: flex;
    justify-content: space-between;
}
.zhuce{
  width:320px;
}
</style>