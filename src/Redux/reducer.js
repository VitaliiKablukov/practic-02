import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: todo => ({
        payload: {
          id: nanoid(),
          ...todo,
        },
      }),
    },
    deleteTodo: (state, { payload }) =>
      state.filter(todo => todo.id !== payload),
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
