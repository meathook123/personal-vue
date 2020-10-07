<template>
  <v-footer class="darken-3" color="grey" app>
    <v-layout row wrap justify-center class="mt-3 mb-1">
      <v-flex xs12 sm12>
        <v-card class="elevation-0 transparent">
          <v-card-text>
            <div class="mb-2">
              <a v-for="icon in icons" :key="icon.name" class="icons" target= "_blank" :href="icon.url"><i :class="icon.class"></i></a>
            </div>
            <!-- &copy; Ruiyang Sun. All rights reserved. -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
      icons: [
        { name: 'linkedin', class: 'fa fa-linkedin-square', url: 'https://www.linkedin.com/in/ruiyangsun' },
        { name: 'github', class: 'fa fa-github-square', url: 'https://github.com/sunruiyang09' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  color: rgba(255, 255, 255, 0.6);
}
.icons i {
  font-size: 24px;
  margin: 0 10px;
  transition-duration: 0.5s;
}

.icons i:hover {
  color: #009688;
}
</style>
