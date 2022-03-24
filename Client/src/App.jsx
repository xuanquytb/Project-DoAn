import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/layout/Landing";
import Auth from "./Components/view/Auth";
import Dashboard from "./Components/layout/DashBoard";
import AuthContextProvider  from "./Store/Context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
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
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          />
          <Route
            exact
            path="/dashboard"
            component ={Dashboard}
          />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
