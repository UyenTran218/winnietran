<template>
  <v-app-bar style="font-family: Roboto Mono, monospace; background-color:#94aca1;"
    class="px-4 py-2 text-center w-100 banner" scroll-behavior="fade-image elevate" image="./banner.jpg" fixed>
    <!--App bar icon-->
    <v-app-bar-nav-icon v-if="isMobile" variant="text" @click.stop="drawer = !drawer" color="white">
    </v-app-bar-nav-icon>

    <!--App title-->
    <v-app-bar-title class="d-flex w-100 align-center">
      <strong style="font-size: 40px; color:white">WINNIE</strong>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!--Tab menu-->
    <v-tabs v-if="!isMobile" centered style=" color:white">

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
    <v-list class="py-2" color="white">
      <v-list-item>
        <v-card to="#projects" class="px-2 py-1 drawerCard" variant="plain">Projects</v-card>
      </v-list-item>
      <v-list-item>
        <v-card to="#about" class="px-2 py-1 drawerCard" variant="plain">About</v-card>
      </v-list-item>
      <v-list-item>
        <v-card to="#contact" class="px-2 py-1 drawerCard" variant="plain">Contact</v-card>
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
.banner{
  background-color: #5f6e66;
}
.drawerCard{
  color: #94ada3;
}
</style>