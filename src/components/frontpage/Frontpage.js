import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getThreads } from "../../actions/threadActions";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Card, Paper, CardContent } from "@material-ui/core"; //IconButton,
import StyledCardHeader from "./StyledCardHeader";
import { AuthContainer } from "../authenticate";

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
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getThreads();
  }

  render() {
    const { classes } = this.props;
    const { isAuthenticated } = this.props.auth;
    const { threads, isLoading } = this.props.threads;

    let threadItems;

    if (threads === null || isLoading) {
      threadItems = <p>Loading...</p>;
    } else {
      if (threads.length > 0) {
        threadItems = threads.map((thread) => (
          <Card
            square={true}
            elevation={0}
            className={classes.news}
            key={thread.uuid}
          >
            <StyledCardHeader title="c/General" subheader="Sept. 4, 1992" />
            <CardContent>
              <Typography
                className={classes.title}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {thread.title}
              </Typography>
            </CardContent>
          </Card>
        ));
      } else {
        threadItems = <h4>No Threads Here at all ... </h4>;
      }
    }

    return (
      <Fragment>
        {!isAuthenticated && <AuthContainer />}
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
          <div className={classes.container}>{threadItems}</div>
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
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  threads: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getThreads: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  threads: state.threads,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    getThreads
  }
)(withStyles(styles)(Frontpage));
