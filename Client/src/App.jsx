import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/layout/Landing";
import Auth from "./Components/view/Auth";
import Dashboard from "./Components/layout/Admin/DashBoard";
import Checkout from "./Components/layout/Page/Checkout/Cart";
import AuthContextProvider from "./Store/Context/AuthContext";
import UserContextProvider from "./Store/Context/UserContext";
import ProtectedRoute from "./Store/Routing/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Landing} />
          <Route
            exact
            path="/login"
            render={(props) => <Auth {...props} authRoute="login" />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          />
          <Route
            exact
            path="/checkout"
            // render={(props) => <Auth {...props} authRoute="checkout" />}
            component={Checkout}
          />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
