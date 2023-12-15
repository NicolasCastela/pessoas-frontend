<template>
  <v-card theme="dark" id="cardPrincipalBg" class="pa-8 d-flex justify-center flex-wrap">
    <v-responsive max-width="550">
      <v-img class="mx-auto mt-12 mb-16" max-height="140" max-width="240"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Nick.svg/512px-Nick.svg.png"></v-img>

      <v-autocomplete :items="items" append-inner-icon="mdi-microphone" auto-select-first class="flex-full-width"
        density="comfortable" item-props menu-icon="" placeholder="Search Google or type a URL"
        prepend-inner-icon="mdi-magnify" rounded theme="light" variant="solo"></v-autocomplete>

      <v-container class="text-center">
        <v-row justify="center" dense>
          <v-col v-for="(shortcut, i) in shortcuts" :key="i" cols="auto">
            <v-card :href="shortcut.href" class="pa-4" flat rel="noopener noreferer" target="_blank" width="112">
              <v-avatar :icon="shortcut.icon" color="white" variant="tonal" class="mb-2"></v-avatar>

              <div class="text-caption text-truncate" v-text="shortcut.title"></div>
            </v-card>
          </v-col>

          <v-col cols="auto">
            <v-dialog v-model="dialog" max-width="500">
              <template v-slot:activator="{ props }">
                <v-card flat width="112" v-bind="props" class="pa-4">

                  <v-avatar icon="mdi-plus" color="white" variant="tonal" class="mb-2"></v-avatar>

                  <div class="text-caption text-truncate">Add shortcut</div>
                </v-card>
              </template>

              <v-card title="Add shortcut" rounded="lg">
                <template v-slot:text>
                  <v-label class="text-caption">Name</v-label>

                  <v-text-field density="compact" variant="solo-filled" flat></v-text-field>

                  <v-label class="text-caption">URL</v-label>

                  <v-text-field density="compact" variant="solo-filled" flat></v-text-field>
                </template>

                <div class="py-4 px-5 text-end">
                  <v-btn border class="text-none me-2" color="blue" text="Cancel" variant="text"
                    @click="dialog = false"></v-btn>

                  <v-btn class="text-none" color="blue" text="Done" variant="flat" @click="dialog = false"></v-btn>
                </div>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-card>
</template>
<script>
import { defineComponent } from "vue";

// Components


export default defineComponent({
  name: "HomeView",
  data: () => ({
    dialog: false,
    items: [
      {
        prependIcon: 'mdi-clock-outline',
        title: 'Nestjs + prisma',
      },
      {
        prependIcon: 'mdi-clock-outline',
        title: 'Como fazer um deploy',
      },
      {
        prependIcon: 'mdi-clock-outline',
        title: 'O que é pipelines',
      },
      {
        prependIcon: 'mdi-clock-outline',
        title: 'Como adicionar vuetify em um projeto',
      },
      {
        prependIcon: 'mdi-clock-outline',
        title: 'Metodos responsivos max 550w',
      },
    ],
    shortcuts: [
      {
        icon: 'mdi-github',
        title: 'Pessoa API ',
        href: 'https://github.com/NicolasCastela/pessoas-api',
      },
      {
        icon: 'mdi-github',
        title: 'Dev Creator',
        href: 'https://github.com/NicolasCastela',
      },
      {
        icon: 'mdi-github',
        title: 'NestJs REST-API',
        href: 'https://github.com/NicolasCastela/NESTJS-API-RESTe',
      },
      {
        icon: 'mdi-github',
        title: 'Project Tablet',
        href: 'https://github.com/NicolasCastela/tablet',
      },
    ],
  }),

});
</script>


<style scoped>
#cardPrincipalBg {
  height: 100vh;
}
</style>
