import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDo
    },
    {
      path: '/newTask',
      name: 'newTask',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewToDo.vue')
    }
  ]
})

export default router
