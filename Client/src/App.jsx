import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/layout/Landing";
import Auth from "./Components/view/Auth";
import Dashboard from "./Components/layout/Admin/DashBoard";
import AuthContextProvider from "./Store/Context/AuthContext";
import ProtectedRoute from "./Store/Routing/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
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
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
