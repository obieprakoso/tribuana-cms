import React, { FC, useState, useEffect } from "react";
import TableComponentLayout from "../../../components/table/layout/TableComponentLayout";
import ColumnUser from "../../../components/table/column/ColumnUser";
import { Button, ConfigProvider } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface IPropsUserPageLayout {
    dataSource: Array<unknown>;
    loading: boolean;
}

const UserPageLayout: FC<IPropsUserPageLayout> = ({ dataSource, loading }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="pb-5 float-right" >
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b',
                        },
                    }}
                >
                    <Button type="primary" icon={<UserAddOutlined />} onClick={() => navigate("/penghuni/add")}>Tambah Penghuni</Button>
                </ConfigProvider>

            </div>
            <div>
                <TableComponentLayout loading={loading} columns={ColumnUser} data={dataSource} />
            </div>
        </div>
    )
}
export default UserPageLayout;