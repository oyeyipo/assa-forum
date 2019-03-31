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

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      role: "1",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
  }
  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  render() {
    const { classes } = this.props;
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

          <TextField
            required
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

          <TextField
            required
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
