import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateBadge = {
  counter: number;
};

const initialState: initialStateBadge = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<number>) => {
      state.counter += payload;
    },
    less: (state, { payload }: PayloadAction<number>) => {
      state.counter = state.counter - payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { add, less } = counterSlice.actions;
