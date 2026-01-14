import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: (route) => 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
      meta:{
        title: (route) => 'About'
      }
    },
    {
      path: '/globaliscomponent',
      name: 'globaliscomponent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/GlobalisComponentView.vue'),
      meta:{
        title: (route) => 'Globális komponens'
      }
    },
    {
      path: '/lokaliscomponent',
      name: 'lokaliscomponent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LokalisComponentView.vue'),
      meta:{
        title: (route) => 'Lokális komponens'
      }
    },
    {
      path: '/componentkommunikacio',
      name: 'componentkommunikacio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ComponentKommunikacioView.vue'),
      meta:{
        title: (route) => 'Komponens kommunikáció'
      }
    },
    {
      path: '/szorzo',
      name: 'szorzo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SzorzoView.vue'),
      meta:{
        title: (route) => 'Szorzó'
      }
    },
    {
      path: '/slot',
      name: 'slot',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SlotsView.vue'),
      meta:{
        title: (route) => 'Komponens kommunikáció'
      }
    },
    {
      path: '/tegla',
      name: 'tegla',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/TeglaView.vue'),
      meta:{
        title: (route) => 'Tégla'
      }
    },
    { path: "/:pathMatch(.*)*", 
      name: "NotFound", 
      component: () => import('@/views/404.vue'),
      meta:{
        title: (route) => '404'
      }
    },
  ],
})

router.beforeEach((to,from, next) => {
  document.title = 'Valami - ' + to.meta.title(to);
  //mehetsz tovább az oldalra
  next();
});

export default router
