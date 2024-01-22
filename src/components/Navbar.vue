<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- index inside :index="index" is a reference to the index JavaScript variable that's currently in scope because of the v-for directive. -->
        <NavbarLink v-for="(page, index) in publishedPages" class="nav-item" :key="index" :page="page" :index="index"
          :isActive="activePage === index" @activated="$emit('activated')" />
      </ul>
      <button class="btn btn-primary" @click.prevent:="changeTheme()">
        Toggle theme
      </button>
    </div>
  </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'

export default {
  data() {
    return {
      theme: 'light',
    }
  },
  props: ['pages', 'activePage'],
  components: {
    NavbarLink,
  },
  computed: {
    publishedPages() {
      return this.pages.filter(page => page.published)
    }
  },
  created() {
    this.getThemeSetting();
  },
  methods: {
    changeTheme() {
      let theme = 'light'
      if (this.theme === 'light') {
        theme = 'dark'
      }
      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem('theme', this.theme)
    },
    getThemeSetting() {
      let storedTheme = localStorage.setItem('theme', this.theme);
      if (!storedTheme) {
        return;
      };
      this.theme = storedTheme;
    }
  },
}
</script>