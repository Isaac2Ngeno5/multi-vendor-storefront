import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Amazon from '../views/Amazon.vue'
import Ebay from '../views/Ebay.vue'
import Walmart from '../views/Walmart.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/amazon', component: Amazon },
  { path: '/ebay', component: Ebay },
  { path: '/walmart', component: Walmart },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/checkout', component: Checkout },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router