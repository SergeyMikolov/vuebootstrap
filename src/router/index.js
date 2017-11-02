import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import blog from '@/pages/blog'
import user from '@/pages/user'
import notFound from '@/pages/notFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/*',
      name: 'notFound',
      component: notFound
    },
  ]
})
