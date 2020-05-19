import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/dfy/login'
import gerenziliao from '@/views/ly/gerenziliao'
import dl from '@/views/gs/dl'
import zhuce from '@/views/gs/zhuce'
import submit from '@/views/ly/submit'
import IssueDemand from '@/views/dfy/IssueDemand'
import wanshan from '@/views/dfy/wanshan'
import programmer from '@/views/dfy/programmer'
import fbgc from '@/views/gs/fbgc'
import xmxq from '@/views/gs/xmxq'
import page from '@/views/ly/page'
import muban from '@/views/ly/muban'
import dibu from '@/views/gs/dibu'


Vue.use(Router)

export default new Router({
    mode: "history", //去掉url中的#符号
    routes: [{
            path: '/',
            redirect: "login"
        },
        {
            //引入路径
            path: '/login',
            name: 'login',
            component: login
        },
        {
            //登录
            path: '/dl',
            name: 'dl',
            component: dl
        },
        {
            //注册
            path: '/zhuce',
            name: 'zhuce',
            component: zhuce
        },
        {
            //项目详情
            path: '/xmxq',
            name: 'xmxq',
            component: xmxq
        },
        {
            //发布广场
            path: '/fbgc',
            name: 'fbgc',
            component: fbgc
        },
        {
            // 主页
            path: '/page',
            name: 'page',
            component: page
        },
        {
            // 模板
            path: '/muban',
            name: 'muban',
            component: muban
        },
        {
            // 个人资料
            path: '/gerenziliao',
            name: 'gerenziliao',
            component: gerenziliao
        },

        // {
        //   path: '/top',
        //   name: 'top',
        //   component: top
        // }

        {
            // 梁勇登录
            path: '/submit',
            name: 'submit',
            component: submit
        },
        {
            // 发布需求
            path: '/IssueDemand',
            name: 'IssueDemand',
            component: IssueDemand
        },
        {
            // 完善
            path: '/wanshan',
            name: 'wanshan',
            component: wanshan
        },
        {
            // 优秀程序员
            path: '/programmer',
            name: 'programmer',
            component: programmer
        },
        {
            // 发布需求
            path: '/test',
            component: () =>
                import ('@/views/dfy/IssueDemand1')
        }
    ]
})