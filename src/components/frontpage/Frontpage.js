import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Divider,
  Typography,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: 10
  },
  heading: {
    padding: 0.6,
    fontSize: 25
  },
  news: {
    width: "100%"
  },
  news__content: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  title: {
    fontSize: 20,
    textAlign: "center"
  },
  container: {
    marginTop: 8
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
          <div className={classes.container}>
            <Card className={classes.news}>
              <CardContent>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.container}>
            <Card className={classes.news}>
              <CardContent>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.container}>
            <Card className={classes.news}>
              <CardContent>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.container}>
            <Card className={classes.news}>
              <CardContent>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}

Frontpage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Frontpage);
