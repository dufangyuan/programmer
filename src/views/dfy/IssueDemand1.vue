<template>
  <div>
    <top></top>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <h3 style="color: #303133;text-align:center;margin-top:15px;margin-bottom:15px">发布新项目需求</h3>
        <el-form :model="demand" :rules="rules" ref="demandForm" label-position="top" class="demo-ruleForm">
          <el-form-item label="项目名称 " prop="demandName">
            <el-input v-model="demand.demandName" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="我的项目类型" prop="demandType">
            <el-checkbox-group v-model="demand.demandType">
              <el-checkbox label="Android"></el-checkbox>
              <el-checkbox label="iOS"></el-checkbox>
              <el-checkbox label="pc网站"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="项目预算（元）" prop="demandBudget">
            <el-input v-model="demand.demandBudget" placeholder="请输入内容" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="我的项目介绍" prop="demandDetail">
            <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="demand.demandDetail"></el-input>
          </el-form-item>
          <el-form-item>
            <el-upload  class="upload-demo"  ref="upload" action  :http-request="fileupload">
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload> 
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即发布</el-button>
            <el-button @click="resetForm('demandForm')">重置</el-button>
          </el-form-item>
        </el-form>
            <!-- <el-input v-model="aa" placeholder="请输入内容" autocomplete="off"></el-input>
            <el-input v-model="bb" placeholder="请输入内容" autocomplete="off"></el-input>
            <el-input v-model="cc" placeholder="请输入内容" autocomplete="off"></el-input>
            <el-input v-model="dd" placeholder="请输入内容" autocomplete="off"></el-input> -->
                <!-- <el-upload  class="upload-demo"  ref="upload" action  :http-request="fileupload">
                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>  -->
                <!-- <el-button @click="btn">提交</el-button> -->
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      aa:'',
      bb:'',
      cc:'',
      dd:'',
      ee:'',
       checkList: ['选中且禁用','复选框 A'],
      demand: {
        demandName: '',
        demandType: [],
        demandBudget: 12,
        demandDetail: '',
        demandFile: {}
      },
      filelist:{},
      rules: {
        demandName: [{required: true, message: '项目名称不能为空', trigger: 'blur'}],
        demandType: [{required: true, message: '项目类型必选', trigger: 'blur'}],
        demandBudget: [
          {required: true, message: '项目预算不能为空', trigger: 'blur'},
          { type: 'number', message: '项目预算必须为数字值', trigger: 'change'}
        ],
        demandDetail: [{required: true, message: '项目描述不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
    btn(){
       let aa=new FormData();
        aa.append("demandFile",this.ee)
        aa.append("demandBudget",this.bb)
        aa.append("demandDetail",this.cc)
        aa.append("demandName",this.dd)
        aa.append("demandType",this.aa)
        this.$axios.post('/api/demand/demandd', aa).then(res=>{
          console.log(res);
        })
    },
    // imgfile(aa){
    //   console.log(aa)
    //   this.filelist=aa.file;
    // },
    fileupload(par){
      console.log(par);
      this.demand.demandFile=par.file;
      // this.ee=par.file;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm() {
      // this.$refs[formName].validate((valid) => {
        let aa=new FormData();
        aa.append("demandFile",this.demand.demandFile)
        aa.append("demandBudget",this.demand.demandBudget)
        aa.append("demandDetail",this.demand.demandDetail)
        aa.append("demandName",this.demand.demandName)
        aa.append("demandType",this.demand.demandType)
        this.$axios.post('/dfy/demand/demand', aa).then(res=>{
          console.log(res);
        })
      // })
    }
  }
}
</script>


<style scoped>

</style>