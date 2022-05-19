import Header from "./Page/Header";
import ListCategory from "../layout/Page/ListCategory";
import Container from "../layout/Page/Container";
import Slide from "../layout/Page/Slide";
import ProductContextProvider from "../../Store/Context/ProductContext";

const Landing = () => {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <ListCategory />
        <Slide />
        <Container />
      </ProductContextProvider>
    </>
  );
};

export default Landing;
