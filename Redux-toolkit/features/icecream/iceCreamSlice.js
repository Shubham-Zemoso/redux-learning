const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecream: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
//   extraReducers: {
//     ['cake/ordered']: (state) => {
//         state.numOfIcecream--;
//     }
//   }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
        state.numOfIcecream--;
    })
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;
