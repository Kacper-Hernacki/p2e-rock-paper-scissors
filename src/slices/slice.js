import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    wins: 0,
    losses: 0,
    draws: 0,
  },
  reducers: {
    won: (state) => {
      state.wins += 1;
    },
    lost: (state) => {
      state.losses += 1;
    },
    draw: (state) => {
      state.draws += 1;
    },
  },
});

export const { won, lost, draw } = counterSlice.actions;

export default counterSlice.reducer;
