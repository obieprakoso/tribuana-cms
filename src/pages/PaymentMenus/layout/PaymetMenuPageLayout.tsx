import { Button, ConfigProvider } from "antd";
import React, { FC, useState, useEffect } from "react";
import { PlusCircleOutlined } from '@ant-design/icons';
import TableComponentLayout from "../../../components/table/layout/TableComponentLayout";
import ColumnPaymentMenu from "../../../components/table/column/ColumnPaymentMenu";
import { useNavigate } from "react-router-dom";

interface IPropsPaymentMenuPageLayout {
    dataSource: Array<unknown>;
    loading: boolean;
}
const PaymentMenuPageLayout: FC<IPropsPaymentMenuPageLayout> = ({ dataSource, loading }) => {
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
                    <Button type="primary" icon={<PlusCircleOutlined />} onClick={() => navigate("/payment_menu/add")}>Add Payment menu</Button>
                </ConfigProvider>

            </div>
            <div>
                <TableComponentLayout loading={loading} columns={ColumnPaymentMenu} data={dataSource} />
            </div>
        </div>
    )
}
export default PaymentMenuPageLayout;