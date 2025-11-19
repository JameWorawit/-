import '@/assets/css/style.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import '@flaticon/flaticon-uicons/css/solid/all.css';
import '@flaticon/flaticon-uicons/css/regular/all.css';

import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
   
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ]
});

createApp(App).use(router).mount('#app');
