import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { checkBoxReducer } from "../features/check-box/checkBoxSlice";
import { counterReducer } from "../features/counter/counterSlice";
import { giftCardReducer } from "../features/gift-card/giftCardSlice";
import { mainMenuReducer } from "../features/main-menu/mainMenuSlice";
import { menuReducer } from "../features/menu/menuSlice";
import { orderReducer } from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    mainMenu: mainMenuReducer,
    giftCard: giftCardReducer,
    orders: orderReducer,
    counter: counterReducer,
    checkBox: checkBoxReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
