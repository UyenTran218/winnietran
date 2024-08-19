<template>
  <v-footer class="d-flex flex-column footer">
    <v-row class="d-flex w-100 py-16 px-4 ma-1">
      <!--Left column-->
      <v-col class="ma-4">
        <v-sheet min-width="312px" class="footer">
          <!--Contact info section-->
          <h3>Contact Info</h3>
          <br />
          <v-row class="my-4" v-for="address in addresses">
            <v-col cols="2"><v-icon color="#94ada3" class="mr-6" size="small">{{ address.icon }}</v-icon></v-col>
            <v-col>
              <p>{{ address.detail }}</p>
            </v-col>
          </v-row>

          <br />
          <!--Connect section-->
          <h3>Connect With Me</h3>
          <br />
          <v-row class="my-4">
            <a target="_blank" v-bind:href="social.url" v-for="social in socials">
              <v-btn class="mr-4" icon variant="text">
                <v-icon color="#94ada3" size="26px">{{ social.icon }}</v-icon>
              </v-btn>
            </a>
          </v-row>
        </v-sheet>
      </v-col>
      <!--Right column-->
      <v-col class="ma-4">
        <contact-form />
      </v-col>
    </v-row>

    <v-row>
      <div class="px-4 py-4 text-center w-100">
        {{ new Date().getFullYear() }} — by<strong> Winnie Tran</strong>
      </div>
    </v-row>

  </v-footer>
</template>
<script>
import ContactForm from './ContactForm.vue';

export default {
  data: () => ({
    socials: [
      { name: "linkedin", icon: "mdi-linkedin", url: "https://www.linkedin.com/in/winnie-ttran/" },
      { name: "twitter", icon: "mdi-twitter", url: "https://twitter.com/kuyen218" },
      { name: "github", icon: "mdi-github", url: "https://github.com/UyenTran218" }
    ],
    addresses: [
      { icon: "mdi-map-marker-outline", detail: "Adelaide, South Australia" },
      { icon: "mdi-gmail", detail: "contact@winnietran.net" },
      { icon: "mdi-web", detail: "winnietran.net" }
    ]
  }),
  components: { ContactForm }
}
</script>
<style>
.footer {
  font-family: Roboto Mono, monospace;
  background-color: white;
}
</style>
