import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action)
      state.todos.push(action.payload)
    },
    deleteTodo(state, {payload: id}) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
  },
})

export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer;

