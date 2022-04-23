import React from "react";
import UserContent from "../../Components/layout/Admin/User/UserContent";
import AdminContent from "../../Components/layout/Admin/User/AdminContent";

const AuthDashboard = ({ authRoute }) => {
    const body = (
        <>
            {authRoute === "customer" && <UserContent />}
            {authRoute === "admin" && <AdminContent />}
        </>
    );

    return <>{body}</>;
};

export default AuthDashboard;
