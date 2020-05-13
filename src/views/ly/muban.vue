<template>
    <div>
        <div class="navtop">
            <div :class="step==0  ? class1 : class2" @click="changecolor(0)">导航一</div>
            <div :class="step==1  ? class1 : class2" @click="changecolor(1)">导航一</div>
            <div :class="step==2  ? class1 : class2" @click="changecolor(2)">导航一</div>
            <div :class="step==3  ? class1 : class2" @click="changecolor(3)">导航一</div>
            <div :class="step==4  ? class1 : class2" @click="changecolor(4)">导航一</div>
        </div>
        <div class="box">
            <div v-if="step==0">
                <people></people>
            </div>
            <div v-if="step==1">
               
            </div>
            <div v-if="step==2">
                导航3导航3导航3导航3导航3导航一导航一导航一导航一导航一
            </div>
            <div v-if="step==3">
                导航4导航4导航4导航4导航一导航一导航一导航一导航一
            </div>
            <div v-if="step==4">
                导航5导航5导航5导航5导航5导航一导航一导航一导航一导航一
            </div>
        </div>
    </div>
</template>

<script>
import people from './perpleinfo'

    export default {
        components:{
            people
        },
        data(){
            return {
                step:0,
                class1:"item itemactive",
                class2:"item",
            }
        },
        methods:{
            changecolor(n){
                this.step=n;
            }
        }
    }
</script>

<style>
.navtop{
    width: 800px;
    height: 50px;
    /* display: flex;
    justify-content: space-between; */
    box-shadow: 0px 0px 5px #000;
    margin: 50px auto;
}
.item{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    float: left;
    margin: 0 20px;
}
.itemactive{

    background: red;
    color: white;
    float: left;

}
</style>