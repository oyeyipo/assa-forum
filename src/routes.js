import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";
import { Login, Signup } from "./components/authenticate";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Main} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </div>
);

export default BaseRouter;
