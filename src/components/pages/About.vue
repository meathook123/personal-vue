<template>
  <v-container>
    <v-layout row wrap justify-center >
      <v-flex xs12 sm12>
        <v-card class="elevation-0 transparent">
          <h1>About Me</h1>
          <v-card-text>
            <p class="text-xs-left">Hi! My name is Ruiyang Sun, a full-stack software engineer with extensive experience in developing web applications. I'm also interested in new technologies such as AI and blockchain and always try to learn more.</p>
            <p class="text-xs-left">By far, I'm a software engineer at Dropbox and work mostly around <a target= "_blank" href="https://dropbox.com">dropbox.com</a> and <a target= "_blank" href="https://dropbox.design">dropbox.design</a>.</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0 transparent">
          <h2>Experience</h2>
          <v-card-text>
            <v-list two-line class="transparent">
              <v-list-tile avatar v-for="job in jobs" :key="job.company">
                <v-list-tile-content>
                  <v-list-tile-title>{{ job.company }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ job.title }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card class="elevation-0 transparent">
          <h2>About This Website</h2>
          <v-card-text>
            <p class="text-xs-left">This website was rebuilt many times, from simple HTML, jQuery to AngularJS. The current version is built on Vue.js with Material Design. This has always been the place where I try to apply some new technologies.</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => {
    return {
      jobs: [
        { company: 'Dropbox', title: 'Software Engineer (Aug 2019 - present)' },
        { company: 'HoneycombData Inc.', title: 'Software Engineer (Sep 2016 - Jul 2019)' },
        { company: 'Oracle Corporation', title: 'Web Developer (May 2016 - Aug 2016)' },
        { company: 'PalmDrive Inc.', title: 'Web Developer (Jan 2016 - May 2016)' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list__tile__title {
  border-bottom: 1px solid #ddd;
}
</style>
