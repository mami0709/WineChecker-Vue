import { createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/pages/index.vue'
import AkaPage from '@/pages/shindan/AkaPage.vue'
import ShiroPage from '@/pages/shindan/ShiroPage.vue'
import ResultAka from '@/pages/shindan/ResultAka.vue'
import ResultShiro from '@/pages/shindan/ResultShiro.vue'
import RecommendPage from '@/pages/recommend/index.vue'

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
  },
  {
    path: '/shindan/resultAka',
    name: 'ResultAka',
    component: ResultAka
  },
  {
    path: '/shindan/resultShiro',
    name: 'ResultShiro',
    component: ResultShiro
  },
  {
    path: '/recommend',
    name: 'RecommendPage',
    component: RecommendPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
