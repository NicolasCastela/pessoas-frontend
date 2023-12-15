<template>
  <v-container>
    <h1>Adicionar tarefas</h1>
    <div
      v-for="tarefa in tarefas"
      :key="tarefa.id"
      class="d-flex flex-column h-25 w-50"
    >
      <v-text-field v-bind="tarefa" label="Task" class="w-50"></v-text-field>
      <v-btn @click="criarTask(tarefa)" class="w-50">Enviar</v-btn>
    </div>
  </v-container>

  <div
    v-for="tarefa in tarefas"
    :key="tarefa.id"
    class="d-flex flex-column h-25 w-50"
  >
    <h1>{{ tarefa.atividade }}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      tarefas: [],
    };
  },
  mounted() {
    this.consumirTask();
  },
  methods: {
    async consumirTask() {
      try {
        const response = await fetch("http://localhost:3000/task");
        if (!response.ok) {
          throw new Error("ocorreu um erro");
        }
        const data = await response.json();
        this.tarefas = data;
      } catch (err) {
        console.error(err);
      }
    },
    async criarTask(tarefa) {
      try {
        const response = await fetch("http://localhost:3000/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            atividade: tarefa.atividade,
          }),
        });
        if (!response.ok) {
          throw new Error("ocorreu algum erro ai meu chapa");
        } else {
          console.log("criada a TASK com sucesso");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.consumirTask();
      }
    },
  },
};
</script>

<style scoped></style>
