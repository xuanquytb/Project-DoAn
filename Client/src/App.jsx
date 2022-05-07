import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/layout/Landing";
import Auth from "./Components/view/Auth";

import Dashboard from "./Components/layout/Admin/DashBoard";
import LoginAdmin from "./Components/authAdmin/Login";
import User from "./Components/layout/Admin/User/UserContent";
import Checkout from "./Components/layout/Page/Checkout/Cart";
import AuthContextProvider from "./Store/Context/AuthContext";
import AuthAdminContextProvider from "./Store/Context/AuthAdminContext";
import UserContextProvider from "./Store/Context/UserContext";
import ProtectedRoute from "./Store/Routing/ProtectedRoute";

function App() {
    return (
        <AuthAdminContextProvider>
            <AuthContextProvider>
                <UserContextProvider>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Landing} />
                            <Route
                                exact
                                path='/login'
                                render={(props) => (
                                    <Auth {...props} authRoute='login' />
                                )}
                            />
                            <Route
                                exact
                                path='/register'
                                render={(props) => (
                                    <Auth {...props} authRoute='register' />
                                )}
                            />
                            <Route
                                exact
                                path='/admin/login'
                                render={(props) => (
                                    <Auth {...props} authRoute='loginAdmin' />
                                )}
                            />

                            <ProtectedRoute
                                exact
                                path='/checkout'
                                component={Checkout}
                            />
                            <ProtectedRoute
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path='/user'
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path='/admin'
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path='/category'
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path='/product'
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path='/new'
                                component={Dashboard}
                            />
                            <ProtectedRoute
                                exact
                                path='/comment'
                                component={Dashboard}
                            />
                            <Route path='/notfound' />
                        </Switch>
                    </Router>
                </UserContextProvider>
            </AuthContextProvider>
        </AuthAdminContextProvider>
    );
}

export default App;
