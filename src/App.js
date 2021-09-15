import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import LoggedUser from "./services/contexts/LoggedUser.js";
import Timeline from "./Timeline/Timeline.js";

import './shared/styles/reset.css';
import './shared/styles/index.css';

export default function App() {
    
  return (
    <BrowserRouter>
      <Switch>
        <LoggedUser.Provider>
          <Route exact path="/">
            <h1> path "/" </h1>
          </Route>

          <Route exact path="/timeline">
            <Timeline />
          </Route>

          <Route exact path="/02">
            <h3> path "/02" </h3>
          </Route>

        </LoggedUser.Provider>
      </Switch>
    </BrowserRouter>
  );
}