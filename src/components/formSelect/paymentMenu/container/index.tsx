import React, { FC, useState, useEffect } from "react";
import ISelectValue from "../../../../interface/ISelectValue";
import { getCookie } from "../../../../helpers/CookieFunction";
import Http from "../../../../helpers/Fatch";
import SelectPaymentMenuComponentLayout from "../layout";

interface SelectPaymentMenuProps {
    onChange: any;
    value: number | undefined;
}

const SelectPaymentMenuContainer: FC<SelectPaymentMenuProps> = ({ onChange, value }) => {
    const [dataPaymentMenu, setDataPaymentMenu] = useState<Array<ISelectValue>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    // useEffect(() => {
    //     GetRole();
    // }, []);

    const GetPaymentMenu = async () => {
        setLoading(true);
        try {
            const res = await Http.get("/payment-menu/true", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });
            setDataPaymentMenu(res.data.data);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
        }

    };

    return (
        <SelectPaymentMenuComponentLayout data={dataPaymentMenu} GetPaymentMenu={GetPaymentMenu} loading={loading} onChange={onChange} value={value!} />
    )
}
export default SelectPaymentMenuContainer;