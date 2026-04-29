import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductView from '../views/ProductView.vue'
import ProfileView from '../views/ProfileView.vue'
import ProfileInfo from '../views/ProfileInfo.vue'
import ProfileSettings from '../views/ProfileSettings.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/catalog', component: CatalogView },
  { path: '/catalog/:id', component: ProductView },
  {
    path: '/profile',
    component: ProfileView,
    children: [
      { path: 'info', component: ProfileInfo },
      { path: 'settings', component: ProfileSettings }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router