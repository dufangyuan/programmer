<template>
  <div>
    <div class="blue">
      <div class="blues">
        <img src="../../assets/gongzuoshezhi1.svg" alt style="width:20px; height:20px;" />
        <h4>工作设置</h4>
        <div class="blues-middle">
          <p class="keshijian">可工作时间:</p>
          <!-- 选项框 -->
          <el-radio-group v-model="prog_workday" class="jk">
            <el-radio :label="1">工作日</el-radio>
            <el-radio :label="2">周末</el-radio>
          </el-radio-group>
          <br />
          <!-- 选择时间 -->
          <el-time-picker
          class="jl"
            is-range
            v-model="rangetime"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          ></el-time-picker>
          <!-- 可工作地区 -->
          <p class="keshijian">可工作地区:</p>

          <div class="block">
            <span class="demonstration"></span>
            <el-cascader
              class="block11"
              v-model="prog_area"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
            ></el-cascader>
          </div>
          <!-- 可工作时长 -->
          <p class="keshijian">每周工作时长:</p>
          <el-select v-model="weeklength" placeholder="请选择"  class="jg">
            <el-option
           
              v-for="item in timeoptions"
              :key="item.value"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
          <!-- 可工作区域 -->
          <p class="keshijian">可工作区域:</p>
          <el-radio v-model="prog_working" label="驻场工作" border class="zhuchang">驻场工作</el-radio>
          <el-radio v-model="prog_working" label="远程工作" border class="yuancheng">远程工作</el-radio>
          <!-- 日薪 -->
          <p class="keshijian">日薪:</p>
          <el-input-number v-model="salar_day" :min="300" :max="1000" label="描述文字" class="rixin"></el-input-number>
          <div class="jifei">元/天(8小时)</div>
          <!-- 邮箱 -->
          <el-form label-width="80px" class="youxiangs">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="email"></el-input>
            </el-form-item>
            <el-button type="primary" @click="save()" class="shangti">保存</el-button>
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
      email: "999999com",
      rangetime: "",
      formddfrules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "邮箱格式错误"
          }
        ]
      },
      prog_workday: 1,
      progs: "",
      prog_hours: 3,
      weeklength: "",
      salar_day: "",
      timeoptions: [
        { name: "15个小时以上" },
        { name: "15-25个小时以上" },
        { name: "25-40个小时以上" },
        { name: "40个小时以上" }
      ],
      prog_working: "",
      prog_area: [],
      options: [
        {
          value: "陕西",
          label: "陕西",
          children: [
            {
              value: "西安",
              label: "西安",
              children: [
                {
                  value: "长安区",
                  label: "长安区"
                }
              ]
            },
            {
              value: "咸阳",
              label: "咸阳",
              children: [
                {
                  value: "秦都区",
                  label: "秦都区"
                }
              ]
            }
          ]
        }
      ],
      prog_wage_day: 300
    };
  },
  methods: {
    save() {
      this.$axios
        .post("/kz/insert/programmer/message", {
          user_email: this.email,
          prog_area: "西安",
          prog_workday: this.prog_workday,
          prog_working: this.prog_working,
          prog_hours: this.weeklength,
          prog_wage_day: this.salar_day,
          user_role: "程序员"
        })
        .then(a => {
          console.log(a);
        });
    }
  }
};
</script>

<style >
.blue {
  width: 830px;
  height: 700px;
  /* border: 1px solid black; */
  margin: auto;
}
.blues {
  width: 768px;
  height: 700px;
  /* border: 1px solid black; */
  margin: 30px auto;
}
.blues img {
  float: left;
  margin-right: 10px;
}
.blues-middle {
  width: 445px;
  height: 650px;
  /* border: 1px solid black; */
  margin: 30px auto;
}
.gongzuori {
  margin-left: 80px;
  margin-bottom: 10px;
}
.xiaoshi {
  margin-top: 10px;
}
.xiaoshi1 {
  margin-left: 20px;
}
.xiaoshi2 {
  margin-left: 43px;
}
.xiaoshi3 {
  margin-top: 20px;
  margin-left: 20px;
}
.xiaoshi4 {
  margin-top: 20px;
  margin-left: 20px;
}
.block11 {
  margin-top: 20px;
  margin-left: 60px;
  margin-bottom: 20px;
}
.keshijian {
  margin-top: 10px;
}
.zhuchang {
  margin-top: 10px;
  margin-left: 20px;
}
.yuancheng {
  margin-top: 10px;
  margin-left: 20px;
}
.rixin {
  margin-top: 10px;
  margin-left: 50px;
}
.youxiangs {
  margin-left: -26px;
  margin-top: 18px;
}
.shangti {
  margin-left: 150px;
  margin-top: -5px;
}
.jifei {
  width: 94px;
  height: 22px;
  /* border: 1px solid black; */
  margin-left: 231px;
}
  .jk{
      margin-left:85px; 
  }
  .jl{
    margin-top: 10px;
  }
  .jg{
    margin-top: 15px;
    margin-left:58px; 
  }
</style>