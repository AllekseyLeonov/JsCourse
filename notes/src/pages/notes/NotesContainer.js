import React from "react";
import { Grid } from "@material-ui/core";

import NotesListMenu from "./NotesListMenu";
import ActiveNote from "./ActiveNote";
import NOTES from "../../config/constants/NOTES";

const NotesContainer = () => {
  const [notesArray, setNotesArray] = React.useState(NOTES);
  const [selectedNote, setSelectedNote] = React.useState({
    title: "Select note to display",
    content: "",
  });

  const updateNote = (title, content) => {
    setNotesArray(
      notesArray.map((item) => {
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
      })
    );
  };

  return (
    <Grid container direction="row" wrap="nowrap">
      <NotesListMenu
        notesArray={notesArray}
        selectedIndex={selectedNote.id}
        changeSelectedIndex={(index) => setSelectedNote(notesArray[index])}
      />
      <ActiveNote
        item
        xs={3}
        selectedItem={selectedNote}
        updateNote={updateNote}
      />
    </Grid>
  );
};

export default NotesContainer;
