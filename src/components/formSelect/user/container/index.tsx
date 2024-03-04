import React, { FC, useState, useEffect } from "react";
import ISelectValue from "../../../../interface/ISelectValue";
import { getCookie } from "../../../../helpers/CookieFunction";
import Http from "../../../../helpers/Fatch";
import SelectUserComponentLayout from "../layout";

interface SelectUserProps {
    onChange: any;
    value: number | undefined;
}

const SelectUserContainer: FC<SelectUserProps> = ({ onChange, value }) => {
    const [dataUser, setDataUser] = useState<Array<ISelectValue>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    // useEffect(() => {
    //     GetRole();
    // }, []);

    const GetUser = async () => {
        setLoading(true);
        try {
            const res = await Http.get("/user/true", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            setDataUser(res.data.data);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
        }

    };

    return (
        <SelectUserComponentLayout data={dataUser} GetUser={GetUser} loading={loading} onChange={onChange} value={value!} />
    )
}
export default SelectUserContainer;