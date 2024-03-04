import { Routes, Route, useLocation } from "react-router-dom";

//import ProtectRoute from "./ProtectRouter";
// import { User, AddUser } from "../pages/menu_management/user";
// import AuthLayout from "../components/layouts/Layout";
// import BerandaPage from "../pages/beranda/BerandPage";
import LoginPage from "../pages/login/container/LoginPageContainer";
import BerandaPage from "../pages/beranda/container/BerandaPageContainer";
// import BerandaPage from "../pages/beranda/container/BerandaPageContainer";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import ProtectRoute from "./ProtectRouter";
import Sidebar from "../components/sidebar/layout/SidebarComponentLayout";
import User from "../pages/users/container/UserPageContainer";
import AddUserPageContainer from "../pages/users/container/AddUserPageContainer";
import PaymentMenuPageContainer from "../pages/PaymentMenus/container/PaymentMenuPageContainer";
import PaymentPageContainer from "../pages/Payment/container/PaymentPageContainer";
// import PaymentMenuPageContainer from "../pages/PaymentMenus/container/PaymetMenuPageContainer";

const Router = () => {
    const location = useLocation();
    return location.pathname === "/" ? (
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    ) : (
        <Sidebar>
            <Routes>
                <Route
                    path="/beranda"
                    element={
                        <ProtectRoute>
                            <BerandaPage />
                        </ProtectRoute>
                    }
                />
                <Route
                    path="/user"
                    element={
                        <ProtectRoute>
                            <User />
                        </ProtectRoute>
                    }
                />
                <Route
                    path="/user/add"
                    element={
                        <ProtectRoute>
                            <AddUserPageContainer getAllUser={undefined} />
                        </ProtectRoute>
                    }
                />
                <Route
                    path="/payment/menu"
                    element={
                        <ProtectRoute>
                            <PaymentMenuPageContainer />
                        </ProtectRoute>
                    }
                />
                <Route
                    path="/payment"
                    element={
                        <ProtectRoute>
                            <PaymentPageContainer />
                        </ProtectRoute>
                    }
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Sidebar>
    );

    // <AuthLayout>
    //   <Routes>
    //     <Route path="/beranda" element={<ProtectRoute><BerandaPage /></ProtectRoute>} />
    //     <Route path="/" element={<Login />} />
    //     <Route
    //       path="/menu-management/user"
    //       element={
    //         <ProtectRoute>
    //           <User />
    //         </ProtectRoute>
    //       }
    //     />

    //     <Route path="/*" element={<ProtectRoute><NotFoundPage /></ProtectRoute>} />
    //   </Routes>
    // </AuthLayout>
};

export default Router;
