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
  spouseName: string;
  nationality: string;
  passportNo: string;
  passportIssueDate: string;
  passportPlaceOfIssue: string;
  nid: string;
  dob: string;
  occupation: string;
  address: string;
  phone: string;
  countryOfVisit: string;
  purposeOfTravel: string;
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
  spouseName: "",
  nationality: "",
  passportNo: "",
  passportIssueDate: "",
  passportPlaceOfIssue: "",
  nid: "",
  dob: "",
  occupation: "",
  address: "",
  phone: "",
  countryOfVisit: "",
  purposeOfTravel: "",
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
