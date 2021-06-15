import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import { SHARED_NOTES_ARRAY_KEY } from "@constants/localStorageKeys";
import styles from "./styles";
import ActiveNoteContainer from "../notes/ActiveNoteContainer";
import NotesListMenuContainer from "../notes/NotesListMenuContainer";

const SharedNotesContainer = ({ userEmail }) => {
  const loadedNotesAsString = localStorage.getItem(SHARED_NOTES_ARRAY_KEY);

  const [notesArray, setNotesArray] = useState(
    loadedNotesAsString
      ? JSON.parse(loadedNotesAsString)
          .filter((data) => data.userWhoShare === userEmail)
          .map((data) => data.note)
      : []
  );

  const [selectedNote, setSelectedNote] = useState(null);

  const classes = styles();

  return (
    <div className={classes.NotesContainer}>
      <Grid container direction="row" wrap="nowrap" justify="space-between">
        <NotesListMenuContainer
          notesArray={notesArray}
          selectedIndex={selectedNote ? selectedNote.id : null}
          changeSelectedIndex={(index) =>
            setSelectedNote(notesArray.find((note) => note.id === index))
          }
          setNotesArray={setNotesArray}
          isOnSharedNotes
        />
        <ActiveNoteContainer item selectedItem={selectedNote} isOnSharedNotes />
      </Grid>
    </div>
  );
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

SharedNotesContainer.propTypes = {
  userEmail: PropTypes.string,
};

SharedNotesContainer.defaultProps = {
  userEmail: "",
};

export default connect(setStateToProps)(SharedNotesContainer);
