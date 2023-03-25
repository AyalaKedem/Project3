import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GiftCard, initialStateGift } from "../../@types";

const initialState: initialStateGift = {
  giftCard: [],
};

export const giftCardSlice = createSlice({
  name: "gift",
  initialState,
  reducers: {
    card: (state, { payload }: PayloadAction<GiftCard>) => {
      state.giftCard.push(payload);
    },
    editCard: (state, { payload }: PayloadAction<GiftCard>) => {
      const index = state.giftCard.findIndex((c) => c.id === payload.id);
      state.giftCard[index] = payload;
    },
    deleteCard: (state, { payload }: PayloadAction<string>) => {
      const index = state.giftCard.findIndex((i) => i.id === payload);
      state.giftCard.splice(index, 1);
    },
  },
});

export const giftCardReducer = giftCardSlice.reducer;
export const { deleteCard, card, editCard } = giftCardSlice.actions;
