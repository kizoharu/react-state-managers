import {put, takeEvery} from 'redux-saga/effects'
import { decrement, increment } from '../actions/counter-action'
import { ASYNC_DECREMENT, ASYNC_INCREMENT } from '../reducers/counter-reducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(increment())
}

function* decrementWorker() {
  yield delay(1000)
  yield put(decrement())
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker)
  yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}

