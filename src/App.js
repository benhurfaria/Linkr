import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useState} from "react";

//import context from "./.....";

import './shared/styles/reset.css';
import './shared/styles/index.css';

export default function App() {
    
  return (
    <BrowserRouter>
      <Switch>
        {/* <context.Provider value={{ ..., ....}} > */}
          <Route exact path="/">
            <h1> path "/" </h1>
          </Route>

          <Route exact path="/01">
            <h2> path "/01" </h2>
          </Route>

          <Route exact path="/02">
            <h3> path "/02" </h3>
          </Route>

        {/* </context.Provider> */}
      </Switch>
    </BrowserRouter>
  );
}