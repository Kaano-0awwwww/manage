import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/ucenter/userProfile',
          component: () => import('@/views/ucenter/UserProfile.vue')
        },
        {
          path: '/ucenter/UserAvatar',
          component: () => import('@/views/ucenter/UserAvatar.vue')
        },
        {
          path: '/ucenter/UserPassword',
          component: () => import('@/views/ucenter/UserPassword.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') return '/login'
})

export default router
