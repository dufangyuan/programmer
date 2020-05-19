<template>
<div>
  <top></top>
  <div class="box">
    <div class="xiangqing">
      <h2>完善个人简历后，才能申请签约开发者进行接单</h2>
      <hr height="5px" width="900px" />
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
      <p @click="submit">去认证</p>
    </div>
    <div class="JBmessage">
      <div class="JB_top">
        <p>基本信息</p>
        <el-button type="info">取消</el-button>
        <el-button type="primary">保存</el-button>
      </div>
      <hr height="5px" width="1000px" />
      <div class="JB_bottom">
        <el-form ref="wanshanform" :model="wanshanform" :rules="loginrules" label-width="80px">
          <el-form-item label="昵称" prop="username">
            <el-input  v-model="wanshanform.input" clearable placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="工作状态" prop="status">
            <el-select v-model="wanshanform.region" placeholder="请选择工作状态">
              <el-option label="求职" value="qiuzhi"></el-option>
              <el-option label="自由职业" value="fire"></el-option>
              <el-option label="正常工作" value="commont"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="职业方向" prop="work">
            <el-select placeholder="请选择" v-model="wanshanform.dir">
              <el-option v-for="(item,index) in careerD" :key="index" :value="item.name" :label="item.name"></el-option>
            </el-select>
            <el-select v-model="wanshanform.direc" placeholder="请选择">
              <el-option v-for="(item,index) in careerDir" :key="index" :value="item.name" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区" prop="place">
            <el-select v-model="wanshanform.place" placeholder="请选择">
              <el-option label="陕西" value="shanxi"></el-option>
            </el-select>
            <el-select v-model="wanshanform.places" placeholder="请选择">
              <el-option label="西安" value="xian"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日薪" prop="money">
            <el-input-number v-model="num" @change="handleChange" :min="300" :max="600" :step="50"></el-input-number>
            <label for>元/天（8小时）</label>
          </el-form-item>
          <el-form-item label="工作时间" prop="time">
            <el-radio v-model="radio" label="1">工作日</el-radio>
            <el-radio v-model="radio" label="2">周末</el-radio>
          </el-form-item>
        </el-form>
      </div>
      <div class="ziliao">
        <p>个人资料</p>
        <!-- <el-button type="info">编辑</el-button> -->
        <hr height="5px" width="1000px" />
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入您的职业状态（工作状态、职业方向、具体职业）"
            v-model="textarea">
       </el-input>
      </div>
      <div class="ziliao">
        <p>工作经历</p>
        <!-- <el-button type="info">编辑</el-button> -->
        <hr height="5px" width="1000px" />
        <div class="block">
    <span class="demonstration">起始时间：</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <label>公司名称：</label><el-input v-model="input" placeholder="请输入公司名称"></el-input><br>
  <label>职位名称：</label><el-input v-model="input" placeholder="请输入所在职位"></el-input><br>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请简述您的工作经历"
            v-model="textarea">
       </el-input>
      </div>
      <div class="ziliao">
        <p>教育经历</p>
        <!-- <el-button type="info">编辑</el-button> -->
        <hr height="5px" width="1000px" />
        <div class="block">
    <span class="demonstration">起始时间：</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <label>院校名称：</label><el-input v-model="input" placeholder="请输入院校名称"></el-input><br>
  <label>专业名称：</label><el-input v-model="input" placeholder="请输入专业名称"></el-input><br>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="学历">
    <el-select v-model="form.region" placeholder="请选择您的学历">
      <el-option label="本科" value="shanghai"></el-option>
      <el-option label="大专" value="beijing"></el-option>
      <el-option label="硕士研究生" value="beijing"></el-option>
      <el-option label="高中" value="beijing"></el-option>
      <el-option label="初中" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  </el-form>
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请简述您的教育经历"
            v-model="textarea">
       </el-input>
      </div>
      <div class="ziliao">
        <p>个人介绍</p>
        <!-- <el-button type="info">编辑</el-button> -->
        <hr height="5px" width="1000px" />
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请简单做自我介绍"
            v-model="textarea">
       </el-input>
      </div>
      <div class="ziliao">
        <p>作品</p>
        <!-- <el-button type="info">编辑</el-button> -->
        <hr height="5px" width="1000px" />
        <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入你的作品"
            v-model="textarea">
       </el-input>
       <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<label for="">请上传作品截图</label>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
      </div>
    </div>
    <el-button type="primary" class="shenqing">申请签约开发者</el-button>
  </div>
  </div>
</template>
<script>
import top from "@/components/top";
export default {
  components:{
    top,
  },
  data() {
    return {
      input: "",
      num: 300,
      radio: "1",
      textarea: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      value1:'',
      form: {
      region: ''
      },
      wanshanform: {
        dir:'',
        username: "",
        status: "",
        region: "",
        work: "",
        place: "",
        money: "",
        time: ""
      },
      loginrules: {
        region: []
      },
      careerD:[
          {name:'产品经理',id:1},
          {name:'设计师',id:2},
          {name:'前端',id:3},
          {name:'后端',id:4},
          {name:'小程序',id:5},

      ],
      careerDir:[
          {name:'产品经理'},
          {name:'项目经理'},
          {name:'产品其他'}
      ]
    };
  },
  methods: {
    submit(){
      this.$router.push("/gerenziliao")
    },
    handleChange() {},
    handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
  }
};
</script>
<style scoped>
.box {
  width: 1000px;
  overflow: hidden;
  border: 1px solid #f5f5f5;
  margin: 50px auto;
}
.xiangqing {
  width: 1000px;
  height: 260px;
  text-align: center;
}
.xiangqing h2 {
  font-weight: 400;
  margin: 20px auto;
}
hr {
  margin: auto;
  color: #f5f5f5;
  border: 1px solid #f5f5f5;
}
.xiangqing p {
  text-align: left;
  font-size: 14px;
  margin: 10px 50px;
}
.XQ {
  width: 1000px;
  margin-top: 20px;
}
.SMRZ {
  width: 1000px;
  height: 40px;
  margin-top: 10px;
  border: 1px solid #f5f5f5;
}
.SMRZ p:nth-child(1){
  font-size: 16px;
  margin-left: 50px;
  line-height: 40px;
  float: left;
}
.SMRZ p:nth-child(2) {
  text-decoration: none;
  float: right;
  line-height: 40px;
  color: #409eff;
  font-size: 14px;
  margin-right: 50px;
}
.JB_top {
  width: 1000px;
  height: 50px;
}
.JB_top p {
  float: left;
  margin-left: 50px;
  line-height: 50px;
}
.el-button {
  float: right;
  margin-right: 50px;
  text-align: center;
  margin-top: 5px;
}
.el-input {
  width: 200px;
}
.el-form {
  margin: 20px 50px;
}
.ziliao {
  width: 1000px;
  /* height: 230px; */
  margin-top: 10px;
  overflow: hidden;
  border: 1px solid #f5f5f5;
  position: relative;
}
.ziliao p {
  height: 50px;
  line-height: 50px;
  margin-left: 50px;
}
.ziliao .ei-input{
  resize: none;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>