<template>
  <div>
    <top></top>
    <el-container>
      <el-main style="height:550px;">
        <el-form ref="formaa" :model="formaa" :rules="rules" label-width="80px" class="kuang">
          <div class="title">
            <h2>登录</h2>
          </div>
          <div class="fu">
            <el-form-item prop="email" label="邮箱:">
              <el-input v-model="formaa.email" placeholder="请输入电子邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码:" class="mima" prop="pass">
              <el-input v-model="formaa.pass" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <div class="wangji">
              <a href class="left">没有账号？极速注册</a>
              <a href class="right">忘记密码</a>
            </div>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('formaa')" class="liji">立即登录</el-button>
            </el-form-item>
            <div class="jingji">
              我们是
              <img :src="abc" style="width:25px; height:20px;" />程序员的经纪人
            </div>
          </div>
        </el-form>
      </el-main>
    </el-container>
    <bottom></bottom>
  </div>
</template>
<script>
// import top from "../../components/top";
// import bottom from "../../components/bottom";
export default {
  // components: {
  //   top,
  //   bottom
  // },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^[a-zA-Z0-9_]{8,16}$/.test(value)) {
        callback(new Error("请输入8-16位的密码"));
      } else {
        callback();
      }
    };
    return {
      abc: require("../../assets/hongqi.svg"),
      formaa: {
        email: "",
        pass: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur"]
          }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.axios
            .post("/ly/login", {
              email: this.formaa.email,
              password: this.formaa.pass
            })
            .then(function(res) {
              console.log(res);
            });
        } else {
          console.log("登录失败");
          return false;
        }
      });
    }
  }
};
</script>
<style >
.el-main {
  background-color: #eee;
  color: #333;
  /* text-align: center; */
}
.title {
  width: 550px;
  height: 50px;
  /* border: 1px solid black; */
  margin: auto;
}
.title h2 {
  line-height: 50px;
  margin: auto;
  text-align: center;
}
.kuang {
  width: 550px;
  height: 400px;
  /* border: 1px solid black; */
  margin: auto;
  background-color: #ffffff;
}
.fu {
  width: 500px;
  height: 320px;
  /* border: 1px solid black; */
  margin: auto;
}
.el-input__inner {
  width: 70%;
  height: 45px;
}
.wangji {
  width: 300px;
  height: 25px;
  /* border: 1px solid black; */
  margin: 10px 78px;
}
.wangji .left {
  float: left;
}
.wangji .right {
  float: right;
}
.liji {
  width: 300px;
  height: 40px;
  margin: 20px auto;
}
el-form-item_content {
  margin-left: 10px;
}
.jingji {
  width: 300px;
  height: 30px;
  /* border: 1px solid black; */
  margin: 48px 112px;
}
</style>