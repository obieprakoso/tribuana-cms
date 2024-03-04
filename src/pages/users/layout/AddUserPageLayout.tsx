import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, ConfigProvider, Form, FormInstance, Input, Modal, Row, Select, Spin } from "antd";
import React, { FC, useState, useEffect } from "react";
import SelectRoleContainer from "../../../components/formSelect/role/container";
const { TextArea } = Input;
interface RegisterUserProps {
    errInput: any;
    isLoadingAddUser: boolean;
    onSubmit: any;
    emailValueInput: string;
    firstNameValueInput?: string | null;
    lastNameValueInput?: string | null;
    numberTelephoneValueInput?: string | null;
    numberUnitValueInput?: string | null;
    roleValueInput: string;
    addressValueInput: string;
    passwodValueInput?: string | null;
    confirmPasswordValueInput?: string | null;
    onChangeForm: any;
    onChangeSelect: any;
    onClear: any;
    modalOpen: boolean;
    toggleShow: () => void;

}
const AddUserPageLayout: FC<RegisterUserProps> = ({ errInput,
    isLoadingAddUser,
    onSubmit,
    emailValueInput,
    firstNameValueInput,
    lastNameValueInput,
    numberTelephoneValueInput,
    numberUnitValueInput,
    roleValueInput,
    addressValueInput,
    passwodValueInput,
    confirmPasswordValueInput,
    onChangeForm,
    onChangeSelect,
    onClear,
    modalOpen,
    toggleShow, }) => {
    const formRef = React.useRef<FormInstance>(null);
    const onReset = () => {
        formRef.current?.resetFields();
        onClear();
    };
    return (
        <div>
            <Modal
                title="Add User"
                centered
                open={modalOpen}
                onOk={onSubmit}
                onCancel={toggleShow}
                footer={[
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form>
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
                            </Form>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form>
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
                                        <Button className="w-full" type="primary" onClick={onSubmit}>Submit</Button>
                                    </ConfigProvider>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                ]}
            >
                <div>
                    <Spin size="large" spinning={isLoadingAddUser}>
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
                                    <span>First Name</span>
                                    <Form.Item
                                        name="firstName"
                                        rules={[
                                            { required: true, message: "Please input your firs name!" },
                                        ]}
                                        validateStatus={errInput.firstName ? "error" : ""}
                                        help={errInput.firstName}
                                    >
                                        <Input
                                            name="firstName"
                                            value={firstNameValueInput?.toString()}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your first name"
                                        />
                                    </Form.Item>
                                </Col>
                                {/* LastName */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>Last Name</span>
                                    <Form.Item
                                        name="lastName"
                                        rules={[
                                            { required: true, message: "Please input your last name!" },
                                        ]}
                                        validateStatus={errInput.lastName ? "error" : ""}
                                        help={errInput.lastName}
                                    >
                                        <Input
                                            name="lastName"
                                            value={lastNameValueInput?.toString()}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your last name"
                                        />
                                    </Form.Item>
                                </Col>
                                {/* Email */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>Email</span>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            { required: true, message: "Please input your email!" },
                                        ]}
                                        validateStatus={errInput.email ? "error" : ""}
                                        help={errInput.email}
                                    >
                                        <Input
                                            id="email"
                                            name="email"
                                            value={emailValueInput}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your email"
                                        />
                                    </Form.Item>
                                </Col>
                                {/* //NoTelp */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>No. Telphone</span>
                                    <Form.Item
                                        name="numberTelephone"
                                        rules={[
                                            { required: true, message: "Please input your telephone!" },
                                        ]}
                                        validateStatus={errInput.numberTelephone ? "error" : ""}
                                        help={errInput.numberTelephone}
                                    >
                                        <Input
                                            name="numberTelephone"
                                            value={numberTelephoneValueInput?.toString()}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your telephone"
                                        />
                                    </Form.Item>
                                </Col>
                                {/* Password */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>Password</span>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your password!",
                                            },
                                        ]}
                                        validateStatus={errInput.password ? "error" : ""}
                                        help={errInput.password}
                                    >
                                        <Input.Password
                                            name="password"
                                            value={passwodValueInput?.toString()}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your password"
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                        />
                                    </Form.Item>
                                </Col>
                                {/* //ConfirmPassword */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>Confirm Password</span>
                                    <Form.Item
                                        name="confirmPassword"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your confirm password!",
                                            },
                                        ]}
                                        validateStatus={errInput.confirmPassword ? "error" : ""}
                                        help={errInput.confirmPassword}
                                    >
                                        <Input.Password
                                            name="confirmPassword"
                                            value={confirmPasswordValueInput?.toString()}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your confirm password"
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                        />
                                    </Form.Item>
                                </Col>
                                {/* NumberUnit */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>No. Unit</span>
                                    <Form.Item
                                        name="numberUnit"
                                        rules={[
                                            { required: true, message: "Please input your number unit!" },
                                        ]}
                                        validateStatus={errInput.numberUnit ? "error" : ""}
                                        help={errInput.numberUnit}
                                    >
                                        <Input
                                            name="numberUnit"
                                            value={numberUnitValueInput?.toString()}
                                            onChange={onChangeForm}
                                            size="large"
                                            placeholder="Enter your number unit"
                                        />
                                    </Form.Item>
                                </Col>
                                {/* //Role */}
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <span>Role</span>
                                    <Form.Item
                                        name="role"
                                        // rules={[
                                        //     { required: true, message: "Please input your telephone!" },
                                        // ]}
                                        validateStatus={errInput.role ? "error" : ""}
                                        help={errInput.role}
                                    >
                                        <SelectRoleContainer onChange={onChangeSelect} />
                                        {/* <Select
                                        size="large"
                                        defaultValue="user"
                                        value={roleValueInput?.toString()}
                                        onChange={onChangeForm}
                                        options={[
                                            { value: 'admin', label: 'Admin' },
                                            { value: 'user', label: 'Member' },
                                        ]}
                                    /> */}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <span>Address</span>
                            <Form.Item
                                name="address"
                                rules={[
                                    { required: true, message: "Please input your address!" },
                                ]}
                                validateStatus={errInput.address ? "error" : ""}
                                help={errInput.address}
                            >
                                <TextArea
                                    name="address"
                                    value={addressValueInput?.toString()}
                                    onChange={onChangeForm}
                                    placeholder="Enter your address"
                                    autoSize={{ minRows: 2, maxRows: 6 }}
                                />
                            </Form.Item>
                            {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
                                            <Button className="w-full" type="primary" onClick={onSubmit}>Submit</Button>
                                        </ConfigProvider>
                                    </Form.Item>
                                </Col>
                            </Row> */}
                        </Form>
                    </Spin>
                </div>
            </Modal>
        </div>
    );
};
export default AddUserPageLayout;
