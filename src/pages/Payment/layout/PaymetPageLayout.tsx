import { Button, Card, Col, ConfigProvider, Row } from "antd";
import React, { FC, useState, useEffect } from "react";
import { PlusCircleOutlined } from '@ant-design/icons';
import TableComponentLayout from "../../../components/table/layout/TableComponentLayout";
import ColumnPayment from "../../../components/table/column/ColumnPayment";
import PaymentFilterPageContainer from "../container/PaymentFilterPageContainer";
import PaymentAddPageContainer from "../container/PaymentAddPageContainer";

interface IPropsPaymentPageLayout {
    dataSource: Array<unknown>;
    loading: boolean;
}
const PaymentPageLayout: FC<IPropsPaymentPageLayout> = ({ dataSource, loading }) => {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card title="Add Payment" bordered={true} style={{ marginBottom: 30 }}>
                        <div>
                            <PaymentAddPageContainer />
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card title="Filter Payment" bordered={true} style={{ marginBottom: 30 }}>
                        <div>
                            <PaymentFilterPageContainer />
                        </div>
                    </Card>
                </Col>
            </Row>
            <div>
                <TableComponentLayout loading={loading} columns={ColumnPayment} data={dataSource} />
            </div>
        </div>
    )
}
export default PaymentPageLayout;