import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../../interface/IUser";

const initialState: IUser = {
  id: 0,
  name: "",
  email: "",
  status: 0,
  address: "",
  phone_number: "",
  number_unit: 0,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      (state.id = action.payload.id),
        (state.name = action.payload.name),
        (state.email = action.payload.email),
        (state.status = action.payload.status),
        (state.address = action.payload.address),
        (state.phone_number = action.payload.phone_number);
      state.number_unit = action.payload.number_unit;
    },
    clearUser: (state) => {
      (state.id = 0),
        (state.name = ""),
        (state.email = ""),
        (state.status = 0),
        (state.address = ""),
        (state.phone_number = "");
      state.number_unit = 0;
    },
  },
});

export const { setUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
