import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { giftCardReducer } from "../features/gift-card/giftCardSlice";
import { mainMenuReducer } from "../features/main-menu/mainMenuSlice";
import { menuReducer } from "../features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    mainMenu: mainMenuReducer,
    giftCard: giftCardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
