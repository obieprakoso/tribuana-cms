import React, { FC, useState, useEffect } from "react";
import UserPageLayout from "../layout/UserPageLayout";
import InterfaceTableUser from "../../../interface/ITableUser";
import { getCookie } from "../../../helpers/CookieFunction";
import Http from "../../../helpers/Fatch";

const UserPageContainer: FC = () => {
    const [dataUsers, setDataUsers] = useState<Array<InterfaceTableUser>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = getCookie("auth");

    useEffect(() => {
        GetAllUser();
    }, []);

    const GetAllUser = async () => {
        setLoading(true);
        try {
            const res = await Http.get("user/true", {
                headers: { Authorization: `Bearer ${user?.accessToken}` },
            });

            setDataUsers(res.data.data);
            setLoading(false);
        } catch (error: any) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <UserPageLayout loading={loading} dataSource={dataUsers} />
    )
}
export default UserPageContainer;