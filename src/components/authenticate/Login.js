import React, { Component } from "react";
import PropTypes from "prop-types";
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

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const loginUser = {
      username: this.state.username,
      role: this.state.role,
      password: this.state.password
    };
    console.log(loginUser);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container} elevation={0}>
        <div className={classes.title}>
          <Typography variant="h6" component="h2">
            Login
          </Typography>

          <Typography variant="subtitle1" component="h3" color="textSecondary">
            Login into your ASSA forum account.
          </Typography>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            required
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

          <TextField
            required
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
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Login);
