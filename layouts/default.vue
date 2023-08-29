<template>
    <v-app>
      <NavigationMenu />
      <v-card style="font-family: Roboto Mono, monospace" class="pb-12">
        <v-window>
          <v-window-item>
            <v-container fluid>
              <slot />
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>
      <v-divider color="#94ada3" class="border-opacity-75" thickness="6"></v-divider>
      <Footer />
    </v-app>
  </template>
<style>
.section-title{
  text-align: center; 
  color: #4a5752;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    font-size: calc(15px + 0.390625vw);
}
p {
  text-align: justify;
}

</style>
  
  