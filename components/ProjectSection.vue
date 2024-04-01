<template>
  <v-card variant="text" class="py-10" id="projects">
    <h1 class="ma-12 py-16 section-title" style="font-size: 30px;">Projects</h1>
    <!--Project cards-->
    <v-row>
      <v-col cols="12" md="6">
        <ProjectCard imgPath="./showcase1.JPG" imgPath1="./showcase11.JPG" imgPath2="./showcase12.JPG" title="Business Landing Page" subtitle="Nuxt3 + Vuetify"
          projectUrl="https://github.com/UyenTran218/Movusx-app-nuxt-3"
          description="Cutting-edge Business Landing Page using Vuetify's material design and Nuxt.js's server-side rendering capabilities. The aim of this project was to create an aesthetically pleasing, yet highly functional page that serves as the first point of contact between the business and potential clients" />
      </v-col>
      <v-col cols="12" md="6">
        <ProjectCard imgPath="./showcase2.JPG" imgPath1="./showcase21.JPG" imgPath2="./showcase22.JPG" title="POS System Interface" subtitle="Typescript + Vue3 + Vuetify"
          projectUrl="https://github.com/UyenTran218/Restaurant-app"
          description="Streamlined POS (Point-of-Sale) system tailored for a restaurant setting. This web application empowers restaurant staff to easily manage orders, from item selection to billing and print/save functionalities. The application is built with Nuxt.js using TypeScript for type safety, and it incorporates Vuetify’s Material Design for an elegant, yet intuitive, user interface." />
      </v-col>
      <v-col cols="12" md="6">
        <ProjectCard imgPath="./showcase31.JPG" imgPath1="./showcase32.JPG" imgPath2="./showcase33.JPG" title="Pizza Restaurant Website" subtitle="ReactJS + Tailwind CSS"
          projectUrl="https://github.com/UyenTran218/restaurant-web-app"
          description="Dynamic Pizza Restaurant Website crafted with ReactJS and Tailwind CSS. Users can easily view menu, find location, and more. Modern design for seamless browsing and ordering experience." />
      </v-col>
    </v-row>

  </v-card>
</template>