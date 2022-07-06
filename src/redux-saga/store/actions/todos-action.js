import { ADD_TODO, AXIOS_ADD_TODO, AXIOS_CHANGE_TODO, AXIOS_DELETE_TODO, AXIOS_REFRESH, CHANGE_TODO, DELETE_TODO, REFRESH } from "../reducers/todos-reducer";


export const refresh = (todos) => ({
  type: REFRESH,
  todos,
})

export const axiosRefresh = () => ({
  type: AXIOS_REFRESH,
})

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
})

export const axiosAddTodo = (todo) => ({
  type: AXIOS_ADD_TODO,
  todo,
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
})

export const axiosDeleteTodo = (id) => ({
  type: AXIOS_DELETE_TODO,
  id
})

export const changeTodo = (todo) => ({
  type: CHANGE_TODO,
  todo,
})

export const axiosChangeTodo = (todo) => ({
  type: AXIOS_CHANGE_TODO,
  todo,
})


