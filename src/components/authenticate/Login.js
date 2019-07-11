import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

// STYLING
import { withStyles } from "@material-ui/core/styles";
import { TextField, Paper, Typography, Button } from "@material-ui/core";

const styles = (theme) => ({
  container: {
    margin: "1rem auto"
  },
  title: {
    textAlign: "center"
  },
  form: {
    margin: "0 1rem"
  },
  button: {
    margin: "1rem auto"
  },
  errors: {
    color: "orangered"
  }
});

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      role: "1",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username: this.state.username,
      role: this.state.role,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (
      <Paper className={classes.container} elevation={0}>
        <div className={classes.title}>
          <Typography variant="h6" component="h2">
            Login
          </Typography>

          <Typography variant="subtitle1" component="h3" color="textSecondary">
            Log in into account.
          </Typography>

          {errors.non_field_errors && 
            <Typography variant="subtitle1" component="h3" color="textSecondary" className={classes.errors}>
            {errors.non_field_errors}
          </Typography>
          }
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            required
            error={errors.username}
            id="username-input"
            label="Enter Username or Email"
            type="text"
            name="text"
            margin="dense"
            value={this.state.username}
            onChange={this.handleChange("username")}
            variant="outlined"
            fullWidth
          />
          {errors.username && (
            <div className={classes.errors}>
              <small>{errors.username}</small>
            </div>
          )}

          <TextField
            required
            error={errors.password}
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleChange("password")}
            fullWidth
          />
          {errors.password && (
            <div className={classes.errors}>
              <small>{errors.password}</small>
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onSubmit}
          >
            Log In
          </Button>
        </form>
      </Paper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(withStyles(styles)(Login)));
