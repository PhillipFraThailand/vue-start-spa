<template>
  <Navbar :pages="pages" :active-page="activePage" :nav-link-click="(index) => activePage = index" />
  <!-- <PageViewer v-if="pages.length > 0" :page="pages[activePage]" /> -->

  <!--
    Creating a form to create pages.
    page-created will be a callback.
    It will be passed a method pageCreated defined in our method options
    The callback will take a page in, and add it to the pages array.
  -->
  <CreatePage :page-created="pageCreated" />
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