import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import blog from '@/pages/blog'
import user from '@/pages/user'
import notFound from '@/pages/notFound'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: 'index'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
      meta: {
        title: 'blog'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        title: 'user'
      }
    },
    {
      path: '/*',
      name: 'notFound',
      component: notFound,
      meta: {
        title: '404'
      }
    },
  ]
})
