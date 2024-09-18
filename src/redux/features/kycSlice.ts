import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchParams {
  transactionType: string;
  exchangeRate: string;
  amount: string;
  name: string;
  fathersName: string;
  mothersName: string;
  spouseName: string;
  nationality: string;
  passportType: string;
  countryCode: string;
  gender: string;
  passportNo: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  passportIssuePlace: string;
  bangladeshiNID: string;
  dateOfBirth: string;
  occupation: string;
  address: string;
  phone: string;
  countryOfVisit: string;
  purposeOfTravel: string;
  dateOfArrival: string | Date;
  dateOfDeparture: string;
  sourceOfFund: string;
}

const initialState: SearchParams = {
  transactionType: "",
  exchangeRate: "",
  amount: "",
  name: "",
  fathersName: "",
  mothersName: "",
  spouseName: "",
  nationality: "",
  passportType: "",
  countryCode: "",
  gender: "",
  passportNo: "",
  passportIssueDate: "",
  passportExpiryDate: "",
  passportIssuePlace: "",
  bangladeshiNID: "",
  dateOfBirth: "",
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
    setKycData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKycData } = kycSlice.actions;

export default kycSlice.reducer;
