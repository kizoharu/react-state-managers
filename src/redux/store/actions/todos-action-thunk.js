import { deleteData, getAllData, postData, putData } from "../../../api"
import { addTodo, changeTodo, deleteTodo, refresh } from "./todos-action"

export const loadTodo = () => (dispatch) => {
  getAllData().then(res => dispatch(refresh(res)))
}

export const postTodo = () => (dispatch) => {
  const data = postData({title: prompt(), completed: false})
  data.then(res => dispatch(addTodo(res)))
}

export const putTodo = (data) => (dispatch) => {
  putData(data)
  dispatch(changeTodo(data))
}

export const delTodo = (id) => (dispatch)  => {
  deleteData(id)
  dispatch(deleteTodo(id))
}