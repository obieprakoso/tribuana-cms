import type { ColumnsType } from 'antd/es/table';
import { Tag } from "antd";
import ITablePaymentMenu from '../../../interface/ITablePaymentMenu';

const ColumnPaymentMenu: ColumnsType<ITablePaymentMenu> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Posisi",
        dataIndex: "position",
        key: "position",
    },
    {
        title: "Status",
        key: "is_active",
        dataIndex: "is_active",
        render: (is_active: boolean) => (
            <Tag color={is_active ? "green" : "red"} key={is_active.toString()}>
                {is_active ? "AKTIF" : "TIDAK AKTIF"}
            </Tag>
        ),
    },
];

export default ColumnPaymentMenu;