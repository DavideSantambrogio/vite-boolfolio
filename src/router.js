import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectListPage from './pages/ProjectListPage.vue';
import ProjectDetailPage from './pages/ProjectDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/projectlist',
      name: 'projectlist',
      component: ProjectListPage
    },
    {
      path: '/project/:slug',
      name: 'projectDetail',
      component: ProjectDetailPage
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFoundPage,
    },
  ]
});

export { router };