import { BrowserRouter, Switch, Route } from "react-router-dom";

import React, { useState } from "react";


import Timeline from "./Timeline/Timeline.js";


import { SignedUser } from "./services/contexts/SignedUser.js";
import './shared/styles/reset.css';
import './shared/styles/index.css';
import SignUp from "./SignUp/SignUp.js";
import { LoggedUser } from './services/contexts/LoggedUser'
import Login from "./Login/Login";





export default function App() {
    const [signedUser, setSignedUser] = useState({})
    const [loggedUser, setLoggedUser] = useState({});
    return (
        <SignedUser.Provider value={{ signedUser, setSignedUser }}>
            <LoggedUser.Provider value={{ loggedUser, setLoggedUser }}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact>
                            <Login />
                        </Route>
                        <Route exact path="/timeline">
                            <Timeline />
                        </Route>
                        <Route path='/signup' exact>
                            <SignUp />
                        </Route>
                        <Route path="/my-post" exact>

                        </Route>
                        <Route path="/my-likes" exact>
                            
                        </Route>
                    </Switch>
                </BrowserRouter>
            </LoggedUser.Provider>
        </SignedUser.Provider>
    );
}

