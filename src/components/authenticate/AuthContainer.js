import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button, Grid, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const styles = (theme) => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        margin: "6px"
    },
    welcome: {
        marginBottom: "1rem",
        fontSize: "1.5rem",
        textAlign: "center"
    },
    signup: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 1rem",
        boxShadow: "0 .2rem .3rem .1rem rgba(255, 105, 135, .3)"
    },
    login: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 1rem",
        boxShadow: "0 .2rem .3rem .1rem rgba(0,0,0,.3)"
    }
});

class AuthContainer extends Component {
    state = {
        hello: []
    };

    componentDidMount() {
        axios.get("api/threads/hello").then((res) => {
            this.setState({
                hello: res.data
            });
        });
    }
    render() {
        const {classes} = this.props;
        const {hello} = this.state;
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
            color="textSecondary"
            className={classes.welcome}
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
                  <Typography color="textSecondary" component="p">OR</Typography>
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

AuthContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthContainer);
