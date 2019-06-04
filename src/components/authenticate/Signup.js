import React, { Component } from "react";
import PropTypes from "prop-types";
// import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      roles: "1",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      roles: this.state.roles,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <Paper className={classes.container} elevation={0}>
        <div className={classes.title}>
          <Typography variant="h6" component="h2">
            Register
          </Typography>

          <Typography variant="subtitle1" component="h3" color="textSecondary">
            Create your account with the form below
          </Typography>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            required
            error={errors.username}
            id="username-input"
            label="Enter Username"
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
            error={errors.email}
            id="email-input"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            margin="dense"
            onChange={this.handleChange("email")}
            variant="outlined"
            value={this.state.email}
            fullWidth
          />
          {errors.email && (
            <div className={classes.errors}>
              <small>{errors.email}</small>
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

          <TextField
            required
            error={errors.password2}
            id="repeat-password-input"
            label="Password (again)"
            type="password"
            autoComplete="current-password"
            margin="dense"
            value={this.state.password2}
            onChange={this.handleChange("password2")}
            variant="outlined"
            fullWidth
          />
          {errors.password2 && (
            <div className={classes.errors}>
              <small>{errors.password2}</small>
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.onSubmit}
          >
            Create
          </Button>
        </form>
      </Paper>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(withStyles(styles)(Signup)));
