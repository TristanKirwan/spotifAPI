import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home';
import SearchPage from '../views/Search';
import AlbumPage from '../views/Album';
import ArtistPage from '../views/Artist';

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
    path: '/album/:id',
    name: 'Album',
    component: AlbumPage
  },
  {
    path: '/artist/:id',
    name: "Artist",
    component: ArtistPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
