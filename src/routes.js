import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Main} />
  </div>
);

export default BaseRouter;
