<template>
  <Navbar 
  :pages="pages"
  :active-page="activePage"
  :nav-link-click="(index) => activePage = index"
  >
  <h1>hej</h1>
</Navbar>
  <PageViewer
      :page="pages[activePage]"
  >
  </PageViewer> 

</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';

  export default {
    components: {
      Navbar,
      PageViewer,
    },
     data() {
      return {
        activePage: 0,
        theme: 'light',
        pageTitle: 'Hello Vue',
        content: 'Welcome to my first Vue app!',
        pages: [
          {
            link: { text: 'Home', url: 'home.html' },
            pageTitle: 'Home Page',
            content: 'This is Home content'
          },
          {
            link: { text: 'About', url: 'about.html' },
            pageTitle: 'About Page',
            content: 'This is About content'
          },
          {
            link: { text: 'Contact', url: 'contact.html' },
            pageTitle: 'Contact Page',
            content: 'This is Contact content'
          },
        ]
      };
    },
  }
</script>