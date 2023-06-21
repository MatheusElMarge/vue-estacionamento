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
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaView.vue')
  },
  {
    path: '/marcaform',
    name: 'marcaForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
  },
  {
    path: '/modeloform',
    name: 'modeloForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue')
  },
  {
    path: '/modelo',
    name: 'modelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloView.vue')
  },
  {
    path: '/veiculo',
    name: 'veiculo',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/VeiculoView.vue')
  },
  {
    path: '/veiculoform',
    name: 'veiculoForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/VeiculoFormView.vue')
  },
  {
    path: '/condutor',
    name: 'condutor',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorView.vue')
  },
  {
    path: '/condutorform',
    name: 'codutorForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue'),
    children:[
      {
        path: '/condutorform',
        name: 'condutorform-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue')
      },
      {
        path: '/condutorform',
        name: 'condutorform-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
