import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      component: () => import('../views/Layout.vue'),
      children: [
        {
          path: '/warnlist',
          component: () => import('../views/WarnList.vue'),
          meta: {
            module: '快抢业务',
            title: '告警配置页',
          }
        },
        {
          path: '/analysis',
          component: () => import('../views/Analysis.vue'),
          meta: {
            module: '快抢业务',
            title: '图表分析页',
          }
        },
        {
          path: '/testcases',
          component: () => import('../views/TestCases.vue'),
          meta: {
            module: '快抢业务',
            title: '用例管理页',
          }
        },
        {
          path: '/rulecheck',
          component: () => import('../views/RuleCheck.vue'),
          meta: {
            module: '快抢业务',
            title: '用例规则页',
          }
        },
      ]
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
      meta:{
        module: '接口测试平台',
        title: '登录页'
      }
    },
    {
      path: '*',
      component: () => import('../views/404.vue'),
      meta:{
        module: '接口测试平台',
        title: '404'
      }
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.module)
  {
    document.title = to.meta.module + '-' + to.meta.title
  }
  next()

})

export default router
