import React, { FC, useState, useEffect } from "react";
import TableComponentLayout from "../../../components/table/layout/TableComponentLayout";
import ColumnUser from "../../../components/table/column/ColumnUser";
import { Button, ConfigProvider, Modal } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import AddUserPageContainer from "../container/AddUserPageContainer";

interface IPropsUserPageLayout {
    dataSource: Array<unknown>;
    loading: boolean;
    GetAllUser: any;
    toggleShow: () => void;
}

const UserPageLayout: FC<IPropsUserPageLayout> = ({ dataSource, loading, GetAllUser, toggleShow }) => {

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
                    <Button type="primary" icon={<UserAddOutlined />} onClick={toggleShow}>Add User</Button>
                </ConfigProvider>

            </div>
            <div>
                <TableComponentLayout loading={loading} columns={ColumnUser} data={dataSource} />
            </div>
            <AddUserPageContainer getAllUser={GetAllUser} />
        </div>
    )
}
export default UserPageLayout;