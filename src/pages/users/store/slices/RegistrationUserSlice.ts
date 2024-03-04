import { StateCreator } from "zustand";
import { IRegistrationUserStore } from "../types/IRegistrationUserStore";

const createRegistrationUser: StateCreator<IRegistrationUserStore> = (
  set,
  get
) => ({
  user: null,
  async register(
    email,
    numberUnit,
    name,
    numberTelephone,
    access,
    role,
    password,
    status
  ) {
    set((state: any) => ({
      ...state,
      user: {
        email: email,
        numberUnit: numberUnit,
        name: name,
        numberTelephone: numberTelephone,
        access: access,
        role: role,
        password: password,
        status: status,
      },
    }));
  },
});

export default createRegistrationUser;
