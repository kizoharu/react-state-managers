import {INCREMENT, ADD, DECREMENT, DECREASE, RESET} from '../reducers/counter-reducer';

export const increment = () => ({
  type: INCREMENT,
})

export const addCount = (count) => ({
  type: ADD,
  payload: count
})

export const decrement = () => ({
  type: DECREMENT,
})

export const decCount = (count) => ({
  type: DECREASE,
  payload: count
})

export const reset = () => ({
  type: RESET,
})