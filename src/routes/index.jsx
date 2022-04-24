import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

function Routes(){
    return (
        <Switch>
            <Route exact path={'/'}>
                <Login/>
            </Route>

            <Route exact path={'/register'}>
                <Register/>
            </Route>

            <Route exact path={'/home'}>
                <Home/>
            </Route>

        </Switch>
    )
}

export default Routes