import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import SearchField from "@components/SearchField";
// eslint-disable-next-line import/no-unresolved
import FilterField from "@components/FilterField";
// eslint-disable-next-line import/no-unresolved
import { SORT_PARAMETERS, sortNotesArray } from "@utils/arrayProcessingUtils";
// eslint-disable-next-line import/no-unresolved
import { formatDate } from "@utils/textFormatUtils";
// eslint-disable-next-line import/no-unresolved
import { NOTES_ARRAY_KEY } from "@constants/LOCAL_STORAGE_KEYS";
import styles from "./styles";
import NotesList from "./NotesList";
import NoteProcessingDialog from "./NoteProcessingDialog";

const NotesListMenu = ({
  userEmail,
  notesArray,
  selectedIndex,
  changeSelectedIndex,
  setNotesArray,
  isOnSharedNotes,
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
    localStorage.setItem(
      NOTES_ARRAY_KEY,
      JSON.stringify(notesArray.concat(newNote))
    );
    setNotesArray(notesArray.concat(newNote));
  };

  const classes = styles();

  return (
    <Grid
      className={classes.NotesListMenu}
      container
      item
      xs={3}
      direction="column"
    >
      <SearchField array={notesArray} setArray={setFilteredArray} />
      <FilterField setSortingParameter={setSortingParameter} />
      <NotesList
        notesArray={sortNotesArray(filteredArray, sortingParameter).filter(
          !isOnSharedNotes
            ? (note) => note.userEmail === "" || note.userEmail === userEmail
            : (note) => note.userEmail !== "" && note.title !== ""
        )}
        selectedIndex={selectedIndex}
        setSelectedIndex={changeSelectedIndex}
        setFilteredArray={setFilteredArray}
        setSortingParameter={setSortingParameter}
      />
      {!isOnSharedNotes ? (
        <Button
          className={classes.NotesButtons}
          onClick={() => setDialogState(!isDialogOpen)}
        >
          <AddIcon />
        </Button>
      ) : (
        <div />
      )}
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
  isOnSharedNotes: PropTypes.bool,
};

NotesListMenu.defaultProps = {
  userEmail: "",
  notesArray: [],
  selectedIndex: null,
  changeSelectedIndex: () => {},
  setNotesArray: () => {},
  isOnSharedNotes: false,
};

export default connect(setStateToProps)(NotesListMenu);
