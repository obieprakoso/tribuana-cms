import type { ColumnsType } from 'antd/es/table';
import { Tag } from "antd";
import ITablePaymentMenu from '../../../interface/ITablePaymentMenu';
import ITablePayment from '../../../interface/ITablePayment';
import FormatCurrency from '../../../helpers/FormatCurrency';

const ColumnPayment: ColumnsType<ITablePayment> = [
    {
        title: "User Name",
        dataIndex: "user_name",
        key: "user_name",
    },
    {
        title: "Payment",
        dataIndex: "payment_name",
        key: "payment_name",
    },
    {
        title: "Payment Amount",
        dataIndex: "payment_amount",
        key: "payment_amount",
        render: (data_payment_amount: string) => (

            <span>{FormatCurrency.FormatCurrency(Number(data_payment_amount), 'IDR', 'id-ID')}</span>
        ),
    },
    {
        title: "Payment Method",
        dataIndex: "payment_method",
        key: "payment_method",
        render: (data_payment_method: string) => (
            <Tag color={data_payment_method === "TRANSFER" || data_payment_method === "CASH" ? "green" : "red"} key={data_payment_method}>
                {data_payment_method}
            </Tag>
        ),
    },
    {
        title: "Payment Date",
        dataIndex: "payment_date",
        key: "payment_date",
    },
];

export default ColumnPayment;
