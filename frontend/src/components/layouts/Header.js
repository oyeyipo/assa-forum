import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenuDrawer from "./Drawer";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  state = {
    isOpen: false
  };

  // constructor(props) {
  //   super(props);
  // }

  toggleDrawer = (isOpen) => () => {
    this.setState({
      isOpen
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              ASSA <small>Forum</small>
            </Typography>
            <Button color="inherit">Login</Button>
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
