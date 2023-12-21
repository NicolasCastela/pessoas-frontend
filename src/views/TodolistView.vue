<template>
  <v-container>
    <v-form @submit.prevent="createTask">
      <v-text-field
        v-model="tarefa"
        placeholder="Nova Tarefa"
        label="Nova Tarefa"
      ></v-text-field>
      <v-btn
        variant="tonal"
        color="primary"
        type="submit"
        block
        text="Submit"
      ></v-btn>
    </v-form>

    <h1>Adicionar Tarefas</h1>
    <v-card v-for="tarefa in tarefas" :key="tarefa.id">
      {{ tarefa.atividade }}
      <v-btn variant="tonal" color="warning" @click="deleteTask(tarefa.id)"
        >Apagar</v-btn
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      tarefas: [],
      tarefa: "",
      id: "",
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await fetch("http://localhost:3000/task");
        if (!response.ok) {
          throw new Error("Ocorreu algum erro");
        }
        const data = await response.json();
        this.tarefas = data;
        console.log(this.tarefas);
      } catch (error) {
        console.error(error);
      }
    },
    async createTask() {
      try {
        const response = await fetch("http://localhost:3000/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            atividade: this.tarefa,
          }),
        });
        if (!response.ok) {
          throw new Error("sei la fi, deu erro vai arrumar!");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.fetchTasks();
      }
    },
    async deleteTask(id) {
      try {
        const response = await fetch(`http://localhost:3000/task/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("ocorreu um erro");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.fetchTasks();
      }
    },
  },
};
</script>

<style scoped>
v-card {
  width: 100%;
}
</style>
