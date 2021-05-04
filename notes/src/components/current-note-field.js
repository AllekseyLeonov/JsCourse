import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    padding: "50px 50px",
    textAlign: "justify",
  },
});

const CurrentNoteField = ({ selectedItem }) => (
  <Grid
    className={useStyles().root}
    container
    direction="column"
    alignItems="center"
  >
    <Typography variant="h3">{selectedItem.title}</Typography>
    <Typography variant="h5">{selectedItem.content}</Typography>
  </Grid>
);

CurrentNoteField.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }),
};

CurrentNoteField.defaultProps = {
  selectedItem: { title: "Select note to display" },
};

export default CurrentNoteField;
