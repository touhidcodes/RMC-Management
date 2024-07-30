import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchParams {
  params: string;
}

const initialState: SearchParams = {
  params: "",
};

export const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<SearchParams>) {
      state.params = action.payload.params;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchParams } = kycSlice.actions;

export default kycSlice.reducer;
