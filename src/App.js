import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import { LoggedUser } from './services/contexts/LoggedUser'

import './shared/styles/reset.css';
import './shared/styles/index.css';
import Login from "./Login/Login";


export default function App() {
    const [loggedUser, setLoggedUser] = useState({});
    return (
        <BrowserRouter>
            <Switch>
                <LoggedUser.Provider value={{loggedUser, setLoggedUser}}>
                    <Route path='/'>
                        <Login />
                        {console.log(loggedUser)}
                    </Route>
                </LoggedUser.Provider>
            </Switch>
        </BrowserRouter>
    );
}
