<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="work in works" :key="work.title">
        <v-card class="mx-2 my-2">
          <a target= "_blank" :href="work.url"><v-card-media :src="work.img" height="200px">
          </v-card-media></a>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ work.title }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue" @click="openDialog(work)">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <a target= "_blank" :href="currentDialog.url"><v-card-media :src="currentDialog.img" height="200px">
        </v-card-media></a>
        <v-card-title>
          <span class="headline">{{ currentDialog.title }}</span>
        </v-card-title>
        <v-card-text>
          <h2 class="text-xs-left">Background</h2>
          <p class="text-xs-left">{{ currentDialog.background }}</p>
          <h2 class="text-xs-left">My Work</h2>
          <p class="text-xs-left">{{ currentDialog.work }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {
      works: [
        { title: 'HoneycombData Inc.', subtitle: 'Official Website', url: 'http://hcdatainc.com', img: '/static/images/honeycomb.png', background: 'HoneycombData builds high-performance all-flash storage clusters. It\'s distributed architecture allows a storage cluster to horizontally scale out based on commodity servers. Besides the storage engine, users can manage the cluster and monitor system performance through a web-based UI.', work: 'I am responsible for the development of the web-based application for cluster management and data monitoring. For the past year, I have improved it from many aspects. For example, re-design the layout and design of the UI, re-built front-end project with Angular v5+ and Material Design, apply functional reactive programming to Node.js API design, re-design data processing pipeline with NoSql database.' },
        { title: 'Xiaobandeng', subtitle: 'Marketing Website', url: 'http://xiaobandeng.palmdrive.cn', img: '/static/images/xiaobandeng.png', background: 'Xiaobandeng is a mobile app developed by PalmDrive engineers. It is a platform for mentors to give online talks and communicate with students.', work: 'This is the homepage I designed using Ionic and AngularJS. I also made it responsive to different media queries. Besides this, I also worked on building a web-based managing system for the app.' },
        { title: 'PalmDrive Inc.', subtitle: 'Official Website', url: 'http://palmdrive.cn', img: '/static/images/palmdrive.png', background: 'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology. I have worked at PalmDrive as an intern web developer for 5 months. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.', work: 'My main contribution on this website was providing multi-language support using Rails Internationalization API and Angular-translate. I also did several front-end design and back-end works.' }
      ],
      dialog: false,
      currentDialog: {}
    }
  },
  methods: {
    openDialog (data) {
      this.currentDialog = data
      this.dialog = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card__media {
  border-bottom: 1px solid #ddd;
}
</style>
