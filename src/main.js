import {createApp, VueElement} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Build tools will import this into our app so we can use it anywhere.
import $bus from './utils/Events.js';


const app = createApp(App);

// globalProperties allows us to add properties to the global Vue instance. 
app.config.globalProperties.$bus = $bus; // So now all components are going to have this $but property.

app.mount('#app')