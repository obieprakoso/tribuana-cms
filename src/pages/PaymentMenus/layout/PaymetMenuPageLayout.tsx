import { ConfigProvider } from "antd";
import React, { FC, useState, useEffect } from "react";
// import { Button, ConfigProvider } from "antd";
import TableComponentLayout from "../../../components/table/layout/TableComponentLayout";
import ColumnPaymentMenu from "../../../components/table/column/ColumnPaymentMenu";

interface IPropsPaymentMenuPageLayout {
    dataSource: Array<unknown>;
    loading: boolean;
}
const PaymentMenuPageLayout: FC<IPropsPaymentMenuPageLayout> = ({ dataSource, loading }) => {
    return (
        <div>
            {/* <div className="pb-5 float-right" >
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b',
                        },
                    }}
                >
                    <Button type="primary" icon={<UserAddOutlined />} onClick={() => navigate("/penghuni/add")}>Tambah Penghuni</Button>
                </ConfigProvider>

            </div> */}
            <div>
                <TableComponentLayout loading={loading} columns={ColumnPaymentMenu} data={dataSource} />
            </div>
        </div>
    )
}
export default PaymentMenuPageLayout;