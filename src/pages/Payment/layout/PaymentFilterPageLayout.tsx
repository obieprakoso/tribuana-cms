import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, ConfigProvider, DatePicker, Form, FormInstance, Input, Modal, Row, Select, Spin } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import IPaymentFilter from "../../../interface/IPaymentFilter";
// import SelectRoleContainer from "../../../components/formSelect/role/container";
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PaymentFilterProps {
    // errInput: any;
    // isLoadingAddUser: boolean;
    // onSubmit: any;
    // emailValueInput: string;
    // firstNameValueInput?: string | null;
    // lastNameValueInput?: string | null;
    // numberTelephoneValueInput?: string | null;
    // numberUnitValueInput?: string | null;
    // roleValueInput: string;
    // addressValueInput: string;
    // passwodValueInput?: string | null;
    // confirmPasswordValueInput?: string | null;
    // onChangeForm: any;
    // onChangeSelect: any;
    // onClear: any;
    // modalOpen: boolean;
    // toggleShow: () => void;
    onChange: any;

}

// eslint-disable-next-line react-hooks/rules-of-hooks


const PaymentFilterPageLayout: FC<PaymentFilterProps> = ({ onChange }) => {
    const formRef = React.useRef<FormInstance>(null);
    const onReset = () => {
        formRef.current?.resetFields();
        // onClear();
    };
    return (
        <div>
            <Spin size="large" spinning={false}>
                <Form
                    ref={formRef}
                    name="control-hooks"
                    // initialValues={RegisterUserProps}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <span>Payment Date</span>
                    <Form.Item
                        name="paymentDate"
                        rules={[
                            { required: true, message: "Please input your payment date" },
                        ]}
                    // validateStatus={errInput.firstName ? "error" : ""}
                    // help={errInput.firstName}
                    >
                        <RangePicker
                            id="date"
                            name="date"
                            style={{ width: '100%' }}
                            onChange={onChange}
                            format={"YYYY-MM-DD"}
                            clearIcon={true}
                            allowClear={true}
                        />
                    </Form.Item>
                </Form>
            </Spin>
        </div>
    );
};
export default PaymentFilterPageLayout;
