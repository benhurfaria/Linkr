import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { SignedUser } from "./services/contexts/SignedUser.js";
import { LoggedUser } from './services/contexts/LoggedUser'
import './shared/styles/reset.css';
import './shared/styles/index.css';
import SignUp from "./SignUp/SignUp.js";
import Login from "./Login/Login";
import Timeline from "./Timeline/Timeline.js";
import MyPosts from "./MyPosts/MyPosts.js";
import MyLikes from "./MyLikes/MyLikes.js";
import UserIDPosts from "./UserIDPosts/UserIDPosts.js";
import HashtagPosts from "./HashtagPosts/HashtagPosts.js";
import { getStoredUser } from "./services/api/Api.js";


export default function App() {
    const [signedUser, setSignedUser] = useState({});
    const [loggedUser, setLoggedUser] = useState({});
    useEffect(() => {
        const user = getStoredUser()
        setLoggedUser(user)
        
    }, [])

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

                        <Route exact path="/my-posts">
                            <MyPosts />
                        </Route>
                        <Route exact path="/user/:id">
                            <UserIDPosts />
                        </Route>
                        
                        <Route path="/my-likes" exact>
                            <MyLikes />
                        </Route>

                        <Route exact path="/hashtag/:hashtagid">
                            <HashtagPosts  />
                        </Route>
                        
                    </Switch>
                </BrowserRouter>
            </LoggedUser.Provider>
        </SignedUser.Provider >
    );
}

