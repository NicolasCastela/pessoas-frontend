<template>
  <v-container>
    <div class="d-flex justify-center align-center">
      <h1 class="text-red">Registro de Pessoas</h1>
    </div>
    <v-form @submit.prevent="submitForm">
      <v-alert v-model="alerta" type="warning" title="Erro ao Registrar Pessoa"
        text="Por favor insira um nome e uma idade válidos"></v-alert>
      <div class="d-flex flex-row mt-10">
        <v-text-field v-model="name" class="w-25 mr-10" label="Pessoa"></v-text-field>
        <v-text-field v-model="idade" class="w-25" label="Idade"></v-text-field>
      </div>
      <v-btn type="submit" block text="Submit"></v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      idade: "",
      id: "",
      alerta: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.name.trim() || !this.idade.trim()) {
          this.alerta = true;
        } else {
          this.alerta = false;
          const idadeNumber = Number(this.idade);
          const response = await fetch("http://localhost:3000/pessoas", {
            method: "POST",
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
          this.name = "";
          this.idade = "";
          console.log("Registro bem-sucedido!");
        }
      } catch (error) {
        console.error(error);
        console.log("Erro ao registrar pessoa!");
      }
    },
  },
};
</script>

<style scoped>
#cardPessoas {
  height: 400px;
}
</style>
