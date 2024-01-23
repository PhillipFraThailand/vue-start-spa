<template>
  <Navbar :pages="pages" :active-page="activePage" />

  <router-view></router-view>
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