import React, { FC, useState, useEffect } from "react";
import { getCookie } from "../../../helpers/CookieFunction";
import Http from "../../../helpers/Fatch";
import PaymentFilterPageLayout from "../layout/PaymentFilterPageLayout";
import IPaymentFilter from "../../../interface/IPaymentFilter";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPaymentFilter } from "../../../redux/slices/payment/PaymentFilterSlice";

const PaymentFilterPageContainer: FC = () => {
    const [dataPaymentFilter, setDataPaymentFilter] = useState<IPaymentFilter>();
    // const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");
    const paymentFilterValue = useAppSelector((store) => store.PaymentFilter);
    const paymentFilterDispatch = useAppDispatch();

    const handleTextInputChange = (e: any) => {
        paymentFilterDispatch(setPaymentFilter(e));
    };
    // useEffect(() => {
    //     GetPayment();
    // }, []);

    // const GetPayment = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await Http.get("payment/2024-01-01/2024-01-11", {
    //             headers: { Authorization: `Bearer ${user?.accessToken}` },
    //         });

    //         setDataPayment(res.data.data);
    //         setLoading(false);
    //     } catch (error: any) {
    //         console.log(error);
    //         setLoading(false);
    //     }
    // };
    const onChange = (value: any, dateString: any) => {

        console.log("Name1=", value);
        console.log("Name1=", dateString);
    }
    return (
        <PaymentFilterPageLayout onChange={onChange} />
    )
}
export default PaymentFilterPageContainer;