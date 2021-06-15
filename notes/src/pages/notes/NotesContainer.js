import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import NOTES from "@constants/NOTES";
// eslint-disable-next-line import/no-unresolved
import { NOTES_ARRAY_KEY } from "@constants/LOCAL_STORAGE_KEYS";
import styles from "./styles";
import NotesListMenuContainer from "./NotesListMenuContainer";
import ActiveNoteContainer from "./ActiveNoteContainer";

const NotesContainer = ({ userEmail }) => {
  const loadedNotesAsString = localStorage.getItem(NOTES_ARRAY_KEY);

  const [notesArray, setNotesArray] = useState(
    loadedNotesAsString ? JSON.parse(loadedNotesAsString) : NOTES
  );
  const [selectedNote, setSelectedNote] = useState(null);

  const updateNote = (title, content) => {
    const updatedArray = notesArray.map((note) => {
      if (note.id === selectedNote.id) {
        const updatedNote = {
          id: note.id,
          title,
          content,
          date: note.date,
          userEmail,
        };
        setSelectedNote(updatedNote);
        return updatedNote;
      }
      return note;
    });
    setNotesArray(updatedArray);

    localStorage.setItem(NOTES_ARRAY_KEY, JSON.stringify(updatedArray));
  };

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
        />
        <ActiveNoteContainer
          item
          selectedItem={selectedNote}
          updateNote={updateNote}
          isOnSharedNotes={false}
        />
      </Grid>
    </div>
  );
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

NotesContainer.propTypes = {
  userEmail: PropTypes.string,
};

NotesContainer.defaultProps = {
  userEmail: "",
};

export default connect(setStateToProps)(NotesContainer);
