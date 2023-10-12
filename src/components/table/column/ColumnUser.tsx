import type { ColumnsType } from 'antd/es/table';
import { Tag } from "antd";
import ITableUser from '../../../interface/ITableUser';

const ColumnUser: ColumnsType<ITableUser> = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Nomor Unit",
        dataIndex: "number_unit",
        key: "no_unit",
    },
    {
        title: "Nomor Telpon",
        dataIndex: "phone_number",
        key: "no_tlp",
    },
    {
        title: "Status",
        key: "is_active",
        dataIndex: "status",
        render: (status: boolean) => (
            <Tag color={status ? "green" : "red"} key={status.toString()}>
                {status ? "AKTIF" : "TIDAK AKTIF"}
            </Tag>
        ),
    },
];

export default ColumnUser;