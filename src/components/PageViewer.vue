<template>
  <div class="container">
    <h1 v-if="page" class="emphasize">{{ page.pageTitle }}</h1>
    <p v-if="page">{{ page.content }}</p>
  </div>
</template>

<script>

export default {
  // watch: { // watch the url param, and when it changes, update the component.
  //   '$route.params.index': { // This is the index passed via the URL made accessible on the $route object due to vue-router plugin added in main.js
  //     fetchPage(newIndex) { // Method to run when the dependency ($route.params.index) changes.
  //       this.page = this.$pages.getSinglePage(newIndex); // Use the data store to fetch the page.
  //     },
  //   },
  // },
  created() { // lifecycle fn is not updating the component, because it is cached. So when we navigate from one page to another, that has the same component, it displays the same data, so we have to use watch.
    // Combine the url param with the storage object, to fetch the page the REST way.
    this.page = this.$pages.getSinglePage(this.$route.params.index);
    this.$watch(() => this.$route.params.index, (newValue, prevValue) => { // 1st argument is the fn that returns what we watch, 2nd is the fn that executes when the 1st fn returns a different value. 
      this.page = this.$pages.getSinglePage(newValue);
    })
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