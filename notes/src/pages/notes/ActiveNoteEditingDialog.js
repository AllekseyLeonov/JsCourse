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

const ActiveNoteEditingDialog = ({
  noteTitle,
  noteContent,
  isOpen,
  setOpen,
  updateNote,
}) => {
  let textFieldTitle = noteTitle;
  let textFieldContent = noteContent;
  return (
    <Dialog open={isOpen} fullWidth="true" maxWidth="false">
      <DialogTitle>Editing note</DialogTitle>
      <DialogContent>
        <Grid direction="column">
          <TextField
            style={styles.dialogInputField}
            label="title"
            defaultValue={textFieldTitle}
            onChange={(event) => {
              textFieldTitle = event.target.value;
            }}
          />
          <TextField
            style={styles.dialogInputField}
            label="content"
            defaultValue={textFieldContent}
            onChange={(event) => {
              textFieldContent = event.target.value;
            }}
            multiline
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Button
          onClick={() => {
            updateNote(textFieldTitle, textFieldContent);
            setOpen(false);
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ActiveNoteEditingDialog.propTypes = {
  noteTitle: PropTypes.string,
  noteContent: PropTypes.string,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  updateNote: PropTypes.func,
};

ActiveNoteEditingDialog.defaultProps = {
  noteTitle: "",
  noteContent: "",
  isOpen: false,
  setOpen: () => {},
  updateNote: () => {},
};

export default ActiveNoteEditingDialog;
