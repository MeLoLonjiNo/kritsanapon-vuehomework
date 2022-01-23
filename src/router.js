import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Main from './pages/main.vue';
import Contact from './pages/contact.vue';
const routes = [
  { path: '/', name: 'main', component: Main },
  { path: '/contact', name: 'contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
