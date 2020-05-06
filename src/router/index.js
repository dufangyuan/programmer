import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import page from '@/views/ly/page'
// import top from '@/components/top'
import submit from '@/views/ly/submit'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/page',
      name: 'page',
      component: page
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
  ]
})
