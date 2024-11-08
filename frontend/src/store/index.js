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
      fetch(process.env.VUE_APP_API_URL + '/todos')
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

