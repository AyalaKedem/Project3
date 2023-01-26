import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem } from "../../@types";

// יכול להיות שכדאי למחוק את כל הקובץ הזה, בינתיים לא השתמשי בו
type initialStateOrder = {
  orders: CategoryItem[];
};

const initialState: initialStateOrder = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    add:(state, {payload}:PayloadAction<CategoryItem>)=>{
      state.orders.push(payload);
    },
    toggleOrder: (state, { payload }: PayloadAction<string>) => {
      const index = state.orders.findIndex(i => i.id === payload);
      state.orders[index].ordered = !state.orders[index].ordered
    },
    deleteFromOrder: (state, { payload }: PayloadAction<string>) => {
      const index = state.orders.findIndex((i) => i.id === payload);
      state.orders.splice(index, 1);
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const {add, toggleOrder, deleteFromOrder} = orderSlice.actions; 