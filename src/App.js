import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import LoggedUser from "./services/contexts/LoggedUser.js";
import { SignedUser } from "./services/contexts/SignedUser.js";
import Timeline from "./Timeline/Timeline.js";

import './shared/styles/reset.css';
import './shared/styles/index.css';
import SignUp from "./SignUp/SignUp.js";
import Login from "./Login/Login.js";



export default function App() {
    const [signedUser, setSignedUser] = useState({})
    return (
        <BrowserRouter>
            <Switch>
                <SignedUser.Provider value={{ signedUser, setSignedUser }}>
                    <LoggedUser.Provider  value='teste'>
                        <Route exact path="/">
                            <Login />
                            <h1> path "/" </h1>
                        </Route>
                        <Route path='/signup' exact>
                            <SignUp></SignUp>
                        </Route>
                        <Route exact path="/timeline">
                            <Timeline />
                        </Route>


                        <Route exact path="/02">
                            <h3> path "/02" </h3>
                        </Route>

                    </LoggedUser.Provider>
                </SignedUser.Provider>
            </Switch>
        </BrowserRouter>
    );
}
