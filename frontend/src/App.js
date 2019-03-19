import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { CssBaseline } from "@material-ui/core";
import { CustomLayout } from "./containers";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <CssBaseline />
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </Fragment>
    );
  }
}

export default App;
