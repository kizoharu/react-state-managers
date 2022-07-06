import {INCREMENT, ADD, DECREMENT, DECREASE, RESET, ASYNC_INCREMENT, ASYNC_DECREMENT} from '../reducers/counter-reducer';

export const increment = () => ({
  type: INCREMENT,
})

export const asyncIncrement = () => ({
  type: ASYNC_INCREMENT,
})

export const addCount = (count) => ({
  type: ADD,
  payload: count
})

export const decrement = () => ({
  type: DECREMENT,
})

export const asyncDecrement = () => ({
  type: ASYNC_DECREMENT,
})

export const decCount = (count) => ({
  type: DECREASE,
  payload: count
})

export const reset = () => ({
  type: RESET,
})