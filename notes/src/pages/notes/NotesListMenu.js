import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import SearchField from "@components/SearchField";
// eslint-disable-next-line import/no-unresolved
import FilterField from "@components/FilterField";
// eslint-disable-next-line import/no-unresolved
import { sortNotesArray } from "@utils/arrayProcessingUtils";
import styles from "./styles";
import NotesList from "./NotesList";
import NoteProcessingDialogContainer from "./NoteProcessingDialogContainer";

const NotesListMenu = ({
  userEmail,
  notesArray,
  selectedIndex,
  changeSelectedIndex,
  isOnSharedNotes,
  filteredArray,
  setFilteredArray,
  sortingParameter,
  setSortingParameter,
  isDialogOpen,
  setDialogState,
  addNote,
}) => {
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
      <NoteProcessingDialogContainer
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

NotesListMenu.propTypes = {
  userEmail: PropTypes.string,
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  changeSelectedIndex: PropTypes.func,
  isOnSharedNotes: PropTypes.bool,
  filteredArray: PropTypes.arrayOf(PropTypes.object),
  setFilteredArray: PropTypes.func,
  sortingParameter: PropTypes.bool,
  setSortingParameter: PropTypes.func,
  isDialogOpen: PropTypes.bool,
  setDialogState: PropTypes.func,
  addNote: PropTypes.func,
};

NotesListMenu.defaultProps = {
  userEmail: "",
  notesArray: [],
  selectedIndex: null,
  changeSelectedIndex: () => {},
  isOnSharedNotes: false,
  filteredArray: [],
  setFilteredArray: () => {},
  sortingParameter: false,
  setSortingParameter: () => {},
  isDialogOpen: false,
  setDialogState: () => {},
  addNote: () => {},
};

export default NotesListMenu;
