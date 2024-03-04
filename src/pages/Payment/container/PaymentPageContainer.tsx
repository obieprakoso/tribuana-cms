import React, { FC, useState, useEffect } from "react";
import { getCookie } from "../../../helpers/CookieFunction";
import Http from "../../../helpers/Fatch";
import PaymentPageLayout from "../layout/PaymetPageLayout";
import ITablePayment from "../../../interface/ITablePayment";

const PaymentPageContainer: FC = () => {
    const [dataPayment, setDataPayment] = useState<Array<ITablePayment>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    useEffect(() => {
        GetPayment();
    }, []);

    const GetPayment = async () => {
        setLoading(true);
        try {
            const res = await Http.get("payment/2024-01-01/2024-01-11", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });

            setDataPayment(res.data.data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <PaymentPageLayout loading={loading} dataSource={dataPayment} />
    )
}
export default PaymentPageContainer;