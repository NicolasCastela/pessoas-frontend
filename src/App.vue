<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list-item
        :to="{ name: 'home' }"
        prepend-icon="mdi-home-city"
        link
        title="Home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        :to="{ name: 'pessoas' }"
        link
        title="Pessoas"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-plus"
        :to="{ path: '/registro' }"
        link
        title="Registro"
      ></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      drawer: true,
    };
  },
};
</script>
/* eslint-disable */
