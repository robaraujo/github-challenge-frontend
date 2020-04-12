import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Views
import Home from "./pages/Home";
import User from "./pages/User";
import UserRepos from "./pages/UserRepos";

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={User} exact path="/user/:id" />
    <Route component={UserRepos} exact path="/user/:id/repos" />
    <Redirect to="/not-found" />
  </Switch>
);

export default Routes;
