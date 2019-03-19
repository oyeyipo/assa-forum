import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Chip,
  Typography,
  ListItem,
  ListItemText,
  List
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: 10
  },
  heading: {
    padding: "6px"
  },
  chip: {
    marginRight: theme.spacing.unit
  },
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
  },
  section2: {
    margin: theme.spacing.unit * 2
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 2}px`
  }
});

class Frontpage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.root}>
          <Typography variant="h4" className={classes.heading}>
            ASBN Frontpage News
          </Typography>
          <Divider component="li" />
          <div>
            <List component="li">
              <ListItem button>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Drafts" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </div>
        </div>
        <div>
          <Button variant="contained" color="primary" fullWidth>
            Load More >>>
          </Button>
        </div>
      </Fragment>
    );
  }
}

Frontpage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Frontpage);
