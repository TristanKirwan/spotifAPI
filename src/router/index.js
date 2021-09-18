import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import SearchPage from '../views/Search';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
