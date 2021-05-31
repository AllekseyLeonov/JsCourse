import React, { useState } from "react";
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

  const [isTitleCorrect, setIsTitleCorrect] = useState(true);
  const [isContentCorrect, setIsContentCorrect] = useState(true);

  const checkIsTitleCorrect = (title) =>
    title.length > 0 && title.length < TITLE_MAX_LENGTH;
  const checkIsContentCorrect = (content) =>
    content.length > 0 && content.length < CONTENT_MAX_LENGTH;

  const handleTitleFieldChange = (event) => {
    textFieldTitle = event.target.value;
    setIsTitleCorrect(checkIsTitleCorrect(textFieldTitle));
  };
  const handleContentFieldChange = (event) => {
    textFieldContent = event.target.value;
    setIsContentCorrect(checkIsContentCorrect(textFieldContent));
  };
  const handleSaveBtnClick = () => {
    updateNote(textFieldTitle, textFieldContent);
    setOpen(false);
  };

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
            onChange={handleTitleFieldChange}
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
            onChange={handleContentFieldChange}
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
        <Button onClick={() => setOpen(!isOpen)}>Close</Button>
        <Button
          disabled={!(isTitleCorrect && isContentCorrect)}
          onClick={handleSaveBtnClick}
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
