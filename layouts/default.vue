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
  text-align: center; color: black;
}
a:link, a:visited {
  color: teal;
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
  
  