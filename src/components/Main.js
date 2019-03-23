import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   Typography
// } from "@material-ui/core";

import Frontpage from "./frontpage/Frontpage";
import { LoginSignupBox } from "./authenticate";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
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
    //const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
        <LoginSignupBox />
        <Frontpage />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
