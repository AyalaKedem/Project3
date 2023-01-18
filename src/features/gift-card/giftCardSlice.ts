import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GiftCard } from "../../@types";

type initialStateGift = {
  giftCard: GiftCard[];
};

const initialState: initialStateGift = {
  giftCard: [],
};

export const giftCardSlice = createSlice({
  name: "gift",
  initialState,
  reducers: {
    card: (state, { payload }: PayloadAction<GiftCard>) => {
      state.giftCard.push(payload)
    },
    editCard: (state, { payload }: PayloadAction<GiftCard>) => {
      const index = state.giftCard.findIndex(c => c.id = payload.id);
      state.giftCard[index] = payload;
    },
  },
});

export const giftCardReducer = giftCardSlice.reducer;
export const { card, editCard } = giftCardSlice.actions;
