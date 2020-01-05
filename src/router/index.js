import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        // index
        {
          path:'/index',
          name:'index',
          component:() => import('@/components/index')
        },
        // 关于我们
        {
          path:'/aboutus',
          name:'aboutus',
          component:() => import('@/components/aboutus')
        }
      ]
    }
  ]
})
