import React, { useContext, useEffect } from "react";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import ListCategory from "../layout/Page/ListCategory";
import Container from "../layout/Page/Container";
import Slide from "../layout/Page/Slide";

import ProtectedRouteUser from "../../Store/Routing/ProtectedRouteUser";
import { ProductContext } from "../../Store/Context/ProductContext";

const Landing = () => {
  const { getProduct } = useContext(ProductContext);

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <ProtectedRouteUser>
        <Header />
        <ListCategory />
        <Slide />
        <Container />
        <Footer />
      </ProtectedRouteUser>
    </>
  );
};

export default Landing;
