<template>
  <v-app-bar style="font-family: Roboto Mono, monospace"
    class="px-4 py-2 text-center w-100 bg-teal-darken-4" scroll-behavior="fade-image elevate" image="./banner.jpg" fixed>
    <!--App bar icon-->
    <v-app-bar-nav-icon v-if="isMobile" variant="text" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>

    <!--App title-->
    <v-app-bar-title class="d-flex w-100 align-center">
      <strong style="font-size: 40px; fon">WINNIE</strong>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!--Tab menu-->
    <v-tabs v-if="!isMobile" centered>

      <v-tab to="#projects">
        Projects
      </v-tab>
      <v-tab to="#about">
        About
      </v-tab>
      <v-tab to="#contact">
        Contact
      </v-tab>
    </v-tabs>

  </v-app-bar>

  <!--Navigation drawer-->
  <v-navigation-drawer class="py-6" style="font-family: Roboto Mono, monospace" v-model="drawer" temporary app
    width="150">
    <v-list class="py-8" color="white">
      <v-list-item to="#projects">
        <v-list-item-title style="color: black;">Projects</v-list-item-title>

      </v-list-item>
      <v-list-item to="#about">
        <v-list-item-title style="color: black;">About</v-list-item-title>

      </v-list-item>
      <v-list-item to="#contact">
        <v-list-item-title style="color: black;">Contact</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    isMobile: false,
  }),
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    //track window size
    onResize() {
      this.isMobile = window.innerWidth < 900;
    },
  },
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>