import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";

import "./styles.css";

const TITLE_MAX_LENGTH = 35;
const CONTENT_MAX_LENGTH = 2000;

const ActiveNoteEditingDialog = ({
  noteTitle,
  noteContent,
  isOpen,
  setOpen,
  updateNote,
}) => {
  let textFieldTitle = noteTitle;
  let textFieldContent = noteContent;
  const [isTitleCorrect, setIsTitleCorrect] = React.useState(true);
  const [isContentCorrect, setIsContentCorrect] = React.useState(true);
  return (
    <Dialog open={isOpen} fullWidth="true" maxWidth="false">
      <DialogTitle>Editing note</DialogTitle>
      <DialogContent>
        <Grid direction="column">
          <TextField
            id="editTitleField"
            error={!isTitleCorrect}
            className="DialogInputField"
            label="title"
            defaultValue={textFieldTitle}
            onChange={(event) => {
              textFieldTitle = event.target.value;
              setIsTitleCorrect(
                textFieldTitle.length > 0 &&
                  textFieldTitle.length < TITLE_MAX_LENGTH
              );
            }}
            helperText={
              isTitleCorrect
                ? ""
                : `Title length must be between 1 and ${TITLE_MAX_LENGTH} symbols`
            }
          />
          <TextField
            error={!isContentCorrect}
            className="DialogInputField"
            label="content"
            defaultValue={textFieldContent}
            onChange={(event) => {
              textFieldContent = event.target.value;
              setIsContentCorrect(
                textFieldContent.length > 0 &&
                  textFieldContent.length < CONTENT_MAX_LENGTH
              );
            }}
            helperText={
              isContentCorrect
                ? ""
                : `Content length must be between 1 and ${CONTENT_MAX_LENGTH} symbols`
            }
            multiline
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Close</Button>
        <Button
          disabled={!(isTitleCorrect && isContentCorrect)}
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
