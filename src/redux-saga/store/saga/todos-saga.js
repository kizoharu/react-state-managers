import {put, call, takeEvery} from 'redux-saga/effects'
import { deleteData, getAllData, postData, putData } from '../../../api'
import { addTodo, changeTodo, deleteTodo, refresh } from '../actions/todos-action'
import { AXIOS_ADD_TODO, AXIOS_CHANGE_TODO, AXIOS_DELETE_TODO, AXIOS_REFRESH } from '../reducers/todos-reducer'


function* postTodoWorker() {
  const data = yield call(postData, {title: prompt(), completed: false})
  yield put(addTodo(data))
}

function* putTodoWorker({todo}) {
  const data = yield call(putData, todo)
  yield put(changeTodo(data))
}

function* loadTodoWorker() {
  const data = yield call(getAllData)
  const obj = yield call(() => data)
  yield put(refresh(obj))
}

function* delTodoWorker({id}) {
  // const dataqwe = yield call(new Promise(() => {
  //   console.log('arguments', args.id);
  // }))

  yield call(deleteData, id)
  yield put(deleteTodo(id))
}

export function* todosWatcher() {
  yield takeEvery(AXIOS_REFRESH, loadTodoWorker)
  yield takeEvery(AXIOS_DELETE_TODO, delTodoWorker)
  yield takeEvery(AXIOS_ADD_TODO, postTodoWorker)
  yield takeEvery(AXIOS_CHANGE_TODO, putTodoWorker)
}