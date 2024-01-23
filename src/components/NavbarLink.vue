<template>
  <li>
    <!-- router-links are provided globally due to vue-router plugin. They do not use href, but we can bind a value to ':to=""'. 
      So we want the link to go to the index of the page 
    -->
    <router-link class="nav-link" :class="activeClasses" aria-current="page" :to="`/${index}`"
      :title="`This link goes to the ${page.pageTitle} page`">
      {{ page.link.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['page', 'isActive', 'index'],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    }
  }
}
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>