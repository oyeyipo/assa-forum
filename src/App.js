import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import BaseRouter from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import { CssBaseline } from "@material-ui/core";
import { CustomLayout } from "./containers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Theme } from "./components/layouts";
// import "./App.css";

// Check for token
if (localStorage.jwtToken) {
    // Set token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and expiration
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // TODO: Clear current Profile


        // Redirect to login
        window.location.href = '/login';
    }
}

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
