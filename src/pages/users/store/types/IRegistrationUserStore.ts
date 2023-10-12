import IRegisterUserValue from "../../../../interface/IRegisterUser";

export interface IRegistrationUserStore {
  user: IRegisterUserValue | null;
  register: (
    email: string,
    numberUnit: string,
    firstName: string,
    lastName: string,
    numberTelephone: string,
    address: string,
    role: string,
    password: string,
    cofirmPassword: string
  ) => void;
}
