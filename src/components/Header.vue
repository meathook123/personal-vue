<template>
  <div>
    <v-navigation-drawer fixed :mini-variant="drawer" app>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="static/images/profile.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Ruiyang Sun</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="!drawer">
              <v-btn icon @click.native.stop="drawer = !drawer">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-tooltip right v-for="nav in navs" :key="nav.title" :disabled="!drawer">
          <v-list-tile slot="activator" @click="goTo(nav.path)">
            <v-list-tile-action>
              <v-icon>{{ nav.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <span>{{ nav.title }}</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="drawer" class="hidden-md-and-down"></v-toolbar-side-icon>
      <v-menu offset-y class="hidden-lg-and-up">
        <v-btn flat icon slot="activator"><v-icon>menu</v-icon></v-btn>
        <v-list>
          <v-list-tile v-for="nav in navs" :key="nav.title" @click="goTo(nav.path)">
            <v-list-tile-title><v-icon>{{ nav.icon }}</v-icon>{{ nav.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      navs: [
        { title: 'Work', icon: 'dashboard', path: '/' },
        { title: 'Gallery', icon: 'color_lens', path: '/gallery' },
        { title: 'About', icon: 'account_box', path: '/about' }
      ],
      msg: 'header',
      drawer: false
    }
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
