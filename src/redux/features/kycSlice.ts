import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchParams {
  date: string;
  serial: string;
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
  street: string;
  post: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  countryVisit: string;
  travelType: string;
  travelDate: string;
  travelPurpose: string;
  fundSource: string;
}

const initialState: SearchParams = {
  date: "",
  serial: "",
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
  street: "",
  post: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  countryVisit: "",
  travelType: "",
  travelDate: "",
  travelPurpose: "",
  fundSource: "",
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
