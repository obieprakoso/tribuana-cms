import React, { FC, useState, useEffect } from "react";
import AddUserPageLayout from "../layout/AddUserPageLayout";
import { useNavigate } from "react-router-dom";
import Http from "../../../helpers/Fatch";
import { getCookie, setCookie } from "../../../helpers/CookieFunction";
import InputValidation from "../../../helpers/ValidatonForm";
import InterfaceRegisterUserValue from "../../../interface/IRegisterUser";
import useStore from "../store/useStore";

const AddUserPageContainer: FC = () => {
    const register = useStore(state => state.register);
    const user = useStore(state => state.user);
    const navigate = useNavigate();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [data, setData] = useState<InterfaceRegisterUserValue>({
        email: "",
        numberUnit: "",
        firstName: "",
        lastName: "",
        numberTelephone: "",
        role: "",
        password: "",
        confirmPassword: "",
        address: ""

    });
    const [errData, setErrData] = useState<InterfaceRegisterUserValue>({
        email: "",
        numberUnit: "",
        firstName: "",
        lastName: "",
        numberTelephone: "",
        role: "",
        password: "",
        confirmPassword: "",
        address: ""
    });
    const onChangeSelect = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setData({
            ...data,
            ["role"]: event.value,
        });
    };

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        e.preventDefault();

        const { name, value } = e.target;
        let strErr = "";
        if (name === "email") {
            strErr = InputValidation.EmailValidation(value, 100, "Email", true);
        }
        else if (name === "password") {
            strErr = InputValidation.PasswordValidation(
                value,
                4,
                12,
                "Password",
                true
            );
        }
        else if (name === "confirmPassword") {
            strErr = InputValidation.ConfirmPasswordValidation(
                value,
                4,
                12,
                "Password",
                true,
                data.password
            );
        }
        else if (name === "numberUnit" || name === "numberTelephone") {
            strErr = InputValidation.TextNumberValidation(
                value,
                13,
                name === "numberUnit" ? "No. Unit" : "No. Telephone",
                true
            );
        }
        else {
            strErr = InputValidation.TextValidation(
                value,
                255,
                name,
                true
            );
        }

        setErrData({
            ...errData,
            [name]: strErr,
        });

        setData({
            ...data,
            [name]: value,
        });

        register(data.email, data.numberUnit, data.firstName, data.lastName, data.numberTelephone, data.address, data.role, data.password, data.confirmPassword);
    };

    const onClear = () => {
        setErrData({
            email: "",
            numberUnit: "",
            firstName: "",
            lastName: "",
            numberTelephone: "",
            role: "",
            password: "",
            confirmPassword: "",
            address: ""
        });

        setData({
            email: "",
            numberUnit: "",
            firstName: "",
            lastName: "",
            numberTelephone: "",
            role: "",
            password: "",
            confirmPassword: "",
            address: ""
        });

    };

    const onSubmit = async () => {
        try {
            // const valid = onValidationButton();
            const valid = true;
            if (valid) {
                setLoadingLogin(true);
                const dataPayload = {
                    "first_name": data.firstName,
                    "last_name": data.lastName,
                    "email": data.email,
                    "password": data.password,
                    "confirm_password": data.confirmPassword,
                    "address": data.address,
                    "phone_number": data.numberTelephone,
                    "number_unit": data.numberUnit,
                    "role_id": data.role
                }
                const response = await Http.post("auth/register", dataPayload, {
                    withCredentials: true,
                });
                setLoadingLogin(false);
            }
        } catch (error) {
            setLoadingLogin(false);
        }
    };
    const onValidationButton = (): boolean => {
        const tempValidation: InterfaceRegisterUserValue = {
            email: InputValidation.EmailValidation(data.email, 100, "Email", true),
            password: InputValidation.PasswordValidation(
                data.password,
                4,
                12,
                "Password",
                true
            ),
            confirmPassword: InputValidation.ConfirmPasswordValidation(
                data.password,
                4,
                12,
                "Password",
                true,
                data.password
            ),
            firstName: InputValidation.TextValidation(
                data.firstName,
                255,
                "firstName",
                true
            ),
            lastName: InputValidation.TextValidation(
                data.firstName,
                255,
                "lastName",
                true
            ),
            numberUnit: InputValidation.TextNumberValidation(
                data.numberUnit,
                2,
                "numberUnit",
                true
            ),
            numberTelephone: InputValidation.TextNumberValidation(
                data.numberTelephone,
                13,
                "numberTelephone",
                true
            ),
            address: InputValidation.TextValidation(
                data.address,
                255,
                "address",
                true
            ),
            role: InputValidation.TextNumberValidation(
                data.role,
                2,
                "role",
                true
            ),
        };

        setErrData(tempValidation);

        for (const key in tempValidation) {
            if ((tempValidation as any)[key] !== "") {
                return false;
            }
        }
        return true;
    };
    console.log("TTTTTT=", data);

    return (
        <AddUserPageLayout
            errInput={errData}
            isLoadingLogin={loadingLogin}
            onSubmit={onSubmit}
            emailValueInput={data.email}
            firstNameValueInput={data.firstName}
            lastNameValueInput={data.lastName}
            numberTelephoneValueInput={data.numberTelephone}
            numberUnitValueInput={data.numberUnit}
            roleValueInput={data.role}
            addressValueInput={data.address}
            passwodValueInput={data.password}
            confirmPasswordValueInput={data.confirmPassword}
            onChangeForm={onChange}
            onChangeSelect={onChangeSelect}
            onClear={onClear}
        />
    );
};
export default AddUserPageContainer;
