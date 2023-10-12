import { create } from "zustand";
import createRegistrationUser from './slices/RegistrationUserSlice'
import { IRegistrationUserStore } from "./types/IRegistrationUserStore";

const useStore = create<IRegistrationUserStore>()((...a) => ({
    ...createRegistrationUser(...a),
}))

export default useStore;