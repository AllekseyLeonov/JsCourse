import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "./styles";
import SearchField from "../../components/SearchField";
import NotesList from "./NotesList";

const NotesListMenu = ({ notesArray, selectedIndex, changeSelectedIndex }) => (
  <Grid style={styles.notesListMenu} container item xs={3} direction="column">
    <SearchField />
    <NotesList
      notesArray={notesArray}
      selectedIndex={selectedIndex}
      setSelectedIndex={changeSelectedIndex}
    />
  </Grid>
);

NotesListMenu.propTypes = {
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  changeSelectedIndex: PropTypes.func,
};

NotesListMenu.defaultProps = {
  notesArray: [],
  selectedIndex: -1,
  changeSelectedIndex() {},
};

export default NotesListMenu;
