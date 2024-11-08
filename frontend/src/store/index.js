import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    fetchTodos({ commit }) {
      fetch('http://127.0.0.1:8000/api/todos/')
        .then(response => response.json())
        .then(data => {
          commit('setTodos', data);
        });
    }
  },
  getters: {
    todos: state => state.todos
  }
});
