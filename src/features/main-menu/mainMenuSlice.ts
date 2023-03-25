import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateMain } from "../../@types";

const initialState: initialStateMain = {
  mainMenu: { endpoint: "", img: "", text: "" },
};

export const mainMenuSlice = createSlice({
  name: "mainMenu",
  initialState,
  reducers: {
    title: (state, { payload }: PayloadAction<string>) => {
      state.mainMenu.text = payload;
    },
  },
});

export const mainMenuReducer = mainMenuSlice.reducer;
export const { title } = mainMenuSlice.actions;
