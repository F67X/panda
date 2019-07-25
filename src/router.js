import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index', //改变指向
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('@/components/home/HomeDefault')
        },
        {
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          path: 'user',
          name: 'user',
          component: () => import('@/views/User.vue')
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
    }
  ]
})
