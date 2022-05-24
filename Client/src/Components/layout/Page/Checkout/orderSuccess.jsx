import React, { useState, useContext, useEffect } from "react";
import "../../../Style/orderSuccess.css";
import Header from "../Header";
// import { AuthContext } from "../../../Store/Context/AuthContext";
import { CardContext } from "../../../../Store/Context/CardContext";
import axios from "axios";
import { Form, Button, Row, Input, Select, Radio, Space } from "antd";

const { Option, OptGroup } = Select;

const orderSuccess = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default orderSuccess;
