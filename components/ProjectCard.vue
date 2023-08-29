<template>
  <v-card class="my-6 mx-2" min-width="200px">
    <!--Project overview-->
    <v-img :src="imgPath" cover style="filter: grayscale(1);"></v-img>
    <v-card-title class="card-title"> {{ title }} </v-card-title>
    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>
    <v-card-actions>
      <v-btn color="#768a82" variant="tonal" :href="projectUrl" target="_blank"> Github </v-btn>
      <v-spacer></v-spacer>
      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>
    <!--Project description-->
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
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
}
</style>
  