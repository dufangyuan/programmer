<template>
  <div class="login_box">
    <h1>注册新账号</h1>
    <el-form ref="loginform" :model="loginform" :rules="loginrules" label-width="80px">
      <el-form-item label="邮箱" prop="ruleEmail">
        <el-input v-model="loginform.email"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="yzm">
        <el-input placeholder="请输入内容" v-model="loginform.yzm">
            <template slot="append">
            <div>
                <el-button type="primary">获取验证码</el-button>
            </div>
            </template>
        </el-input>
      </el-form-item>
       <el-form-item label="用户名" prop="username">
        <el-input v-model="loginform.username"></el-input>
      </el-form-item>
           <el-form-item label="密码" prop="password">
        <el-input v-model="loginform.password"></el-input>
      </el-form-item>
       <el-form-item size="large">
        <el-button type="primary"  @click="submitForm('loginform')">立即注册</el-button>
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
          password:'',
          username:''
      },
      loginrules:{
            ruleEmail:[ 
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
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 10px;
  font-weight: 400;
}
.login_box {
  width: 400px;
  height: 800px;
  margin: 130px auto;
}
.op_yzm{
    display: flex;
    justify-content: space-between;
}
</style>