import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchParams {
  transactionType: string;
  currency: string;
  exchangeRate: string;
  amount: string;
  name: string;
  fathersName: string;
  mothersName: string;
  spousesName: string;
  nationality: string;
  passportNo: string;
  passportDOI: string;
  passportPOI: string;
  nationalID: string;
  dateOfBirth: string;
  occupation: string;
  address: string;
  phone: string;
  countryToVisit: string;
  purposeOfVisit: string;
  dateOfArrival: string;
  dateOfDeparture: string;
  sourceOfFund: string;
}

const initialState: SearchParams = {
  transactionType: "",
  currency: "",
  exchangeRate: "",
  amount: "",
  name: "",
  fathersName: "",
  mothersName: "",
  spousesName: "",
  nationality: "",
  passportNo: "",
  passportDOI: "",
  passportPOI: "",
  nationalID: "",
  dateOfBirth: "",
  occupation: "",
  address: "",
  phone: "",
  countryToVisit: "",
  purposeOfVisit: "",
  dateOfArrival: "",
  dateOfDeparture: "",
  sourceOfFund: "",
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
