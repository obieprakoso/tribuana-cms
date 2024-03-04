import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPaymentAdd from "../../../interface/IPaymentAdd";

const initialState: IPaymentAdd = {
  payment_date: "",
  payment_amount: "",
  user_id: 0,
  payment_menu_id: 0,
  payment_method: 0,
  image: "",
};
export const PaymentAddSlice = createSlice({
  name: "paymentAdd",
  initialState,
  reducers: {
    setPaymentAdd: (state, action: PayloadAction<IPaymentAdd>) => {
      (state.payment_date = action.payload.payment_date),
        (state.payment_amount = action.payload.payment_amount),
        (state.user_id = action.payload.user_id),
        (state.payment_menu_id = action.payload.payment_menu_id),
        (state.payment_method = action.payload.payment_method),
        (state.image = action.payload.image);
    },
    clearPaymentAdd: (state) => {
      (state.payment_date = ""),
        (state.payment_amount = ""),
        (state.user_id = 0),
        (state.payment_menu_id = 0),
        (state.payment_method = 0),
        (state.image = "");
    },
  },
});

export const { setPaymentAdd, clearPaymentAdd } = PaymentAddSlice.actions;
export default PaymentAddSlice.reducer;
