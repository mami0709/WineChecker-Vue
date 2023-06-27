import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/pages/index.vue'
import AkaPage from '@/pages/shindan/AkaPage.vue'
import ShiroPage from '@/pages/shindan/ShiroPage.vue'

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
  {
    path: '/shindan/AkaPage',
    name: 'AkaPage',
    component: AkaPage
  },
  {
    path: '/shindan/ShiroPage',
    name: 'ShiroPage',
    component: ShiroPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
