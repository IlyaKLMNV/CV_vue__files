import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Stack from '../components/Stack.vue'
import Portfolio from '../components/Portfolio.vue'
import Contacts from '../components/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
      meta: {
        id:1,
      }
    },
    {
      path: '/stack',
      name: 'stack',
      component: Stack,
      meta: {
        id:2,
      }
    },
    
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: {
        id:3,
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      meta: {
        id:4,
      }
    }
  ]
})

export default router
