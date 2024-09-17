import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/reportage',
      name: 'reportage',
      component: () => import('@/views/PhotoReportage.vue')
    },
    {
      path: '/sports-events',
      name: 'sports-events',
      component: () => import('@/views/PhotoSports.vue')
    },
    {
      path: '/subject-shooting',
      name: 'subject-shooting',
      component: () => import('@/views/PhotoSubject.vue')
    },
    {
      path: '/interior-photography',
      name: 'interior-photography',
      component: () => import('@/views/PhotoInterior.vue')
    },
    {
      path: '/catalog-shooting',
      name: 'catalog-shooting',
      component: () => import('@/views/PhotoCatalog.vue')
    },
    {
      path: '/business-portrait',
      name: 'business-portrait',
      component: () => import('@/views/PhotoBusiness.vue')
    },
    {
      path: '/video-interview',
      name: 'video-interview',
      component: () => import('@/views/VideoInterview.vue')
    }
  ]
})

export default router
