<template>
  <v-container>

    <div class="d-flex flex-wrap justify-center">
      <v-card v-for="pessoa in pessoas" :key="pessoa.id" class="ma-2" style="max-width: 300px">
        <v-card-title>{{ pessoa.name }}</v-card-title>
        <v-card-subtitle>{{ pessoa.idade }} anos</v-card-subtitle>
        <v-card-subtitle> ID:{{ pessoa.id }} </v-card-subtitle>
        <v-card-actions>
          <v-btn variant="tonal" color="primary" @click="deleteForm(pessoa.id)" text> Delete </v-btn>
          <v-btn variant="tonal" color="warning" @click="openEditDialog(pessoa)"> Editar </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="600">
        <v-form @submit.prevent="updatePessoas">
          <div class="d-flex flex-row mt-10">
            <v-card id="classeGeral">
              <v-text-field v-model="name" label="Nome"></v-text-field>
              <v-text-field v-model="idade" label="Idade"></v-text-field>
              <v-card-actions>
                <v-btn variant="tonal" type="submit" color="green" block text="Salvar"></v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-form>
      </v-dialog>
      <div>

      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pessoas: [],
      id: "",
      idade: "",
      name: "",
      dialog: false,
      pessoaEdit: null,
      search: '',
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
    openEditDialog(pessoa) {
      this.name = pessoa.name;
      this.idade = pessoa.idade;
      this.pessoaEdit = pessoa;
      this.dialog = true;
    },
    async updatePessoas() {
      try {
        const idadeNumber = Number(this.idade);
        const response = await fetch(`http://localhost:3000/pessoas/${this.pessoaEdit.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            idade: idadeNumber,
          }),
        });
        if (!response.ok) {
          throw new Error("Ocorreu algum erro");
        }
        this.dialog = false;
        console.log("Registro bem-sucedido!");
      } catch (error) {
        console.error(error);
        console.log("Erro ao registrar pessoa!");
      } finally {
        this.fetchPessoas();
      }
    }
  },
};
</script>

<style scoped>
#cardPessoas {
  height: 150px;
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

#classeGeral {
  width: 800px;
}
</style>
