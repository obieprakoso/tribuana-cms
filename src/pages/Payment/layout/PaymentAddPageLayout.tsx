import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Col, ConfigProvider, DatePicker, Form, FormInstance, Input, InputNumber, Modal, Row, Select, Spin } from "antd";
import React, { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import IPaymentFilter from "../../../interface/IPaymentFilter";
import FormatCurrency from "../../../helpers/FormatCurrency";
import SelectUserContainer from "../../../components/formSelect/user/container";
import SelectPaymentMenuContainer from "../../../components/formSelect/paymentMenu/container";
import SelectPaymentMethodContainer from "../../../components/formSelect/paymentMethod/container";
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
    valueAmount: string;
    handleDateChange: any;
    handleChange: any;

}

// eslint-disable-next-line react-hooks/rules-of-hooks


const PaymentFilterPageLayout: FC<PaymentFilterProps> = ({ valueAmount, handleDateChange, handleChange }) => {
    const formRef = React.useRef<FormInstance>(null);
    const onReset = () => {
        formRef.current?.resetFields();
        // onClear();
    };

    const formatter = (value: any) => {
        if (value) {
            // Format the value as IDR currency
            return `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return '';
    };

    const parser = (value: any) => {
        // Remove non-numeric characters and parse the value
        return value.replace(/\D/g, '');
    };

    return (
        <div>
            <Spin size="large" spinning={false}>
                <Form
                    ref={formRef}
                    name="control-hooks-add-payment"
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
                        <DatePicker
                            size="large"
                            id="date"
                            name="date"
                            style={{ width: '100%' }}
                            onChange={handleDateChange}
                            format={"YYYY-MM-DD"}
                        />
                    </Form.Item>
                    <span>Payment Amount</span>
                    <Form.Item
                        name="paymentAmount"
                        rules={[
                            { required: true, message: "Please input your payment amount" },
                        ]}
                    // validateStatus={errInput.firstName ? "error" : ""}
                    // help={errInput.firstName}
                    >
                        <InputNumber
                            name="payment_amount"
                            value={valueAmount}
                            onChange={(value: number) => handleChange(value, 'payment_amount')}
                            size="large"
                            style={{ width: '100%' }}
                            placeholder="Enter your Amount"
                            formatter={formatter}
                            parser={parser}
                        />
                    </Form.Item>
                    <span>User</span>
                    <Form.Item
                        name="user_id"
                    // validateStatus={errInput.role ? "error" : ""}
                    // help={errInput.role}
                    >
                        <SelectUserContainer onChange={(value: number) => handleChange(value, 'user_id')} value={0} />

                    </Form.Item>
                    <span>Payment</span>
                    <Form.Item
                        name="payment_menu_id"
                    // validateStatus={errInput.role ? "error" : ""}
                    // help={errInput.role}
                    >
                        <SelectPaymentMenuContainer onChange={(value: number) => handleChange(value, 'payment_menu_id')} value={0} />

                    </Form.Item>
                    <span>Payment Method</span>
                    <Form.Item
                        name="payment_method"
                    // validateStatus={errInput.role ? "error" : ""}
                    // help={errInput.role}
                    >
                        <SelectPaymentMethodContainer onChange={(value: number) => handleChange(value, 'payment_method')} value={0} />

                    </Form.Item>
                </Form>
            </Spin>
        </div>
    );
};
export default PaymentFilterPageLayout;
