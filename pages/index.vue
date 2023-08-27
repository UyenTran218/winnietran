<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12">
        <v-sheet>
          <ProjectSection/>
          <br />
          <AboutSection/>
          <br />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
import ProjectSection from '../components/ProjectSection.vue';
import AboutSection from '../components/AboutSection.vue';

</script>
