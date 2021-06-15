import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";

import {
  TITLE_MAX_LENGTH,
  CONTENT_MAX_LENGTH,
  // eslint-disable-next-line import/no-unresolved
} from "@constants/notesArray";
import {
  checkIsContentCorrect,
  checkIsTitleCorrect,
  // eslint-disable-next-line import/no-unresolved
} from "@utils/textFormatUtils";
import styles from "./styles";

const NoteProcessingDialog = ({
  dialogTitle,
  noteTitle,
  noteContent,
  isOpen,
  setOpen,
  onSubmit,
  isTitleCorrect,
  setIsTitleCorrect,
  isContentCorrect,
  setIsContentCorrect,
}) => {
  let textFieldTitle = noteTitle;
  let textFieldContent = noteContent;

  const handleTitleFieldChange = (event) => {
    textFieldTitle = event.target.value;
    setIsTitleCorrect(checkIsTitleCorrect(textFieldTitle));
  };
  const handleContentFieldChange = (event) => {
    textFieldContent = event.target.value;
    setIsContentCorrect(checkIsContentCorrect(textFieldContent));
  };
  const handleSaveBtnClick = () => {
    onSubmit(textFieldTitle, textFieldContent);
    setOpen(false);
  };
  const classes = styles();

  return (
    <Dialog open={isOpen} fullWidth="true" maxWidth="false">
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <Grid direction="column">
          <TextField
            id="editTitleField"
            error={!isTitleCorrect}
            style={styles.DialogInputField}
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
            className={classes.DialogInputField}
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

NoteProcessingDialog.propTypes = {
  dialogTitle: PropTypes.string,
  noteTitle: PropTypes.string,
  noteContent: PropTypes.string,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  onSubmit: PropTypes.func,
  isTitleCorrect: PropTypes.bool,
  setIsTitleCorrect: PropTypes.func,
  isContentCorrect: PropTypes.bool,
  setIsContentCorrect: PropTypes.func,
};

NoteProcessingDialog.defaultProps = {
  dialogTitle: "",
  noteTitle: "",
  noteContent: "",
  isOpen: false,
  setOpen: () => {},
  onSubmit: () => {},
  isTitleCorrect: false,
  setIsTitleCorrect: () => {},
  isContentCorrect: false,
  setIsContentCorrect: () => {},
};

export default NoteProcessingDialog;
