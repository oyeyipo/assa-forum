import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenuDrawer from "./Drawer";
import { Link as RouterLink } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    fontSize: "1.2rem"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginButton: {
    fontSize: "1.2rem"
  }
};

class Header extends Component {
  state = {
    isOpen: false
  };
  toggleDrawer = (isOpen) => () => {
    this.setState({
      isOpen
    });
  };

  render() {
    const { classes } = this.props;
    const HomeLink = (props) => <RouterLink to="/" {...props} />;

    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  <Link component={HomeLink} color="inherit" underline="none">
                    ASSA <small>Forum</small>
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit" className={classes.loginButton}>
                  Search Icon
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <SideMenuDrawer open={this.state} toggle={this.toggleDrawer} />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
