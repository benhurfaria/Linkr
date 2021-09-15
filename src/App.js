import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";

import { SignedUser } from "./services/contexts/SignedUser.js";
import './shared/styles/reset.css';
import './shared/styles/index.css';
import SignUp from "./SignUp/SignUp.js";


export default function App() {
    const [signedUser, setSignedUser] = useState({})
    return (
        <BrowserRouter>
            <Switch>
                <SignedUser.Provider value={{ signedUser, setSignedUser }}>
                    <Route path='/signup' exact>
                        <SignUp></SignUp>
                    </Route>
                </SignedUser.Provider>
            </Switch>
        </BrowserRouter>
    );
}
