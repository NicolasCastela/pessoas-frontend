<template>
  <v-container>
    <div class="d-flex flex-wrap justify-center">
      <v-card
        id="cardPessoas"
        v-for="pessoa in pessoas"
        :key="pessoa.id"
        class="ma-2"
        style="max-width: 300px"
      >
        <v-card-title>{{ pessoa.name }}</v-card-title>
        <v-card-subtitle>{{ pessoa.idade }} anos</v-card-subtitle>
        <v-card-actions>
          <v-btn
            variant="tonal"
            color="primary"
            @click="deleteForm(pessoa.id)"
            text
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pessoas: [],
      id: "",
    };
  },
  mounted() {
    this.fetchPessoas();
  },
  methods: {
    async fetchPessoas() {
      try {
        const response = await fetch("http://localhost:3000/pessoas");
        if (!response.ok) {
          throw new Error("Ocorreu algum erro");
        }
        const data = await response.json();
        this.pessoas = data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteForm(id) {
      try {
        const response = await fetch(`http://localhost:3000/pessoas/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Ocorreu um erro");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.fetchPessoas();
      }
    },
  },
};
</script>

<style scoped>
#cardPessoas {
  height: 150px;
  width: 150px;
  margin-right: 50px;
}

.v-card-title {
  font-size: 1.2em;
  font-weight: bold;
}

.v-card-subtitle {
  color: grey;
}

.v-card-actions {
  justify-content: flex-end;
}
</style>
