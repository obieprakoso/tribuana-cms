import React, { FC, useState, useEffect } from "react";
import ISelectValue from "../../../../interface/ISelectValue";
import { getCookie } from "../../../../helpers/CookieFunction";
import Http from "../../../../helpers/Fatch";
import SelectRoleComponentLayout from "../layout";

interface SelectRoleProps {
    onChange: any;
}

const SelectRoleContainer: FC<SelectRoleProps> = ({ onChange }) => {
    const [dataRole, setDataRole] = useState<Array<ISelectValue>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    // useEffect(() => {
    //     GetRole();
    // }, []);

    const GetRole = async () => {
        setLoading(true);
        try {
            const res = await Http.get("role/true", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            setDataRole(res.data.data);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
        }

    };

    return (
        <SelectRoleComponentLayout data={dataRole} GetRole={GetRole} loading={loading} onChange={onChange} />
    )
}
export default SelectRoleContainer;