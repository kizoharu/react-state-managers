import {all} from 'redux-saga/effects'
import { countWatcher } from './counter-saga'
import { todosWatcher } from './todos-saga'

export function* rootWatcher() {
  yield all([
    countWatcher(), 
    todosWatcher()
  ])
}