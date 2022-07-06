export const INCREMENT = 'INCREMENT';
export const ADD = 'ADD';
export const DECREMENT = 'DECREMENT';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case ADD:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    case DECREASE:
      return state - action.payload;
    case RESET:
      return 0;
  
    default:
      return state;
  }
}