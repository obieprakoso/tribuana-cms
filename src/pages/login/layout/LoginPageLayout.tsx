import React, { FC, useState, useEffect } from "react";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Form } from "antd";
import { Spin } from "antd";
import iconLoginPage from "../../../assets/Login-Background-Icon.png"

interface LoginProps {
    emailValueInput?: string | null;
    passwodValueInput?: string | null;
    isLoadingLogin: boolean;
    errInput: any;
    onChangeForm: any;
    onSubmit: any;
}

const LoginPageLayout: FC<LoginProps> = ({
    emailValueInput,
    passwodValueInput,
    onChangeForm,
    onSubmit,
    isLoadingLogin,
    errInput,
}) => {
    return (
        <div className="grid grid-cols-2">
            <section className="bg-gradient-to-r from-rose-100 to-teal-100 relative h-screen max-ipad:hidden">
                <div className="max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0">
                    <img
                        src={iconLoginPage}
                        className="w-full h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[350px]"
                        alt="Sample image"
                    />
                </div>
            </section>
            <section className="min-ipad:relative">
                <form className="max-w-md m-auto h-max absolute top-0 bottom-0 left-0 right-0">
                    <header className="px-3">
                        <h1 className="text-[28px] font-bold">Welcome Back</h1>
                        <p className="text-slate-400 text-base">
                            Please enter your credentials
                        </p>
                    </header>
                    <div className="mt-4 px-3">
                        <Spin size="large" spinning={isLoadingLogin}>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                // onFinish={onFinish}
                                // onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your email!" },
                                    ]}
                                    validateStatus={errInput.email ? "error" : ""}
                                    help={errInput.email}
                                >
                                    <Input
                                        name="email"
                                        value={emailValueInput?.toString()}
                                        onChange={onChangeForm}
                                        size="large"
                                        placeholder="Enter your email"
                                        prefix={<MailOutlined className="site-form-item-icon" />}
                                    />
                                </Form.Item>
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
                                <Form.Item className="py-[25px]">
                                    <Button onClick={onSubmit} className="w-full">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Spin>
                    </div>
                </form>
            </section>
        </div>
    );
};
export default LoginPageLayout;
