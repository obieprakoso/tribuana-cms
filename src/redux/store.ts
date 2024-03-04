import { configureStore } from "@reduxjs/toolkit";
import PaymentFilterSlice from "./slices/payment/PaymentFilterSlice";
import PaymentAddSlice from "./slices/payment/PaymentAddSlice";
import UserSlice from "./slices/user/UserSlice";

export const store = configureStore({
  reducer: {
    PaymentFilter: PaymentFilterSlice,
    PaymentAdd: PaymentAddSlice,
    User: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
