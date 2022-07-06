import { ADD_TODO, CHANGE_TODO, DELETE_TODO, REFRESH } from "../reducers/todos-reducer";


export const refresh = (todos) => ({
  type: REFRESH,
  todos,
})

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

export const changeTodo = (todo) => ({
  type: CHANGE_TODO,
  todo,
})

