import React from "react";
import { CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontSize: 16
  },
  subheader: {
    fontSize: 16
  }
});

export default function StyledCardHeader({ title, subheader }) {
  const classes = useStyles();
  return (
    <CardHeader
      title={title}
      subheader={subheader}
      classes={{
        title: classes.title,
        subheader: classes.subheader
      }}
    />
  );
}

// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import styled from "styled-components";
