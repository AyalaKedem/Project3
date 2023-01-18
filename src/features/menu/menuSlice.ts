import { createSlice } from "@reduxjs/toolkit";
import { CategoryItem } from "../../@types";
import { menuArr } from "../../api/menuArr";

// להעביר אותו לטייפים בסןף ולייבא כאן
type InitialStateType = {
  menuCategory: CategoryItem[];
};

const initialState: InitialStateType = {
  menuCategory: menuArr,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // category: (state, {payload}: PayloadAction<string>) => {
    //   state.menuCategory.filter(c => c.category = payload);
    // },
    // ordered: (state, {payload}: PayloadAction<string>) => {
    //   state.menuCategory. //לעשות כמו פייבורית 
    // }
  },
});

export const menuReducer = menuSlice.reducer;
// export const { category } = menuSlice.actions;
