import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RepoDetails from '../components/RepoDetails.vue';
import Error404 from '../views/Error404.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'Home', component: HomeView},
    {path: '/:repo/:name', name: 'RepoDetails', component: RepoDetails},
    {path: '/:catchAll(.*)', name: 'Error404', component: Error404}
  ]

})

export default router
