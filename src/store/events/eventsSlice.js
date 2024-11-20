import { createSlice } from "@reduxjs/toolkit";

const counterState = 0;
const initialState = counterState;
const eventsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = eventsSlice.actions;
export default eventsSlice.reducer;
