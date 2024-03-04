import { create } from "zustand";
import createRegistrationUser from "./slices/RegistrationUserSlice";
import { IRegistrationUserStore } from "./types/IRegistrationUserStore";
import { ModalAddUser } from "./types/IModalAddUser";

const useStoreUser = create<IRegistrationUserStore>()((...a) => ({
  ...createRegistrationUser(...a),
}));
const useStoreUserModal = create<ModalAddUser>()((set) => ({
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
}));
// const useStorePaymentMenu = create<IRegistrationUserStore>()((...a) => ({
//   ...createRegistrationUser(...a),
// }));

export { useStoreUser, useStoreUserModal };
