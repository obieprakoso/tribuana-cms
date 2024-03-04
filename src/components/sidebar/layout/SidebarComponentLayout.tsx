import React, { useState } from "react";
import {
    HomeOutlined,
    UserOutlined,
    AppstoreOutlined,
    DollarOutlined
} from "@ant-design/icons";
import { Layout, Menu, MenuProps, theme } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { getCookie } from "../../../helpers/CookieFunction";

const { Header, Content, Footer, Sider } = Layout;
const items: MenuProps["items"] = [
    {
        label: "Beranda",
        key: "/beranda",
        icon: <HomeOutlined />,
    },
    {
        label: "User",
        key: "/user",
        icon: <UserOutlined />,
    },
    {
        label: "Payment Menu",
        key: "/payment/menu",
        icon: <AppstoreOutlined />,
    },
    {
        label: "Payment",
        key: "/payment",
        icon: <DollarOutlined />,
    }

];

interface Content {
    children: React.ReactNode;
}

const SidebarComponentLayout: React.FC<Content> = ({ children }) => {
    const navigate = useNavigate();
    const user = getCookie("auth");
    const location = useLocation();

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [current, setCurrent] = useState(location.pathname);

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
        setCurrent(e.key);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                theme="light"
                style={{ width: "180px" }}
                breakpoint="lg"
                width={250}
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="pt-5 pb-5 px-6">
                    <a href="#!">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                    className="rounded-full w-10"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="grow ml-3">
                                <p className="text-sm font-semibold text-blue-600">
                                    {user?.name}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <Menu
                    theme="light"
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="vertical"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: "24px 16px 0" }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Perumahan TRIBUANA PERMAI @2023
                </Footer>
            </Layout>
        </Layout>
    );
};

export default SidebarComponentLayout;
