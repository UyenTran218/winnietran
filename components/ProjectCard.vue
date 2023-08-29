<template>
  <v-card class="my-6" max-width="550px">
    <!--Project overview-->
      <v-carousel hide-delimiters show-arrows="hover" height="200px">
        <v-carousel-item>
          <v-img :src="imgPath" cover style="filter: grayscale(1);"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img :src="imgPath1" cover style="filter: grayscale(1);"></v-img>
        </v-carousel-item>
        <v-carousel-item>
          <v-img :src="imgPath2" cover style="filter: grayscale(1);"></v-img>
        </v-carousel-item>
      </v-carousel>

    <v-card-title class="card-title my-4"> {{ title }} </v-card-title>
    <v-card-subtitle class="my-3"> {{ subtitle }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="#94ada3" variant="tonal" :href="projectUrl" target="_blank"> Github </v-btn>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <!--Project description-->
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="card-text">
          <p>
            {{ description }}
          </p>
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
    imgPath1: String,
    imgPath2: String,
    title: String,
    subtitle: String,
    description: String,
    projectUrl: String
  },
};
</script>
<style>
.card-title {
  white-space: normal;
  text-overflow: clip;
  font-size: 18px;
  background-color: #94ada3;
  color: white;
}

.card-text {
  height: 300px;
}
</style>
  