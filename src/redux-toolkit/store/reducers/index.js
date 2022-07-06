import { combineReducers } from '@reduxjs/toolkit';
import counter from './counter-reducer';
import todos from './todos-reducer';


export const rootReducer = combineReducers({
  counter,
  todos,
})