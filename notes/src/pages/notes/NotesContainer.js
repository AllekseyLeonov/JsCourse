import React from "react";
import { Grid } from "@material-ui/core";

import NotesListMenu from "./NotesListMenu";
import ActiveNote from "./ActiveNote";
import NOTES from "../../config/constants/NOTES";

const NotesContainer = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const changeSelectedIndex = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Grid container direction="row" wrap="nowrap">
      <NotesListMenu
        notesArray={NOTES}
        selectedIndex={selectedIndex}
        changeSelectedIndex={changeSelectedIndex}
      />
      <ActiveNote item xs={3} selectedItem={NOTES[selectedIndex]} />
    </Grid>
  );
};

export default NotesContainer;
