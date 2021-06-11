import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./styles.css";
import SearchField from "../../components/SearchField";
import NotesList from "./NotesList";
import FilterField from "../../components/FilterField";
import {
  SORT_PARAMETERS,
  sortNotesArray,
} from "../../utils/arrayProcessingUtils";
import { formatDate } from "../../utils/textFormatUtils";
import NoteProcessingDialog from "./NoteProcessingDialog";

const NotesListMenu = ({
  userEmail,
  notesArray,
  selectedIndex,
  changeSelectedIndex,
  setNotesArray,
}) => {
  const [filteredArray, setFilteredArray] = useState(notesArray);
  const [sortingParameter, setSortingParameter] = useState(
    SORT_PARAMETERS.dateDescending
  );
  const [isDialogOpen, setDialogState] = useState(false);

  useEffect(() => {
    setFilteredArray(notesArray);
  }, [notesArray]);

  const addNote = (title, content) => {
    const newNote = {
      id: notesArray.length,
      title,
      content,
      date: formatDate(new Date()),
      userEmail,
    };
    setNotesArray(notesArray.concat(newNote));
  };

  return (
    <Grid className="NotesListMenu" container item xs={3} direction="column">
      <SearchField array={notesArray} setArray={setFilteredArray} />
      <FilterField setSortingParameter={setSortingParameter} />
      <NotesList
        userEmail={userEmail}
        notesArray={sortNotesArray(filteredArray, sortingParameter)}
        selectedIndex={selectedIndex}
        setSelectedIndex={changeSelectedIndex}
      />
      <Button
        style={{
          backgroundColor: "rgba(196, 116, 69, 0.7)",
          color: "white",
        }}
        onClick={() => setDialogState(!isDialogOpen)}
      >
        <AddIcon />
      </Button>
      <NoteProcessingDialog
        dialogTitle="Adding note"
        setOpen={setDialogState}
        isOpen={isDialogOpen}
        noteTitle="Select title"
        noteContent="Fill your note with some content"
        onSubmit={addNote}
      />
    </Grid>
  );
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

NotesListMenu.propTypes = {
  userEmail: PropTypes.string,
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  changeSelectedIndex: PropTypes.func,
  setNotesArray: PropTypes.func,
};

NotesListMenu.defaultProps = {
  userEmail: "",
  notesArray: [],
  selectedIndex: null,
  changeSelectedIndex: () => {},
  setNotesArray: () => {},
};

export default connect(setStateToProps)(NotesListMenu);
