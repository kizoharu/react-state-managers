import { createSlice } from "@reduxjs/toolkit"


const todos = createSlice({
  name: 'toolkit-todos',
  initialState: [],
  reducers: {
    refresh: (state, action) => action.payload,
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    changeTodo: (state, action) => 
      state.map(p => {
        if(p.id === action.payload.id) {
          p = action.payload
          return p
        }
        return p
      }),
    deleteTodo: (state, action) => state.filter(p => p.id !== action.payload),
  }
})

export default todos.reducer
export const actions = todos.actions