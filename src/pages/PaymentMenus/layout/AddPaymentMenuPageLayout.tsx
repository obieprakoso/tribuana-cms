import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, ConfigProvider, Form, FormInstance, Input, Row, Select, Spin } from "antd";
import React, { FC, useState, useEffect } from "react";
import SelectRoleContainer from "../../../components/formSelect/role/container";
const { TextArea } = Input;
interface PaymentMenuProps {
    errInputPaymentMenu: any;
    isLoadingPaymentMenu: boolean;
    onSubmitPaymentMenu: any;
    paymentMenuNameValueInput: string;
    paymentMenuPositionValueInput: number;
    paymentMenuStatusValueInput: boolean;
    onChangeFormPaymentMenu: any;
    onChangeSelectPaymentMenu: any;
    onClearPaymentMenu: any;
}
const AddPaymentMenuPageLayout: FC<PaymentMenuProps> = ({ errInputPaymentMenu,
    isLoadingPaymentMenu,
    onSubmitPaymentMenu,
    paymentMenuNameValueInput,
    paymentMenuPositionValueInput,
    paymentMenuStatusValueInput,
    onChangeFormPaymentMenu,
    onChangeSelectPaymentMenu,
    onClearPaymentMenu }) => {
    const formRef = React.useRef<FormInstance>(null);
    const onReset = () => {
        formRef.current?.resetFields();
        onClearPaymentMenu();
    };
    return (
        <div className="pt-5 min-ipad:px-28 max-mobile:px-5">
            <Card title="Tambah Penghuni" bordered={false}>
                <Spin size="large" spinning={isLoadingPaymentMenu}>
                    <Form
                        ref={formRef}
                        name="control-hooks"
                        // initialValues={RegisterUserProps}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            {/* //FirstName */}
                            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                <span>Payment Menu Name</span>
                                <Form.Item
                                    name="paymentMenuName"
                                    rules={[
                                        { required: true, message: "Please input your payment menu name!" },
                                    ]}
                                    validateStatus={errInputPaymentMenu.paymentName ? "error" : ""}
                                    help={errInputPaymentMenu.paymentName}
                                >
                                    <Input
                                        name="paymentMenuName"
                                        value={paymentMenuNameValueInput?.toString()}
                                        onChange={onChangeFormPaymentMenu}
                                        size="large"
                                        placeholder="Enter your payment menu name"
                                    />
                                </Form.Item>
                            </Col>
                            {/* LastName */}
                            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                <span>Payment Menu Position</span>
                                <Form.Item
                                    name="paymentMenuPosition"
                                    rules={[
                                        { required: true, message: "Please input your payment menu position!" },
                                    ]}
                                    validateStatus={errInputPaymentMenu.paymentMenuPosition ? "error" : ""}
                                    help={errInputPaymentMenu.paymentMenuPosition}
                                >
                                    <Input
                                        name="paymentMenuPosition"
                                        value={paymentMenuPositionValueInput?.toString()}
                                        onChange={onChangeFormPaymentMenu}
                                        size="large"
                                        placeholder="Enter your payment menu position"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <span>Payment Menu Status</span>
                        <Form.Item
                            name="paymentMenuStatus"
                            // rules={[
                            //     { required: true, message: "Please input your telephone!" },
                            // ]}
                            validateStatus={errInputPaymentMenu.paymentMenuStatus ? "error" : ""}
                            help={errInputPaymentMenu.paymentMenuStatus}
                        >
                            <Select
                                size="large"
                                defaultValue={true}
                                value={paymentMenuStatusValueInput}
                                onChange={onChangeFormPaymentMenu}
                                options={[
                                    { value: true, label: 'Active' },
                                    { value: false, label: 'Not Active' },
                                ]}
                            />
                        </Form.Item>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name="clear"
                                >
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#f04134',
                                            },
                                        }}
                                    >
                                        <Button className="w-full" type="primary" onClick={onReset}>Clear</Button>
                                    </ConfigProvider>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name="clear"
                                >
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#00a854',
                                            },
                                        }}
                                    >
                                        <Button className="w-full" type="primary" onClick={onSubmitPaymentMenu}>Submit</Button>
                                    </ConfigProvider>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Spin>
            </Card>
            {/* <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
      </Form> */}
        </div>
    );
};
export default AddPaymentMenuPageLayout;
