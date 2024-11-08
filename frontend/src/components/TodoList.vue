<template>
  <v-container>
    <v-row>
      <v-col v-for="todo in todos" :key="todo.id" cols="12" md="4">
        <v-card class="ma-2" :elevation="todo.completed ? 12 : 4">
          <!-- Thêm màu sắc hoặc biểu tượng cho các thẻ todo -->
          <v-card-title
            :class="{ 'text-decoration-line-through': todo.completed }"
          >
            <v-icon left>{{
              todo.completed ? "mdi-check-circle" : "mdi-circle-outline"
            }}</v-icon>
            {{ todo.title }}
          </v-card-title>
          <v-card-text>
            <div v-if="todo.completed" class="text-success">
              <v-icon>mdi-check-circle-outline</v-icon> Hoàn thành
            </div>
            <div v-else><v-icon>mdi-clock-outline</v-icon> Chưa hoàn thành</div>
            <p>{{ todo.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="toggleComplete(todo)" color="primary">
              {{
                todo.completed
                  ? "Đánh dấu chưa hoàn thành"
                  : "Đánh dấu hoàn thành"
              }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  created() {
    this.$store.dispatch("fetchTodos");
  },
  methods: {
    toggleComplete(todo) {
      todo.completed = !todo.completed;
      this.$store.dispatch("updateTodoStatus", todo); // Cập nhật trạng thái todo trong store
    },
  },
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>
