import {createApp, VueElement} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Build tools will import this into our app so we can use it anywhere.

createApp(App).mount('#app')