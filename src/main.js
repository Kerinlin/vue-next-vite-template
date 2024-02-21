import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router/index';
import App from './App.vue';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
