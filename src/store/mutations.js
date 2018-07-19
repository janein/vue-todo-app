import Vue from 'vue';

export const addTodo = state => {
  state.todos.push({
    title: '',
    done: false,
  });
};

export const toggleTodoState = (state, idx) => {
  Vue.set(state.todos, idx, {
    ...state.todos[idx],
    done: !state.todos[idx].done,
  });
};

export const updateTodo = (state, { idx, todo }) => {
  Vue.set(state.todos, idx, todo);
};

export const removeResolvedTodos = state => {
  state.todos = state.todos.filter(item => !item.done);
};

export const removeTodo = (state, idx) => {
  state.todos.splice(idx, 1);
};

export const createTodo = (state, todo) => {
  state.todos.push(todo);
};
