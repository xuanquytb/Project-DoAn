import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/layout/Landing";
import Auth from "./Components/view/Auth";

import Dashboard from "./Components/layout/Admin/DashBoard";
import Checkout from "./Components/layout/Page/Checkout/Cart copy";
import AuthContextProvider from "./Store/Context/AuthContext";
import UserContextProvider from "./Store/Context/UserContext";
import ProtectedRoute from "./Store/Routing/ProtectedRoute";

function App() {
    return (
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

                        <Route exact path='/checkout' component={Checkout} />
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
                            path='/employee'
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
    );
}

export default App;
