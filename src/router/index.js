import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Result from '../views/Result.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MRT',
    component: Home,
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path:'/about',
    name:'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
