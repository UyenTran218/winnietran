<template >
    <div class="contact-form" id="contact">
        <h2 >Get In Touch</h2>

        <div class="mx-auto my-1">

            <v-form action="https://formsubmit.co/kuyen218@gmail.com" method="POST">

                <v-text-field density="compact" variant="underlined" label="Name" name="name" placeholder="Name" required></v-text-field>
                <v-text-field density="compact" variant="underlined" label="Email" name="email" placeholder="Email" type="email"
                    required></v-text-field>
                <v-textarea density="compact" variant="underlined" label="Message" rows="5" name="message" placeholder="Message"
                    required></v-textarea>
                <v-btn type="submit" class="px-2 mt-1" outlined color="teal-darken-3">
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