<template>
    <div>
     <div class="grass">
           <div class="grass-main">
            <img src="../../assets/xiugaimima.svg" alt="" style="width:20px; height:20px;">
            <h4>修改密码</h4>
            <div class="grass-middle">
            <el-form ref="formlll" :model="formlll"  :rules="formlllrules" label-width="80px">
                <el-form-item label="用户名" prop="username">
                <el-input v-model="formlll.username"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                <el-input v-model="formlll.email"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                <el-input v-model="formlll.code">
                    <template slot="append">
                     <div>
                <el-button type="primary" @click="yanzheng">获取验证码</el-button>
                     </div>
                    </template>
                </el-input>
                </el-form-item>
                <!-- <el-form-item label="密码" prop="password">
                <el-input v-model="formlll.password"></el-input>
                </el-form-item> -->
                <el-form-item label="修改密码" prop="password12">
                <el-input v-model="formlll.password12"></el-input>
                </el-form-item>
                <el-button type="primary" @click="Subway" class="shangti">提交</el-button>
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
        formlll: {
          username:'',
          email:'',
          code:'',
          password:'',
          password12:'',
        },
        formlllrules:{
            email:[ 
                { required: true, message: '请输入邮箱', trigger: 'blur' },
                {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式错误'}
                  ],
            code:[
                 { required: true, message: '请输入验证码', trigger: 'blur' },
            ],
            username:[
                 { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            password:[
                 { required: true, message: '请输入密码', trigger: 'blur' },
            ],
             password12:[
                 { required: true, message: '请输入密码', trigger: 'blur' },
            ]
        }
      }
    },
    methods:{
      yanzheng(){
            this.$axios.post('/wb/sendEmail',{
          email:this.formlll.email,
        }).then(res=>{
          console.log(res);
        })
     },  
     Subway(){
      this.$axios.post('/wb/changePassword',{
          email:this.formlll.email,
          code:this.formlll.code,
          password:this.formlll.password12,
          username:this.formlll.username
          }).then(a=>{
              console.log(a)
     })
       }
        }
         } 
</script>

<style>
.grass{
     width: 830px;
    height: 600px;
    border: 1px solid black;
    margin:auto;
}
.grass-main{
width:768px;
height: 600px;
border: 1px solid black;
margin:30px auto;
}
.grass-main img{
    float: left;
}
.grass-main h4{
    margin-left: 10px;
    float: left;
}
.grass-middle{
    width: 400px;
    height: 400px;
    /* border: 1px solid black; */
    margin: 30px auto;
}
.shangti{
     margin-top:6px;
    margin-left: 50px;
}
</style>