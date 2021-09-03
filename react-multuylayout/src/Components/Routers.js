import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import LoginPage from "../Pages/LoginPage";
import UserDetailsPage from "../Pages/UserDetailsPage";

const Routers = ({ }) => {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/layout1">layout1</Link>
                        </li>
                        <li>
                            <Link to="/layout2">layout2</Link>
                        </li>
                    </ul>

                    <hr />
                    <Switch>
                        {/* <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route> */}
                        <Redirect from="/" to="/layout1" />
                        <Route path="/layout1" component={LoginPage} />
                        <Route path="/layout2" component={UserDetailsPage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Routers;