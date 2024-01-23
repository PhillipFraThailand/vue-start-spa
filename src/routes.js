// Since we don't have a backing server side API we use createWebHashHistory when creating our router
import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
  history: createWebHashHistory(), // How the history is going to be treated in this router.
  routes: [ // Define the route matching to components.
    { path: '/:index?', component: PageViewer }, // :index is a dynamic url parameter that the router will look for when accessing '/'. Adding ? makes the url param optional.
    { path: '/create', component: CreatePage },
  ]
})


export default router;