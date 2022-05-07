import React, { useContext } from "react";
import UserContent from "../../Components/layout/Admin/User/UserContent";
import AdminContent from "../../Components/layout/Admin/User/AdminContent";
import EmployeeContent from "../../Components/layout/Admin/User/EmployeeContent";
import ProductContent from "../../Components/layout/Admin/Product/Product";

const AuthDashboard = ({ authRoute }) => {
    const body = (
        <>
            {authRoute === "customer" && <UserContent />}
            {authRoute === "employee" && <EmployeeContent />}
            {authRoute === "admin" && <AdminContent />}
            {authRoute === "product" && <ProductContent />}
        </>
    );

    return <>{body}</>;
};

export default AuthDashboard;
