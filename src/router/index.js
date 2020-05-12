import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/dfy/login'
import gerenziliao from '@/views/ly/gerenziliao'
import dl from '@/views/gs/dl'
import zhuce from '@/views/gs/zhuce'
import page from '@/views/ly/page'
import submit from '@/views/ly/submit'
Vue.use(Router)

export default new Router({
  mode:"history",//去掉url中的#符号
  routes: [
    {
     
      path: '/',
      redirect:"login"
    },
    {
      path: '/page',
      name: 'page',
      component: page
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
  }

  ]
})
