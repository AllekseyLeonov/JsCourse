import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import BodyContainer from "@components/BodyContainer";
// eslint-disable-next-line import/no-unresolved
import { getSharedNoteLink } from "@utils/textFormatUtils";
// eslint-disable-next-line import/no-unresolved
import { updateSharedNotesArray } from "@utils/arrayProcessingUtils";
import styles from "./styles";
import NoteProcessingDialog from "./NoteProcessingDialog";
import NoteSharingSnackbar from "./NoteSharingSnackbar";

const ActiveNote = ({
  selectedItem,
  updateNote,
  userEmail,
  isOnSharedNotes,
}) => {
  const [isDialogOpen, setDialogState] = useState(false);
  const [isSnackbarOpen, setSnackbarState] = useState(false);
  const classes = styles();

  return selectedItem ? (
    <BodyContainer>
      <Grid container direction="column" alignItems="center">
        <Typography className={classes.ActiveNoteTitle} variant="h3">
          {selectedItem.title}
        </Typography>
        <Typography className={classes.ActiveNoteContent} variant="h5">
          {selectedItem.content}
        </Typography>
      </Grid>
      {!isOnSharedNotes && selectedItem.userEmail !== "" ? (
        <Grid direction="column">
          <Button
            onClick={() => setDialogState(!isDialogOpen)}
            className={`${classes.ActiveNoteContent} ${classes.NotesButtons} ${classes.WithMargin}`}
          >
            Edit
          </Button>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                getSharedNoteLink(userEmail, selectedItem.id)
              );
              updateSharedNotesArray(selectedItem, userEmail);
              setSnackbarState(true);
            }}
            className={`${classes.ActiveNoteContent} ${classes.NotesButtons} ${classes.WithMargin}`}
          >
            Share
          </Button>
        </Grid>
      ) : (
        <div />
      )}

      <NoteSharingSnackbar
        isSnackbarOpen={isSnackbarOpen}
        userEmail={userEmail}
        id={selectedItem.id}
        setSnackbarState={setSnackbarState}
      />
      <NoteProcessingDialog
        dialogTitle="Editing note"
        noteTitle={selectedItem.title}
        noteContent={selectedItem.content}
        isOpen={isDialogOpen}
        setOpen={setDialogState}
        onSubmit={updateNote}
      />
    </BodyContainer>
  ) : (
    <BodyContainer>
      <Typography variant="h3">Select note to display</Typography>
    </BodyContainer>
  );
};

ActiveNote.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    userEmail: PropTypes.string,
  }),
  updateNote: PropTypes.func,
  userEmail: PropTypes.string,
  isOnSharedNotes: PropTypes.bool,
};

ActiveNote.defaultProps = {
  selectedItem: null,
  updateNote: () => {},
  userEmail: "",
  isOnSharedNotes: false,
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

export default connect(setStateToProps)(ActiveNote);
