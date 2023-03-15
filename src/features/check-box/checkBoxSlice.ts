import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateCheckBox = {
  vegan: boolean;
  vegetarian: boolean;
};

const initialState: initialStateCheckBox = {
  vegan: false,
  vegetarian: false,
};

export const checkBoxSlice = createSlice({
  name: "checkBox",
  initialState,
  reducers: {
    veganA: (state, { payload }: PayloadAction<boolean>) => {
      state.vegan = payload;
    },
    vegetarianA: (state, { payload }: PayloadAction<boolean>) => {
      state.vegetarian = payload;
    },
  },
});

export const checkBoxReducer = checkBoxSlice.reducer;
export const { veganA, vegetarianA } = checkBoxSlice.actions;
