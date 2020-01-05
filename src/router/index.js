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
      children: [
        // index
        {
          path: '/index',
          name: 'index',
          component: () => import('@/components/index')
        },
        // 关于我们
        {
          path: '/aboutus',
          name: 'aboutus',
          component: () => import('@/components/aboutus')
        },
        // 数据集
        {
          path: '/datasets',
          name: 'datasets',
          component: () => import('@/components/datasets')
        },
        // 算法
        {
          path: '/algorithms',
          name: 'algorithms',
          component: () => import('@/components/algorithms')
        },
        // 研究人员
        {
          path: '/researchers',
          name: 'researchers',
          component: () => import('@/components/researchers')
        },
        // 发表情况
        {
          path: '/publications',
          name: 'publications',
          component: () => import('@/components/publications')
        }
      ]
    }
  ]
})
