import React, { FC, useState, useEffect } from "react";
import { getCookie } from "../../../helpers/CookieFunction";
import Http from "../../../helpers/Fatch";
import PaymentAddPageLayout from "../layout/PaymentAddPageLayout";
import IPaymentFilter from "../../../interface/IPaymentFilter";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPaymentFilter } from "../../../redux/slices/payment/PaymentFilterSlice";
import IPaymentAdd from "../../../interface/IPaymentAdd";
import { setPaymentAdd } from "../../../redux/slices/payment/PaymentAddSlice";
import InputValidation from "../../../helpers/ValidatonForm";
import moment from "moment";

const PaymentAddPageContainer: FC = () => {
    const [dataPaymentAdd, setDataPaymentAdd] = useState<IPaymentAdd>({
        payment_date: '',
        payment_amount: '',
        user_id: 0,
        payment_menu_id: 0,
        payment_method: 0,
        image: ''
    })
    // const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");
    const paymentAddValue = useAppSelector<IPaymentAdd>((store: any) => store.PaymentAdd);
    const paymentAddDispatch = useAppDispatch();

    const handleChange = (value: any, selectKey: string) => {
        setDataPaymentAdd((prevSelectedValues) => ({
            ...prevSelectedValues,
            [selectKey]: value,
        }));
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
    useEffect(() => {
        paymentAddDispatch(setPaymentAdd(dataPaymentAdd!));
        // console.log("s=", paymentAddValue.payment_amount);

    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const handleDateChange = (date: any | null) => {
        setDataPaymentAdd((prevState) => ({
            ...prevState,
            payment_date: date.toISOString() || undefined,
        }));
    };
    return (
        <PaymentAddPageLayout valueAmount={paymentAddValue.payment_amount} handleDateChange={handleDateChange} handleChange={handleChange} />
    )
}
export default PaymentAddPageContainer;