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
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    role: "1",
    errors: {}
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container} elevation={0}>
        <div className={classes.title}>
          <Typography variant="h6" component="h2">
            Register
          </Typography>

          <Typography variant="subtitle1" component="h3">
            Create your account with the form below
          </Typography>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            required
            id="username-input"
            label="Enter Username"
            className={classes.textField}
            type="text"
            name="text"
            margin="dense"
            variant="outlined"
            fullWidth
          />

          <TextField
            required
            id="email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="dense"
            variant="outlined"
            fullWidth
          />

          <TextField
            required
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
            fullWidth
          />

          <TextField
            required
            id="repeat-password-input"
            label="Password (again)"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="dense"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
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
