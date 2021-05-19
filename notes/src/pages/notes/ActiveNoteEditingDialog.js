import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";

import styles from "./styles";

const ActiveNoteEditingDialog = ({ selectedItem, isOpen, setOpen }) => (
  <Dialog open={isOpen} fullWidth="true" maxWidth="false">
    <DialogTitle>Editing note</DialogTitle>
    <DialogContent>
      <Grid direction="column">
        <TextField
          style={styles.dialogInputField}
          label="title"
          defaultValue={selectedItem.title}
        />
        <TextField
          style={styles.dialogInputField}
          label="content"
          defaultValue={selectedItem.content}
          multiline
        />
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogActions>
  </Dialog>
);

ActiveNoteEditingDialog.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }),
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

ActiveNoteEditingDialog.defaultProps = {
  selectedItem: { title: "Select note to display" },
  isOpen: false,
  setOpen: () => {},
};

export default ActiveNoteEditingDialog;
