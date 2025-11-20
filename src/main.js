import '@/assets/css/style.css';
import { createApp } from 'vue';
import router from '@/router/index.js'
import App from '@/App.vue';

import '@flaticon/flaticon-uicons/css/solid/all.css';
import '@flaticon/flaticon-uicons/css/regular/all.css';


createApp(App).use(router).mount('#app');
