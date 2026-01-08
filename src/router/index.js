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
      component: () => import('@/views/AboutView.vue'),
      meta:{
        title: (route) => 'About'
      }
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/views/ComputedView.vue'),
      meta:{
        title: (route) => 'Computed'
      }
    },
    {
      path: '/cssbinding',
      name: 'cssbinding',
      component: () => import('@/views/CssBindingView.vue'),
      meta:{
        title: (route) => 'Cssbinding'
      }
    },
    {
      path: '/databind',
      name: 'databind',
      component: () => import('@/views/DatabindView.vue'),
      meta:{
        title: (route) => 'Databind'
      }
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: () => import('@/views/VforView.vue'),
      meta:{
        title: (route) => 'Vfor'
      }
    },
    {
      path: '/vif',
      name: 'vif',
      component: () => import('@/views/VifView.vue'),
      meta:{
        title: (route) => 'Vif'
      }
    },
    {
      path: '/von',
      name: 'von',
      component: () => import('@/views/VonView.vue'),
      meta:{
        title: (route) => 'Von'
      }
    },
    {
      path: '/vshow',
      name: 'vshow',
      component: () => import('@/views/VshowView.vue'),
      meta:{
        title: (route) => 'Vshow'
      }
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('@/views/WatchView.vue'),
      meta:{
        title: (route) => 'Watch'
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
  console.log('honnan:', from);
  console.log('hova:', to);
  
  const programName = import.meta.env.VITE_APP_TITLE;
  document.title = `${programName} - ` + to.meta.title(to);
  //mehetsz tovább az oldalra
  next();
});

export default router
