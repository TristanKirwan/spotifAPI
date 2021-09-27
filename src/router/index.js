import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import SearchPage from '../views/Search';
import AlbumPage from '../views/Album';

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
  },
  {
    path: '/albums/:id',
    name: 'Album',
    component: AlbumPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
