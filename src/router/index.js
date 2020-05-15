import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/dfy/login'
import gerenziliao from '@/views/ly/gerenziliao'
import dl from '@/views/gs/dl'
import zhuce from '@/views/gs/zhuce'
import submit from '@/views/ly/submit'
import IssueDemand from '@/views/dfy/IssueDemand'
import project from '@/views/dfy/project'
import wanshan from '@/views/dfy/wanshan'
import programmer from '@/views/dfy/programmer'
import fbgc from '@/views/gs/fbgc'
import xmxq from '@/views/gs/xmxq'
import page from '@/views/ly/page'
import muban from '@/views/ly/muban'
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
            //引入路径
            path: '/dl',
            name: 'dl',
            component: dl
        },
        {
            //引入路径
            path: '/zhuce',
            name: 'zhuce',
            component: zhuce
        },
        {
            //引入路径
            path: '/xmxq',
            name: 'xmxq',
            component: xmxq
        },
        {
            //引入路径
            path: '/fbgc',
            name: 'fbgc',
            component: fbgc
        },
        {
            path: '/page',
            name: 'page',
            component: page
        },
        {
            path: '/muban',
            name: 'muban',
            component: muban
        },
        {
            path: '/gerenziliao',
            name: 'gerenziliao',
            component: gerenziliao
        },
        {
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
            path: '/submit',
            name: 'submit',
            component: submit
        },
        {
            path: '/IssueDemand',
            name: 'IssueDemand',
            component: IssueDemand
        },
        {
            path: '/project',
            name: 'project',
            component: project
        },
        {
            path: '/wanshan',
            name: 'wanshan',
            component: wanshan
        },
        {
            path: '/programmer',
            name: 'programmer',
            component: programmer
        },
        {
            path: '/fbgc',
            name: 'fbgc',
            component: fbgc
        },
        {
            path: '/muban',
            name: 'muban',
            component: muban
        },
        {
            path: '/gerenziliao',
            name: 'gerenziliao',
            component: gerenziliao
        },
        {
            path: '/test',
            component: () =>
                import ('@/views/dfy/IssueDemand1')
        }
    ]
})