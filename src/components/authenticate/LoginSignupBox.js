import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button, Grid, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

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
    const LoginLink = (props) => <RouterLink to="/login" {...props} />;
    const SignupLink = (props) => <RouterLink to="/signup" {...props} />;

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
                    <Link
                      component={LoginLink}
                      color="inherit"
                      underline="none"
                    >
                      Log IN
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Typography component="p">OR</Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.signup}>
                    <Link
                      component={SignupLink}
                      color="inherit"
                      underline="none"
                    >
                      Sign UP
                    </Link>
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
