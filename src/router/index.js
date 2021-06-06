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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
