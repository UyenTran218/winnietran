<template>
  <v-card class="mx-auto ma-6" max-width="70%" >
    <v-img :src="imgPath" cover style="filter: grayscale(1);"></v-img>
    <v-card-title> {{ title }} </v-card-title>
    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="teal-darken-1" variant="tonal" :href="projectUrl" target="_blank"> Github </v-btn>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <a target="_blank" v-bind:href="description">
            {{ description }}
          </a>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false,

  }),
  props: {
    imgPath: String,
    title: String,
    subtitle: String,
    description: String,
    projectUrl: String
  },
};
</script>
  