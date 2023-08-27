<template>
  <v-footer class="d-flex flex-column footer">
    <v-row class="bg-teal-lighten-5 d-flex w-100 py-16 px-4">
      <v-col class="ma-4">
        <h2>Contact Info</h2>
        <br />
        <v-row class="ma-4" clipped>
          
          <p><v-icon color="teal" class="mr-6" size="small">mdi-map-marker-outline</v-icon>Adelaide, South Australia</p>
        </v-row>

        <v-row class="ma-4">
          
          <p><v-icon color="teal" class="mr-6" size="small">mdi-gmail</v-icon>contact@winnietran.net</p>
        </v-row>

        <v-row class="ma-4">
          
          <p><v-icon color="teal" class="mr-6" size="small">mdi-web</v-icon>winnietran.net</p>
        </v-row>

        <br />
        <h2>Connect With Me</h2>
        <br />

        <a target="_blank" v-bind:href="social.url" v-for="social in socials">
          <v-btn icon variant="plain">
            <v-icon color="teal-darken-3" size="26px">{{ social.icon }}</v-icon>
          </v-btn>
        </a>
      </v-col>
      <v-col class="ma-4">
        <contact-form />
      </v-col>

    </v-row>
    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — by<strong> Winnie Tran</strong>
    </div>
  </v-footer>
</template>
<script>
import ContactForm from './ContactForm.vue';

export default {
  data: () => ({
    socials: [
      { name: "linkedin", icon: "mdi-linkedin", url: "https://www.linkedin.com/in/uyen-tran-winnie91/" },
      { name: "twitter", icon: "mdi-twitter", url: "https://twitter.com/kuyen218" },
      { name: "github", icon: "mdi-github", url: "https://github.com/UyenTran218" },
    ],
  }),
  components: { ContactForm }
}
</script>
<style>
.footer {
  font-family: Roboto Mono, monospace;

}

</style>