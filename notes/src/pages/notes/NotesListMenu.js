import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import "./styles.css";
import SearchField from "../../components/SearchField";
import NotesList from "./NotesList";

const NotesListMenu = ({ notesArray, selectedIndex, changeSelectedIndex }) => {
  const [filteredArray, setFilteredArray] = React.useState(notesArray);
  return (
    <Grid className="NotesListMenu" container item xs={3} direction="column">
      <SearchField array={notesArray} setArray={setFilteredArray} />
      <NotesList
        notesArray={filteredArray}
        selectedIndex={selectedIndex}
        setSelectedIndex={changeSelectedIndex}
      />
    </Grid>
  );
};

NotesListMenu.propTypes = {
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  changeSelectedIndex: PropTypes.func,
};

NotesListMenu.defaultProps = {
  notesArray: [],
  selectedIndex: null,
  changeSelectedIndex() {},
};

export default NotesListMenu;
