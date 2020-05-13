<template>
    <div>
              <div class="todo">
                <div class="empty">
                  <img src="../../assets/tip.png" alt="" class="empty1">
                </div>
                <p>
                  您还未签约，<el-button type="text" @click="uio" class="">成为签约开发者</el-button>，享受平台项目推送
                </p>
              </div>
    </div>
</template>

<script>
    export default {
        methods: {
    uio() {
      this.$router.push("");
    },
    }
    }
    
</script>

<style >
.todo{
width: 800px;
height: 300px;
/* border: 1px solid black; */
margin: auto;
}
.empty{
  width: 80px;
  height: 80px;
  /* border: 1px solid black; */
  margin: 40px auto;

}
.todo p{
width: 800px;
height: 30px;
/* border: 1px solid black; */
margin: auto;
font-size: 14px;
    text-align: center;
    color: #999;
}

</style>