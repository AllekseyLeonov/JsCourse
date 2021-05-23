import React from "react";
import { Grid } from "@material-ui/core";

import NotesListMenu from "./NotesListMenu";
import ActiveNote from "./ActiveNote";
import NOTES from "../../config/constants/NOTES";

const NOTES_ARRAY_KEY = "notesArray";

const NotesContainer = () => {
  const loadedNotesAsString = localStorage.getItem(NOTES_ARRAY_KEY);
  const [notesArray, setNotesArray] = React.useState(
    loadedNotesAsString ? JSON.parse(loadedNotesAsString) : NOTES
  );
  const [selectedNote, setSelectedNote] = React.useState({
    id: -1,
    title: "Select note to display",
    content: "",
  });
  const updateNote = (title, content) => {
    const updatedArray = notesArray.map((item) => {
      if (item.id === selectedNote.id) {
        const updatedNote = {
          id: item.id,
          title,
          content,
          date: item.date,
        };
        setSelectedNote(updatedNote);
        return updatedNote;
      }
      return item;
    });
    setNotesArray(updatedArray);
    localStorage.setItem(NOTES_ARRAY_KEY, JSON.stringify(updatedArray));
  };

  return (
    <Grid container direction="row" wrap="nowrap">
      <NotesListMenu
        notesArray={notesArray}
        selectedIndex={selectedNote.id}
        changeSelectedIndex={(index) => setSelectedNote(notesArray[index])}
      />
      <ActiveNote item selectedItem={selectedNote} updateNote={updateNote} />
    </Grid>
  );
};

export default NotesContainer;
