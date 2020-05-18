<template>
  <div>
    <div class="red">
      <div class="redes">
        <img src="../../assets/jibenxinxi.svg" alt style="width:20px; height:20px;" />
        <h4>基本信息</h4>
        <div class="red-middle">
          <el-form ref="formkbe" :model="formkbe" :rules="formkberules" label-width="80px">
            
            <el-form-item label="邮箱" prop="userEmail">
              <el-input v-model="formkbe.userEmail"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="telephone">
              <el-input v-model="formkbe.telephone"></el-input>
            </el-form-item>
            <el-form-item label="QQ号" prop="qq">
              <el-input v-model="formkbe.qq"></el-input>
            </el-form-item>
            <el-form-item label="微信号" prop="wechat">
              <el-input v-model="formkbe.wechat"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="formkbe.userName"></el-input>
            </el-form-item>
            <el-button type="primary" @click="Sunday" class="shangti">保存</el-button>
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
      formkbe: {
        userName: "",
        userEmail: "",
        telephone: "",
        qq: "",
        wechat: ""
      },
      info:{},
      formkberules: {
        userEmail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "邮箱格式错误"
          }
        ],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        telephone: [
            { required: true, message: "请输入电话", trigger: "blur" },
             { min: 11, max: 11, message: "长度在11个字符", trigger: "blur" }
            ],
        qq: [
          { required: true, message: "请输入qq", trigger: "blur" },
          { required: true, message: "请输入微信", trigger: "blur" },
          { min: 6, max: 14, message: "长度在 6 到 14 个字符", trigger: "blur" }
        ],
        wechat: [
          { required: true, message: "请输入微信", trigger: "blur" },
          {
            pattern: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
            message: "微信格式错误"
          },
          { min: 6, max: 14, message: "长度在 6 到 14 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created(){
   var getuserinfo= window.localStorage.getItem("userinfo");
    this.info=JSON.parse(getuserinfo)
    this.formkbe.userEmail=this.info.userEmail;
   console.log(this.info)

  },
  methods: {
    Sunday() {
      this.$axios
        .put("/wb/user/user", {
            userEmail: this.formkbe.userEmail,
             userName: this.formkbe. userName,
            telephone: this.formkbe.telephone,
            qq: this.formkbe.qq,
            wechat: this.formkbe. wechat,
        })
        .then(a => {
          console.log(a);
        });
    }
  }
};
</script>

<style >
.red {
  width: 830px;
  height: 700px;
  /* border: 1px solid black; */
  margin: auto;
}
.redes {
  width: 768px;
  height: 700px;
  /* border: 1px solid black; */
  margin: 30px auto;
}
.redes img {
  float: left;
  margin-right: 10px;
}
.red-middle {
  width: 445px;
  height: 650px;
  /* border: 1px solid black; */
  margin: 30px auto;
}
</style>