import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainMenuProp } from "../../@types";

// להעביר אותו לטייפים בסןף ולייבא כאן
type initialStateMain = {
  mainMenu: MainMenuProp;
};

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
