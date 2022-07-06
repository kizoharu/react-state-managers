import {   createSlice } from "@reduxjs/toolkit"


const counter = createSlice({
  name: 'toolkit-counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    addCount: (state, action) => state + action.payload,
    decCount: (state, action) => state - action.payload,
    reset: (state) => 0,
  }
})

export default counter.reducer
export const actions = counter.actions