import React, { Component, Fragment } from "react";
import "./App.css";
import { Header } from "./layout";
import { Button, CssBaseline } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <h1> My React App</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Fragment>
    );
  }
}

export default App;

/////////////////////// APP COLORS //////////////////////////////

/*
green

500 #4caf50
50 #e8f5e9
100 #c8e6c9
200 #a5d6a7
300 #81c784
400 #66bb6a
500 #4caf50
600 #43a047
700 #388e3c
800 #2e7d32
900 #1b5e20

blueGrey

500 #607d8b
50 #eceff1
100 #cfd8dc
200 #b0bec5
300 #90a4ae
400 #78909c
500 #607d8b
600 #546e7a
700 #455a64
800 #37474f
900 #263238
*/
