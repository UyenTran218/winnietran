<template>
    <v-app>
      <NavigationMenu />
      <v-card style="font-family: Roboto Mono, monospace">
        <v-window>
          <v-window-item>
            <v-container fluid>
              <slot />
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>
      <Footer />
    </v-app>
  </template>
<style>
.section-title{
  text-align: center; 
  color: black;
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
  
  