import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/FrontPage/Home.vue'
import HomeV2 from './views/SecondEditon/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/v2'
    },
    {
      path: '/v1',
      name: 'home',
      component: Home,
      redirect: '/v1/index', //改变指向
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/components/FrontPage/home/HomeDefault')
        },
        {
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          path: 'show',
          name: 'show',
          component: () => import('@/views/FrontPage/Show.vue')
        },
        {
          path: 'case',
          name: 'case',
          component: () => import('@/views/Case.vue')
        }, {
          path: 'news',
          name: 'news',
          component: () => import('@/views/News.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/About.vue')
        }
      ]
    },
    {
      path: '/v2',
      name: 'homev2',
      component: HomeV2
    }
  ]
})
