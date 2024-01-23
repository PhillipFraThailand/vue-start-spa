import {createApp, VueElement} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Build tools will import this into our app so we can use it anywhere.
import $bus from './utils/Events';
import router from './routes'
import $pages from './data'


const app = createApp(App);

app.use(router); // Use router plugin. This will allow us to use the router in our app with this.$route so this.$route.params.index will give us the index param in the url if it exists.

// globalProperties allows us to add properties to the global Vue instance. 
app.config.globalProperties.$bus = $bus; // So now all components are going to have this $but property.
app.config.globalProperties.$pages = $pages; // So now all components are going to have this $pages property.

app.mount('#app')