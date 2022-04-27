import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useState } from "react";
import { useEffect } from "react";

function Routes(){

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@KenzieHUB:token'))
        if(token){
            return setAuthenticated(true)
        }
    }, [authenticated])

    return (
        <Switch>
            <Route exact path={'/'}>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>

            <Route exact path={'/register'}>
                <Register authenticated={authenticated}/>
            </Route>

            <Route path={'/home'}>
                <Home authenticated={authenticated}/>
            </Route>

        </Switch>
    )
}

export default Routes