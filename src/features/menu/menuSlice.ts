import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    order: (state, {payload}: PayloadAction<string>) => {
      const index = state.menuCategory.findIndex(i => i.id === payload);
      state.menuCategory[index].ordered = true
    },
    toggleOrder: (state, { payload }: PayloadAction<string>) => {
      const index = state.menuCategory.findIndex((i) => i.id === payload);
      if (index !== -1) {
        state.menuCategory[index].ordered = !state.menuCategory[index].ordered;
      }
    },
    deleteFromOrder: (state, { payload }: PayloadAction<string>) => {
      const index = state.menuCategory.findIndex((i) => i.id === payload);
      state.menuCategory.splice(index, 1);
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleOrder, deleteFromOrder, order } = menuSlice.actions;
