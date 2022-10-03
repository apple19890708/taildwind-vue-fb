import { createRouter, createWebHashHistory } from 'vue-router'
const routerHistory = createWebHashHistory('/taildwind-vue-fb/')
import Home from '../views/Home.vue';
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
    //測試 tailwind 用頁面
    {
      path:'/test-tailwind',
      name: 'test-tailwind',
      component: () => import('../views/ForTailwindTest.vue')
    },
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
        {
          path: '/profile/settings',
          name: 'profile-settings',
          component: () => import('../views/FrontPage/UserSettingsView.vue'),
        },
        {
          path: '/chat-room-list',
          name: 'chat-room-list',
          component: () => import('../views/FrontPage/ChatRoomListView.vue'),
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
        {
          path: '/sign-up',
          name: 'sign-up',
          component: () => import('../views/FrontPage/SignUpView.vue'),
        },
        {
          path: '/forget-password',
          name: 'forget-password',
          component: () => import('../views/FrontPage/ForgetPasswordView.vue'),
        }
      ],
    },
    {
      path: '/chat-room',
      name: 'chat-room',
      component: () => import('../views/FrontPage/ChatRoomView.vue'),
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