import React, { FC, useState, useEffect } from "react";
import { getCookie } from "../../../helpers/CookieFunction";
import Http from "../../../helpers/Fatch";
import PaymentMenuPageLayout from "../layout/PaymetMenuPageLayout";
import ITablePaymentMenu from "../../../interface/ITablePaymentMenu";

const PaymentMenuPageContainer: FC = () => {
    const [dataPaymentMenus, setDataPaymentMenus] = useState<Array<ITablePaymentMenu>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    useEffect(() => {
        GetAllPaymentMenu();
    }, []);

    const GetAllPaymentMenu = async () => {
        setLoading(true);
        try {
            const res = await Http.get("payment-menu/true", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });

            setDataPaymentMenus(res.data.data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <PaymentMenuPageLayout loading={loading} dataSource={dataPaymentMenus} />
    )
}
export default PaymentMenuPageContainer;