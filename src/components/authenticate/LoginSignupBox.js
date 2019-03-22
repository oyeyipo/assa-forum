import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button, Grid } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: "6px"
  },
  heading: {
    marginBottom: "10px"
  },
  signup: {
    backgroundColor: theme.palette.secondary.light,
    color: `#fff`
  },
  login: {
    backgroundColor: theme.palette.primary.light,
    color: `#fff`
  }
});

class LoginSignupBox extends Component {
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
    const { hello } = this.state;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Grid
            container
            justify="center"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h5"
                component="h3"
                className={classes.heading}
              >
                {hello.message}
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                spacing={16}
              >
                <Grid item>
                  <Button variant="contained" className={classes.login}>
                    Log IN
                  </Button>
                </Grid>
                <Grid item>
                  <Typography component="p">OR</Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.signup}>
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

LoginSignupBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginSignupBox);
