import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { Link as RouterLink } from "react-router-dom";


import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import DashboardIcon from "@material-ui/icons/Dashboard";

const styles = {
    list: {
        width: 250
    }
};


class SideMenuDrawer extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const {classes, open, toggle} = this.props;
        const {isAuthenticated, user} = this.props.auth;

        // Links
        const LoginLink = (props) => <RouterLink to="/login" {...props} />;
        const SignupLink = (props) => <RouterLink to="/signup" {...props} />;
        const LogoutLink = (props) => <RouterLink to="#" {...props} />;
        const HomeLink = (props) => <RouterLink to="/" {...props} />;

        const authLinks = (
        <List>
          <Link component={LogoutLink} color="inherit" underline="none" onClick={this.onLogoutClick}>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </Link>
        </List>
        );

        const guestLinks = (

        <List>
            <Link component={LoginLink} color="inherit" underline="none">
              <ListItem button>
              <ListItemText primary={"Login"} />
            </ListItem>
            </Link>
            <Link component={SignupLink} color="inherit" underline="none">
              <ListItem button>
                <ListItemText primary={"Register"} />
              </ListItem>
            </Link>
        </List>
        );

        const sideList = (
        <div className={classes.list}>
        { /*<List>
          {["Inbox", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <Divider />*/ }
        <List>
          <Link component={HomeLink} color="inherit" underline="none">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          <Link component={HomeLink} color="inherit" underline="none">
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon /> 
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        {isAuthenticated ?
            authLinks
            :
            guestLinks
        }
        

      </div>
        );

        return (
            <div>
        <Drawer open={open.isOpen} onClose={toggle(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggle(false)}
            onKeyDown={toggle(false)}
            >
            {sideList}
          </div>
        </Drawer>
      </div>
        );
    }
}

SideMenuDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logoutUser
})(withStyles(styles)(SideMenuDrawer));
