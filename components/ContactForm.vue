<template >
    <div class="contact-form" id="contact">
        <h3>Get In Touch</h3>
        <br/>
        <div class="mx-auto my-1">
        <!--Contact form-->            
            <v-form action="https://formsubmit.co/kuyen218@gmail.com" method="POST">
                <v-text-field density="compact" variant="underlined" name="name" placeholder="Name" required></v-text-field>
                <v-text-field density="compact" variant="underlined"  name="email" placeholder="Email" type="email"
                    required></v-text-field>
                <v-textarea density="compact" variant="underlined"  rows="5" name="message" placeholder="Message"
                    required></v-textarea>
                <v-btn type="submit" class="px-2 mt-10" color="#94ada3">
                    Send Message
                    <v-icon class="ma-2" right small>mdi-send</v-icon>
                </v-btn>
            </v-form>
        </div>
    </div>
    
</template>

<style scoped>
.contact-form{
  font-family: Roboto Mono, monospace;
}

.input {
    width: 100%;
    border: 1px double none;
    background-color: #edede9;
    border-radius: 3px;
    font-size: 1.3vw;
}
</style>