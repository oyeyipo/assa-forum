import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import { CssBaseline } from "@material-ui/core";
import { CustomLayout } from "./containers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Theme } from "./components/layouts";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
