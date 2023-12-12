import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'registro',
    component:  () => import(/* webpackChunkName: "registro" */ '../views/RegistroView.vue')
  },
  {
    path: '/pessoas',
    name: 'pessoas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PessoasView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
