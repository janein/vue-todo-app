export const todos = state => {
  return state.todos;
};

export const todoByIdx = state => idx => {
  return state.todos[idx];
};

export const todosCount = state => {
  return state.todos.length;
};
