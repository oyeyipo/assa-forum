import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Card, Paper, IconButton, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.grey.light_1,
    marginTop: 10
  },
  heading: {
    padding: ".6rem",
    fontSize: "1rem",
    textAlign: "center"
  },
  news: {
    width: "100%",
    fontSize: ".8rem"
  },
  news__content: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: theme.palette.primary.main
  },
  container: {
    marginTop: 3
  },
  content_header: {
    marginButtom: 0
  },
  content: {
    margin: 0
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  meta_info: {
    fontSize: "1rem",
    margin: "0 0.5rem"
  }
});

class Frontpage extends Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Fragment>
        <div className={classes.root}>
          <Paper square={true} elevation={0}>
            <Typography
              color="textSecondary"
              variant="h4"
              className={classes.heading}
            >
              ASBN Frontpage News
            </Typography>
          </Paper>
          <div className={classes.container}>
            <Card square={true} elevation={0} className={classes.news}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                className={classes.content_header}
              >
                <Grid item>
                  <Grid container justify="center" alignItems="center">
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        className={classes.meta_info}
                      >
                        c/General
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{bull}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        className={classes.meta_info}
                      >
                        Sept. 4, 1992
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item className={classes.content}>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord
                </Typography>
              </Grid>
            </Card>
          </div>
          <div className={classes.container}>
            <Card square={true} elevation={0} className={classes.news}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                className={classes.content_header}
              >
                <Grid item>
                  <Grid container justify="center" alignItems="center">
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        className={classes.meta_info}
                      >
                        c/General
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{bull}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        className={classes.meta_info}
                      >
                        Sept. 4, 1992
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </Grid>
            </Card>
          </div>
          <div className={classes.container}>
            <Card square={true} elevation={0} className={classes.news}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                className={classes.content_header}
              >
                <Grid item>
                  <Grid container justify="center" alignItems="center">
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        className={classes.meta_info}
                      >
                        c/General
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{bull}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        color="textSecondary"
                        className={classes.meta_info}
                      >
                        Sept. 4, 1992
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </Grid>
            </Card>
          </div>
          <div className={classes.container}>
            <Card square={true} elevation={0} className={classes.news}>
              <Grid>
                <Typography className={classes.title}>
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </Grid>
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
