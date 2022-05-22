import Header from "./Page/Header";
import ListCategory from "../layout/Page/ListCategory";
import Container from "../layout/Page/Container";
import Slide from "../layout/Page/Slide";
import ProtectedRouteUser from "../../Store/Routing/ProtectedRouteUser";

const Landing = () => {
  return (
    <>
      <ProtectedRouteUser>
        <Header />
        <ListCategory />
        <Slide />
        <Container />
      </ProtectedRouteUser>
    </>
  );
};

export default Landing;
