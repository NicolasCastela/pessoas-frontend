<template>
  <v-app theme="dark">
    <v-system-bar>
  <v-icon icon="mdi-wifi-strength-4"></v-icon>
  <v-icon icon="mdi-signal" class="ms-2"></v-icon>
  <v-icon icon="mdi-battery" class="ms-2"></v-icon>
  <span class="ms-2">3:13PM</span>
</v-system-bar>
    <v-app-bar :elevation="2">


      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-slot:append>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list-item :to="{ name: 'home' }" prepend-icon="mdi-home-city" link title="Home"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" :to="{ name: 'pessoas' }" link title="Pessoas"></v-list-item>
      <v-list-item prepend-icon="mdi-account-plus" :to="{ path: '/registro' }" link title="Registro"></v-list-item>
      <v-list-item prepend-icon="mdi-check-bold" :to="{ path: '/Todolist' }" link title="Lista de Tarefas"></v-list-item>
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

