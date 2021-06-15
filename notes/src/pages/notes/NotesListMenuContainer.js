import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// eslint-disable-next-line import/no-unresolved
import { NOTES_ARRAY_KEY } from "@constants/LOCAL_STORAGE_KEYS";
// eslint-disable-next-line import/no-unresolved
import { formatDate } from "@utils/textFormatUtils";
// eslint-disable-next-line import/no-unresolved
import { SORT_PARAMETERS } from "@utils/arrayProcessingUtils";
import NotesListMenu from "./NotesListMenu";

const NotesListMenuContainer = ({
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

  return (
    <NotesListMenu
      userEmail={userEmail}
      notesArray={notesArray}
      selectedIndex={selectedIndex}
      changeSelectedIndex={changeSelectedIndex}
      isOnSharedNotes={isOnSharedNotes}
      filteredArray={filteredArray}
      setFilteredArray={setFilteredArray}
      sortingParameter={sortingParameter}
      setSortingParameter={setSortingParameter}
      isDialogOpen={isDialogOpen}
      setDialogState={setDialogState}
      addNote={addNote}
    />
  );
};

NotesListMenuContainer.propTypes = {
  userEmail: PropTypes.string,
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  changeSelectedIndex: PropTypes.func,
  setNotesArray: PropTypes.func,
  isOnSharedNotes: PropTypes.bool,
};

NotesListMenuContainer.defaultProps = {
  userEmail: "",
  notesArray: [],
  selectedIndex: null,
  changeSelectedIndex: () => {},
  setNotesArray: () => {},
  isOnSharedNotes: false,
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

export default connect(setStateToProps)(NotesListMenuContainer);
