import { baseApi } from "./api/baseApi";
import flatReducer from "./features/kycSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  flat: flatReducer,
};
