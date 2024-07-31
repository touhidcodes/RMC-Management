import { baseApi } from "./api/baseApi";
import kycReducer from "./features/kycSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  kyc: kycReducer,
};
