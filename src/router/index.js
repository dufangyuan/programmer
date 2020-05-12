import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/dfy/login'
import project from '@/views/dfy/project'
import wanshan from '@/views/dfy/wanshan'
import IssueDemand from '@/views/dfy/IssueDemand'

Vue.use(Router)

export default new Router({
  mode:"history",//去掉url中的#符号
  routes: [
    {
      path: '/',
      redirect:"login"
    },
    {
      //引入路径
      path: '/login',
      name: 'login',
      component: login
    },
    {
      //引入路径
      path: '/project',
      name: 'project',
      component: project
    },
    {
      //引入路径
      path: '/wanshan',
      name: 'wanshan',
      component: wanshan
    },
    {
      //引入路径
      path: '/IssueDemand',
      name: 'IssueDemand',
      component: IssueDemand
    }
  ]
})
