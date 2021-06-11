import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import "./styles.css";
import SearchField from "../../components/SearchField";
import NotesList from "./NotesList";
import FilterField from "../../components/FilterField";
import {
  SORT_PARAMETERS,
  sortNotesArray,
} from "../../utils/arrayProcessingUtils";

const NotesListMenu = ({ notesArray, selectedIndex, changeSelectedIndex }) => {
  const [filteredArray, setFilteredArray] = useState(notesArray);
  const [sortingParameter, setSortingParameter] = useState(
    SORT_PARAMETERS.dateDescending
  );

  return (
    <Grid className="NotesListMenu" container item xs={3} direction="column">
      <SearchField array={notesArray} setArray={setFilteredArray} />
      <FilterField setSortingParameter={setSortingParameter} />
      <NotesList
        notesArray={sortNotesArray(filteredArray, sortingParameter)}
        selectedIndex={selectedIndex}
        setSelectedIndex={changeSelectedIndex}
      />
      <Button
        style={{
          backgroundColor: "rgba(196, 116, 69, 0.7)",
          color: "white",
        }}
      >
        <AddIcon />
      </Button>
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
