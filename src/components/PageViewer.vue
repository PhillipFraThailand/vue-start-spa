<template>
  <div class="container">
    <h1 v-if="page" class="emphasize">{{ page.pageTitle }}</h1>
    <p v-if="page">{{ page.content }}</p>
  </div>
</template>

<script>

// Will display 3 ways of watching for changes, that account for component caching.
// 1st is watching the global $route.params.index.
// 2nd is using created lifecycle hook and adding a watcher in there.
// 3rd is passing the url param as a prop to the component from routes.js, and watching that prop.
export default {
  props: ['index'],
  // 1st way
  // watch: { // watch the url param, and when it changes, update the component.
  //   '$route.params.index': { // This is the index passed via the URL made accessible on the $route object due to vue-router plugin added in main.js
  //     fetchPage(newIndex) { // Method to run when the dependency ($route.params.index) changes.
  //       this.page = this.$pages.getSinglePage(newIndex); // Use the data store to fetch the page.
  //     },
  //   },
  // },
  created() { // lifecycle fn is not updating the component, because it is cached. So when we navigate from one page to another, that has the same component, it displays the same data, so we have to use watch.
    this.page = this.$pages.getSinglePage(this.index);

    // 2nd way
    // this.$watch(() => this.$route.params.index, (newValue, prevValue) => { // 1st argument is the fn that returns what we watch, 2nd is the fn that executes when the 1st fn returns a different value. 
    //   this.page = this.$pages.getSinglePage(newValue);
    // })
  },

  // 3rd way. This way does not watch the global $route.params, but does require additional setup in routes.
  watch: {
    index(newValue, oldValue) {
      this.page = this.$pages.getSinglePage(newValue);
    }
  },
  data() {
    return {
      page: null
    };
  }
}
</script>


<style scoped>
.emphasize {
  color: blue
}
</style>