import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { MenuItem, TextField } from "@material-ui/core";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class Signup extends Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Register</h1>
        <p>Create your account with the form below</p>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="first-name-input"
            label="First Name"
            className={classes.textField}
            type="text"
            name="text"
            margin="normal"
            variant="outlined"
            fullWidth
          />

          <TextField
            id="first-name-input"
            label="First Name"
            className={classes.textField}
            type="text"
            name="text"
            margin="normal"
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
            margin="normal"
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
            margin="normal"
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
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </form>
      </div>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
