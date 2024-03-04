import React, { FC, useState, useEffect } from "react";
import ISelectValue from "../../../../interface/ISelectValue";
import { getCookie } from "../../../../helpers/CookieFunction";
import Http from "../../../../helpers/Fatch";
import SelectPaymentMethodComponentLayout from "../layout";

interface SelectPaymentMethodProps {
    onChange: any;
    value: number | undefined;
}

const SelectPaymentMethodContainer: FC<SelectPaymentMethodProps> = ({ onChange, value }) => {
    const [dataPaymentMethod, setDataPaymentMethod] = useState<Array<ISelectValue>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    // useEffect(() => {
    //     GetRole();
    // }, []);

    const GetPaymentMethod = async () => {
        setLoading(true);
        try {
            const res = {
                data: [
                    {
                        id: 1,
                        name: "Transfer"
                    },
                    {
                        id: 2,
                        name: "Cash"
                    },
                    {
                        id: 3,
                        name: "Credit"
                    }
                ]
            }
            setDataPaymentMethod(res.data);
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
        }

    };

    return (
        <SelectPaymentMethodComponentLayout data={dataPaymentMethod} GetPaymentMethod={GetPaymentMethod} loading={loading} onChange={onChange} value={value!} />
    )
}
export default SelectPaymentMethodContainer;