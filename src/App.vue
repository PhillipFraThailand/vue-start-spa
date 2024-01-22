<template>
  <Navbar :pages="pages" :active-page="activePage" />
  <page-viewer v-if="pages.length > 0" :page="pages[activePage]"></page-viewer>
  <!-- the parent, in this case App is creating an event listener, that listens for emits of the name page-created. -->
  <!-- The event listener is passing a method that takes an argument, if the child passes one in the emit,it will be given to the parent method. -->
  <!-- Note that because the passed in a listener that runs a method that requires something, that doesn't mean that it is required to pass something in the emit so it could not get what it needs. -->
  <CreatePage @pageCreated="pageCreated" />
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

export default {
  components: {
    Navbar,
    PageViewer,
    CreatePage
  },
  created() {
    this.getPages();
    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      try {
        let res = await fetch('pages.json');
        let data = await res.json();

        this.pages = data;
      } catch (error) {
        console.log('error', error)
      }
    },
    pageCreated(pageObj) {
      console.log('pageObj', pageObj);
      this.pages.push(pageObj); // Anything that mutates data in the data option, will update the UI in Vue, where in RN it might not.
    }
  }
}
</script>