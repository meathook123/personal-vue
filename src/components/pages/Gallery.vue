<template>
  <v-container>
    <v-layout row wrap justify-center >
      <v-flex xs12 sm12>
        <v-card class="elevation-0 transparent">
          <h1>Gallery</h1>
          <v-card-text>
            <p class="">I like graphic design and sketching. Here are some old sketching work I have done.<br/>Some of these were painted directly on T-shirt, they are wearable!</p>
            <v-carousel hide-delimiters>
              <v-carousel-item v-for="(pic,i) in pics" :src="pic.src" :key="i"></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Gallery',
  data: () => {
    return {
      pics: [
        { src: '/static/images/gallery/1.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/2.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/3.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/4.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/5.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/6.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/7.jpg', title: 'Software Engineer (Sep 2016 - present)' },
        { src: '/static/images/gallery/8.jpg', title: 'Software Engineer (Sep 2016 - present)' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  max-height: 500px;
  max-width: 650px;
  margin: 0 auto;
}
</style>
