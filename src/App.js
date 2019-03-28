import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { CssBaseline } from "@material-ui/core";
import { CustomLayout } from "./containers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Theme } from "./components/layouts";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <CssBaseline />
          <MuiThemeProvider theme={Theme}>
            <CustomLayout>
              <BaseRouter />
            </CustomLayout>
          </MuiThemeProvider>
        </Router>
      </Fragment>
    );
  }
}

export default App;
