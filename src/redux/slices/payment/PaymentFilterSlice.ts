import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPaymentFilter from "../../../interface/IPaymentFilter";

const initialState: IPaymentFilter = {
  start_date: "",
  end_date: "",
  user_id: 0,
  payment_menu_id: 0,
};
export const PaymentFilterSlice = createSlice({
  name: "paymentFilter",
  initialState,
  reducers: {
    setPaymentFilter: (state, action: PayloadAction<IPaymentFilter>) => {
      (state.start_date = action.payload.start_date),
        (state.end_date = action.payload.end_date),
        (state.user_id = action.payload.user_id),
        (state.payment_menu_id = action.payload.payment_menu_id);
    },
    clearPaymentFilter: (state) => {
      (state.start_date = ""),
        (state.end_date = ""),
        (state.user_id = 0),
        (state.payment_menu_id = 0);
    },
  },
});

export const { setPaymentFilter, clearPaymentFilter } =
  PaymentFilterSlice.actions;
export default PaymentFilterSlice.reducer;
