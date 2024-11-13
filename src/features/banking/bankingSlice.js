import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 200,
};

const bankingSlice = createSlice({
  name: "banking",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload; 
    },
    withdraw: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      } else {
        state.error = "You don't have enough balance";
      }
    },
  },
});

export const { deposit, withdraw } = bankingSlice.actions;
export default bankingSlice.reducer;
