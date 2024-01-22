<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.pageContent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default(rawProps) {
        return {
          pageTitle: 'fallback pageTitle',
          pageContent: 'fallback pageContent',
          ...rawProps,
        }
      }
    },
  }
}
</script>


<style scoped>
.emphasize {
  color: blue
}
</style>