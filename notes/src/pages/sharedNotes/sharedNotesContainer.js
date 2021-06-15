import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { SHARED_NOTES_ARRAY_KEY } from "../../config/constants/LOCAL_STORAGE_KEYS";
import NotesListMenu from "../notes/NotesListMenu";
import ActiveNote from "../notes/ActiveNote";

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

  return (
    <div className="NotesContainer">
      <Grid container direction="row" wrap="nowrap" justify="space-between">
        <NotesListMenu
          notesArray={notesArray}
          selectedIndex={selectedNote ? selectedNote.id : null}
          changeSelectedIndex={(index) =>
            setSelectedNote(notesArray.find((note) => note.id === index))
          }
          setNotesArray={setNotesArray}
          isOnSharedNotes
        />
        <ActiveNote item selectedItem={selectedNote} isOnSharedNotes />
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
