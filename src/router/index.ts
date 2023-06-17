import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Marca',
    name: 'Marca',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaView.vue')
  },
  {
    path: '/modelo',
    name: 'modelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModeloView.vue')
  },
  {
    path: '/veiculo',
    name: 'veiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/VeiculoView.vue')
  },
  {
    path: '/condutor',
    name: 'codutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/CondutorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
