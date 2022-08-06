import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIcecream: number
}

const initialState: InitialState = {
  numOfIcecream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload;
    },
  },
  //   extraReducers: {
  //     ['cake/ordered']: (state) => {
  //         state.numOfIcecream--;
  //     }
  //   }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
