import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Card, Paper, CardContent } from "@material-ui/core"; //IconButton,
import StyledCardHeader from "./StyledCardHeader";

// const MetaWrapper = styled.div`
//   && {
//     display: flex;
//     justify-content: space-between;
//   }
// `;

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
    // fontSize: ".8rem",
    padding: "0.5rem"
  },

  title: {
    fontSize: 17,
    textAlign: "center",
    color: theme.palette.primary.main,
    marginTop: 0
  },
  container: {
    marginTop: 3
  },
  content_header: {
    fontSize: "0.6rem"
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
});

class Frontpage extends Component {
  render() {
    const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;
    // const classes = useStyles();

    return (
      <Fragment>
        <div className={classes.root}>
          <Paper square={true} elevation={0}>
            <Typography
              color="textSecondary"
              variant="h4"
              className={["frontpage-news", classes.heading]}
            >
              ASBN Frontpage News
            </Typography>
          </Paper>
          <div className={classes.container}>
            <Card square={true} elevation={0} className={classes.news}>
              <StyledCardHeader title="c/General" subheader="Sept. 4, 1992" />
              <CardContent>
                <Typography
                  className={classes.title}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className={classes.container}>
            <Card square={true} elevation={0} className={classes.news}>
              <StyledCardHeader title="c/General" subheader="Sept. 4, 1992" />
              <CardContent>
                <Typography
                  className={classes.title}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Word of the DayWord of the DayWord of the DayWord of the
                  DayWord of the Day
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* <MetaWrapper>
          <h6>hwfg</h6>
          <h6>hwfg</h6>
        </MetaWrapper> */}
      </Fragment>
    );
  }
}

Frontpage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Frontpage);
