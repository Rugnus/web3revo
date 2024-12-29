import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState, { InitialState } from "../initialState";

const initialStateSlice = createSlice({
  name: "initialState",
  initialState,
  reducers: {
    setInitialData(state, action: PayloadAction<InitialState>) {
      state.user = action.payload.user;
      state.loading = action.payload.loading;
    },
  },
});

export const { setInitialData } = initialStateSlice.actions;
export default initialStateSlice.reducer;
