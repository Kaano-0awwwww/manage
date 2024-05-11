import { createRouter, createWebHistory } from 'vue-router'

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
          path: '/ucenter/Avatar',
          component: () => import('@/views/ucenter/UserAvatar.vue')
        },
        {
          path: '/ucenter/password',
          component: () => import('@/views/ucenter/UserPassword.vue')
        }
      ]
    }
  ]
})

export default router
