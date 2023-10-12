import React, { FC, useState, useEffect } from "react";
import LoginPageLayout from "../layout/LoginPageLayout";
import { useNavigate } from "react-router-dom";
import Http from "../../../helpers/Fatch";
import { getCookie, setCookie } from "../../../helpers/CookieFunction";
import InputValidation from "../../../helpers/ValidatonForm";

interface LoginValue {
    email?: string | null;
    password?: string | null;
}
const LoginPageContainer: FC = () => {
    const navigate = useNavigate();
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [data, setData] = useState<LoginValue>({
        email: "",
        password: "",
    });
    const [errData, setErrData] = useState<LoginValue>({
        email: "",
        password: "",
    });
    const authCookie = getCookie("auth");
    useEffect(() => {
        if (authCookie !== undefined) {
            navigate("/beranda");
        }
    })
    const onChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        e.preventDefault();

        const { name, value } = e.target;

        let strErr = "";
        if (name === "email") {
            strErr = InputValidation.EmailValidation(value, 100, "Email", true);
        }
        if (name === "password") {
            strErr = InputValidation.PasswordValidation(
                value,
                4,
                12,
                "Password",
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
    };

    const onSubmit = async () => {
        try {
            const valid = onValidationButton();
            if (valid) {
                setLoadingLogin(true);
                const response = await Http.post("auth/login", data, {
                    withCredentials: true,
                });


                const responseLogin = {
                    "id": response.data?.data.id,
                    "email": response.data?.data.email,
                    "name": response.data?.data.first_name + " " + response.data?.data.first_name,
                    "no_tlp": response.data?.data.phone_number,
                    "no_unit": response.data?.data.number_unit,
                    "accessToken": response.data?.tokens.access.token,
                    "expiredToken": response.data?.tokens.access.expires,
                    "refreshToken": response.data?.tokens.refresh.token,
                    "expiredrefreshToken": response.data?.tokens.refresh.expires,
                };
                setCookie("auth", JSON.stringify(responseLogin));
                setLoadingLogin(false);
                navigate("/beranda");
            }
        } catch (error) {
            setLoadingLogin(false);
        }
    };
    const onValidationButton = (): boolean => {
        const tempValidation: LoginValue = {
            email: InputValidation.EmailValidation(data.email, 100, "Email", true),
            password: InputValidation.PasswordValidation(
                data.password,
                4,
                12,
                "Password",
                true
            ),
        };

        setErrData(tempValidation);

        for (const key in tempValidation) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((tempValidation as any)[key] !== "") {
                return false;
            }
        }
        return true;
    };
    return (
        <LoginPageLayout
            errInput={errData}
            isLoadingLogin={loadingLogin}
            onSubmit={onSubmit}
            emailValueInput={data.email}
            passwodValueInput={data.password}
            onChangeForm={onChange}
        />
    );
};
export default LoginPageContainer;
