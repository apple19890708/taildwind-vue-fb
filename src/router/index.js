import { createRouter, createWebHashHistory } from 'vue-router'
const routerHistory = createWebHashHistory('/taildwind-vue-fb/')
import Home from '../views/Home.vue';
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'post',
          meta: { requiresAuth: true },
          component: () => import('../views/PostView.vue'),
        },
        {
          path: '/post-news',
          name: 'post-news',
          component: () => import('../views/PostNew.vue'),
        },
        {
          path: '/likes',
          name: 'likes',
          component: () => import('../views/FrontPage/LikesView.vue'),
        },
        {
          path: '/profile/:id',
          name: 'profile',
          component: () => import('../views/FrontPage/UserView.vue'),
        },
      ]
    },
    {
      path: '/user',
      component: () => import('../views/LoginView.vue'),
      children: [
        {
          path: '/sign-in',
          name: 'sign-in',
          component: () => import('../views/SignInView.vue'),
        },
        {
          path: '/callback',
          name: 'callback',
          component: () => import('../views/FrontPage/SignInCallback.vue'),
        },
      ],
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = JSON.parse(localStorage.getItem('isLogin'));
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogin && to.fullPath) {
      next();
    } else {
      next({ name: 'sign-in' })
    }
  } else if (isLogin && to.fullPath === '/sign-in') {
    next({ name: 'post' })
  } else {
    next()
  }
})
 
export default router