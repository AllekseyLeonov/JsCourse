import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import Styles from "./styles";

const ActiveNote = ({ selectedItem }) => (
  <Grid
    className={Styles().root}
    container
    direction="column"
    alignItems="center"
  >
    <Typography variant="h3">{selectedItem.title}</Typography>
    <Typography variant="h5">{selectedItem.content}</Typography>
  </Grid>
);

ActiveNote.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }),
};

ActiveNote.defaultProps = {
  selectedItem: { title: "Select note to display" },
};

export default ActiveNote;
