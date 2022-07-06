import { combineReducers } from "redux";
import {counter} from './counter-reducer';
import {todos} from './todos-reducer';

export const rootReducer = combineReducers({
  counter,
  todos,
})