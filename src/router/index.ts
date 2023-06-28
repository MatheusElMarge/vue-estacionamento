import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/movimentacao',
    name: 'Movimentacao',
    component: () => import('../views/movimentacao/MovimentacaoView.vue')
  },
  {
    path: '/movimentacaoform',
    name: 'Movimentacaoform',
    component: () => import('../views/movimentacao/MovimentacaoFormView.vue'),
    children:[
      {
        path: '/movimentacaoform',
        name: 'movimentacaoform-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      },
      {
        path: '/movimentacaoform',
        name: 'movimentacaoform-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      }
    ]
  },
  {
    path: '/Marca',
    name: 'Marca',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaView.vue')
  },
  {
    path: '/marcaform',
    name: 'marcaForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue'),
    children:[
      {
        path: '/marcaform',
        name: 'marcaform-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      },
      {
        path: '/marcaform',
        name: 'marcaform-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcaFormView.vue')
      }
    ]
  },
  {
    path: '/modeloform',
    name: 'modeloForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModeloFormView.vue'),
    children:[{
      path: '/modeloform',
        name: 'modeloform-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue')
      },
      {
        path: '/modeloform',
        name: 'modeloform-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CondutorFormView.vue')
      }]
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
    component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/VeiculoFormView.vue'),
    children:[
      {
        path: '/veiculoform',
        name: 'veiculoform-editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/VeiculoFormView.vue')
      },
      {
        path: '/veiculoform',
        name: 'veiculoform-excluir',
        component: () => import(/* webpackChunkName: "about" */ '../views/veiculos/VeiculoFormView.vue')
      }
    ]
  
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
  },
  {
    path: '/configuracao',
    name: 'Configuracao',
    component: () => import(/* webpackChunkName: "about" */ '../views/configuracao/ConfiguracaoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
