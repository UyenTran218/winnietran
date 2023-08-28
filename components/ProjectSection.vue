<template>
  <v-card color="teal-darken-3" variant="text" class="pa-10" id="projects">
    <h1 class="ma-12 py-16 section-title" style="font-size: 34px;">Projects</h1>
    <!--Project cards-->
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-space-around">
        <ProjectCard imgPath="./showcase1.JPG" title="Business Landing Page" subtitle="Nuxt3 + Vuetify"
          projectUrl="https://github.com/UyenTran218/Movusx-app-nuxt-3"
          description="Designed and developed a cutting-edge Business Landing Page using Vuetify's material design and Nuxt.js's server-side rendering capabilities. The aim of this project was to create an aesthetically pleasing, yet highly functional page that serves as the first point of contact between the business and potential clients" />
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-space-around">
        <ProjectCard imgPath="./showcase2.JPG" title="POS System Interface" subtitle="Typescript + Vue3 + Vuetify"
          projectUrl="https://github.com/UyenTran218/Restaurant-app"
          description="Developed a streamlined POS (Point-of-Sale) system tailored for a restaurant setting. This web application empowers restaurant staff to easily manage orders, from item selection to billing and print/save functionalities. The application is built with Nuxt.js using TypeScript for type safety, and it incorporates Vuetify’s Material Design for an elegant, yet intuitive, user interface." />
      </v-col>
    </v-row>

  </v-card>
</template>