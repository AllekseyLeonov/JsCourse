import React, { useState } from "react";
import { Grid } from "@material-ui/core";

// eslint-disable-next-line import/no-unresolved
import NOTES from "@constants/NOTES";
// eslint-disable-next-line import/no-unresolved
import { NOTES_ARRAY_KEY } from "@constants/LOCAL_STORAGE_KEYS";
import styles from "./styles";
import NotesListMenu from "./NotesListMenu";
import ActiveNote from "./ActiveNote";

const NotesContainer = () => {
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
        <NotesListMenu
          notesArray={notesArray}
          selectedIndex={selectedNote ? selectedNote.id : null}
          changeSelectedIndex={(index) =>
            setSelectedNote(notesArray.find((note) => note.id === index))
          }
          setNotesArray={setNotesArray}
        />
        <ActiveNote
          item
          selectedItem={selectedNote}
          updateNote={updateNote}
          isOnSharedNotes={false}
        />
      </Grid>
    </div>
  );
};

export default NotesContainer;
