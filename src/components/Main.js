import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Frontpage from "./frontpage/Frontpage";
import { AuthContainer } from "./authenticate";

const styles = {
  root: {},
  frontpage: {}
};

class Main extends Component {
  state = {
    hello: []
  };

  componentDidMount() {
    axios.get("api/threads/hello").then((res) => {
      this.setState({
        hello: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* <AuthContainer /> */}
        <main className={classes.frontpage}>
          <Frontpage />
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
