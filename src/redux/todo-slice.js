import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action);
      state.todos.push(action.payload);
    },
    deleteTodo(state, { payload: id }) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    incrementLikes(state, { payload: id }) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            likes: todo.likes + 1,
          };
        }
        return todo;
      });
    },

    decrementLikes(state, { payload: id }) {
      state.todos = state.todos.map(todo => {
        if (todo.id === id) {
          if (todo.likes - 1 < 0) return todo;
          return {
            ...todo,
            likes: todo.likes - 1,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, incrementLikes, decrementLikes } =
  todosSlice.actions;
export default todosSlice.reducer;
