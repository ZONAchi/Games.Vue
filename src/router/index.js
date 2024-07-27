import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BmiView from '../views/BmiVue.vue'
import DiceView from '../views/DiceGame.vue'
import GuessView from '../views/GuessingGame.vue'
import WeatherView from '../views/WeatherCards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/bmi',
      name: 'bmi',
      component: BmiView
    },
    {
      path: '/dice',
      name: 'dice',
      component: DiceView
    },
    {
      path: '/guess',
      name: 'guess',
      component: GuessView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
