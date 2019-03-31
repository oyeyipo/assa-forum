import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
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
    marginLeft: -12
  },
  searchBtn: {
    fontSize: "1.2rem",
    marginRight: -12
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
                <IconButton
                  className={classes.searchBtn}
                  color="inherit"
                  aria-label="Search"
                >
                  <SearchIcon />
                </IconButton>
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
