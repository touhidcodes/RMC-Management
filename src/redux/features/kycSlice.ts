import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchParams {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initialState: SearchParams = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const kycSlice = createSlice({
  name: "kyc",
  initialState,
  reducers: {
    updateKycData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateKycData } = kycSlice.actions;

export default kycSlice.reducer;
