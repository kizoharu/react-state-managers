export const REFRESH = 'REFRESH'
export const AXIOS_REFRESH = 'AXIOS_REFRESH'
export const ADD_TODO = 'ADD_TODO'
export const AXIOS_ADD_TODO = 'AXIOS_ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const AXIOS_DELETE_TODO = 'AXIOS_DELETE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const AXIOS_CHANGE_TODO = 'AXIOS_CHANGE_TODO'

export const todos = (state = [], action) => {
  switch (action.type) {
    case REFRESH:
      return [...action.todos];
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      return state.filter(p => p.id !== action.id);
    case CHANGE_TODO:
      return state.map(p => {
          if(p.id === action.todo.id) {
            p = action.todo
            return p
          }
          return p
        });
  
    default:
      return state;
  }
}