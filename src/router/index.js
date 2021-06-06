import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ROUTES_URL = {
  LOGIN: {
    path: 'login', // importante no tener barra "/" antes del path...
    name: 'Login',
  },
  REGISTER: {
    path: 'register',
    name: 'Register',
  },
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    ...ROUTES_URL.LOGIN,
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    children: [
      {
        ...ROUTES_URL.LOGIN,
        component: () => import('@/views/Login.vue'),
      },
      {
        ...ROUTES_URL.REGISTER,
        component: () => import('@/views/Register.vue'),
      },
    ],
  },
  {
    path: '/gif/:id',
    name: 'GifDetail',
    component: () => import('@/views/GifDetail.vue'),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
