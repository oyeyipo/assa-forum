import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const styles = (theme) => ({
  container: {
    backgroundColor: "#000",
    textAlign: "center"
  },
  footer: {
    color: "#eee"
  }
});

function Footer(props) {
  const { classes } = props;
  return (
    <Paper elevation={0} square={true} className={classes.container}>
      <footer>
        <Typography variant="body2" component="h6" className={classes.footer}>
          Copyright &copy; {new Date().getFullYear()} Olawale
        </Typography>
      </footer>
    </Paper>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
