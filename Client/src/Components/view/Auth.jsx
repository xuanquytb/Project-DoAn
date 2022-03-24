import React from "react";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register";

const Auth = ({ authRoute }) => {
  return (
    <>
      {authRoute === "login" && <Login />}
      {authRoute === "register" && <Register />}
    </>
  );
};

export default Auth;
