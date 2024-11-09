<template>
    <v-card variant="text" class="pa-10" id="about">
        <h1 class="ma-12 py-16 section-title" style="font-size: 34px;">About</h1>
        <v-row>
            <!--Profile image-->
            <v-col class="d-flex justify-space-around">
                <v-img max-width="250px" min-width="220px" src="./hdprofile.png"></v-img>
            </v-col>
            <!--About content-->
            <v-col class="d-flex justify-space-around">
                <v-sheet min-width="320px"><br /><br />
                    <p class="about-content">Hello there! I'm Winnie, a software engineer with a specialization in web development.
                    Based in Adelaide, South Australia, I thrive on turning complex challenges into simple, scalable
                    solutions.
                    <br />
                    Feel free to explore my projects or get in touch to chat about potential opportunities, tech trends, or
                    even your favorite manga!
                </p>
                </v-sheet>
                
            </v-col>
        </v-row>
    </v-card>
</template>
<style>
.about-content {
    font-size: 16px;
}</style>
