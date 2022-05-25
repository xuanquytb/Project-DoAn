import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/layout/Landing";
import Auth from "./Components/view/Auth";

import Dashboard from "./Components/layout/Admin/DashBoard";
import MyInfo from "./Components/layout/Page/MyInfo/MyInfo";
import Checkout from "./Components/layout/Page/Checkout/Cart";
import Payment from "./Components/layout/Page/Checkout/Payment";
import Success from "./Components/layout/Page/Checkout/orderSuccess";
import AuthContextProvider from "./Store/Context/AuthContext";
import PaymentContextProvider from "./Store/Context/PaymentContext";
import UserContextProvider from "./Store/Context/UserContext";
import ProductContextProvider from "./Store/Context/ProductContext";
import CategoryContextProvider from "./Store/Context/CategoryContext";
import BrandContextProvider from "./Store/Context/BrandContext";
import CardContextProvider from "./Store/Context/CardContext";
import ProtectedRoute from "./Store/Routing/ProtectedRoute";
import ProtectedRouteUser from "./Store/Routing/ProtectedRouteUser";
import Category_User from "./Components/layout/Page/Category_User";

function App() {
  return (
    <PaymentContextProvider>
      <CardContextProvider>
        <AuthContextProvider>
          <UserContextProvider>
            <CategoryContextProvider>
              <BrandContextProvider>
                <ProductContextProvider>
                  <Router>
                    <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route
                        exact
                        path="/login"
                        render={(props) => (
                          <Auth {...props} authRoute="login" />
                        )}
                      />
                      <Route
                        exact
                        path="/register"
                        render={(props) => (
                          <Auth {...props} authRoute="register" />
                        )}
                      />
                      <Route
                        exact
                        path="/admin/login"
                        render={(props) => (
                          <Auth {...props} authRoute="loginAdmin" />
                        )}
                      />

                      <ProtectedRouteUser
                        exact
                        path="/checkout"
                        component={Checkout}
                      />
                      <ProtectedRouteUser
                        exact
                        path="/payment"
                        component={Payment}
                      />
                      <ProtectedRouteUser
                        exact
                        path="/success"
                        component={Success}
                      />
                      <ProtectedRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/user"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/admin"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/employee"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/category"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/product"
                        component={Dashboard}
                      />
                      <ProtectedRoute
                        exact
                        path="/brand"
                        component={Dashboard}
                      />
                      <ProtectedRoute exact path="/new" component={Dashboard} />
                      <ProtectedRoute
                        exact
                        path="/comment"
                        component={Dashboard}
                      />
                      {/* <ProtectedRouteUser exact path="/myuser" component={MyInfo} /> */}
                      <ProtectedRouteUser
                        exact
                        path="/info"
                        component={MyInfo}
                      />
                      <ProtectedRouteUser
                        exact
                        path="/info/order"
                        component={MyInfo}
                      />
                      <Route
                        exact
                        path="/category-user"
                        component={Category_User}
                      />
                      <Route path="/notfound" />
                    </Switch>
                  </Router>
                </ProductContextProvider>
              </BrandContextProvider>
            </CategoryContextProvider>
          </UserContextProvider>
        </AuthContextProvider>
      </CardContextProvider>
    </PaymentContextProvider>
  );
}

export default App;
