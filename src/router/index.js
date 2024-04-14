import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/AboutView.vue'
import AllProductsView from '../views/AllProducts.vue'
import SearchResultsView from '../views/SearchResults.vue'

import FireTVView from '../views/ProductPages/Electronics/FireTV.vue'
import PedestalFanView from '../views/ProductPages/Office/PedestalFan.vue'
import GatoradeBottleView from '../views/ProductPages/Outdoors/GatoradeBottle.vue'
import PS5View from '../views/ProductPages/VideoGames/PS5.vue'

import TEST_HomeView from '../views/TestCounterView_Home.vue'
import TEST_AboutView from '../views/TestCounterView_About.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/all', name: 'allproducts', component: AllProductsView },
  { path: '/results', name: 'results', component: SearchResultsView, props: true },
  { path: '/firetv', name: 'firetv', component: FireTVView },
  { path: '/pedestalfan', name: 'pedestalfan', component: PedestalFanView },
  { path: '/gatoradebottle', name: 'gatoradebottle', component: GatoradeBottleView },
  { path: '/ps5', name: 'ps5', component: PS5View },
  { path: '/TEST_Home', name: 'TEST_Home', component: TEST_HomeView },
  { path: '/TEST_About', name: 'TEST_About', component: TEST_AboutView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
