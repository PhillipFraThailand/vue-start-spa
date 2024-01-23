// Since we don't have a backing server side API we use createWebHashHistory when creating our router
import { createRouter, createWebHashHistory } from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
  history: createWebHashHistory(), // How the history is going to be treated in this router.
  routes: [ // Define the route matching to components.
    // :index is an url parameter. The router will look for it when accessing '/' ? in front makes the url param optional.
    // Adding props:true will make the router pass the url parameters as props. This way 
    { path: '/:index?', component: PageViewer, props: true }, 
    { path: '/create', component: CreatePage },
  ]
})


export default router;