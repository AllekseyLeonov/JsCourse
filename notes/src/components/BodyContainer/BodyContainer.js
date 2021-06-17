import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../styles";

const BodyContainer = ({ children }) => {
  const classes = styles();
  return (
    <Grid className={classes.ActiveNote} container wrap="nowrap">
      {children}
    </Grid>
  );
};

BodyContainer.propTypes = {
  children: PropTypes.element,
};

BodyContainer.defaultProps = {
  children: <div />,
};

export default BodyContainer;
