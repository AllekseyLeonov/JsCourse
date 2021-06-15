import React, { useState } from "react";
import { connect } from "react-redux";

// eslint-disable-next-line import/no-unresolved
import { getSharedNoteLink } from "@utils/textFormatUtils";
// eslint-disable-next-line import/no-unresolved
import { updateSharedNotesArray } from "@utils/arrayProcessingUtils";
import PropTypes from "prop-types";
import ActiveNote from "./ActiveNote";

const ActiveNoteContainer = ({
  selectedItem,
  updateNote,
  userEmail,
  isOnSharedNotes,
}) => {
  const [isDialogOpen, setDialogState] = useState(false);
  const [isSnackbarOpen, setSnackbarState] = useState(false);

  const handleShareBtnClick = (email, note) => {
    navigator.clipboard.writeText(getSharedNoteLink(email, note.id));
    updateSharedNotesArray(note, email);
    setSnackbarState(true);
  };

  return (
    <ActiveNote
      selectedItem={selectedItem}
      updateNote={updateNote}
      userEmail={userEmail}
      isOnSharedNotes={isOnSharedNotes}
      isDialogOpen={isDialogOpen}
      setSnackbarState={setSnackbarState}
      isSnackbarOpen={isSnackbarOpen}
      setDialogState={setDialogState}
      handleShareBtnClick={handleShareBtnClick}
    />
  );
};

ActiveNoteContainer.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
    userEmail: PropTypes.string,
  }),
  updateNote: PropTypes.func,
  userEmail: PropTypes.string,
  isOnSharedNotes: PropTypes.bool,
};

ActiveNoteContainer.defaultProps = {
  selectedItem: null,
  updateNote: () => {},
  userEmail: "",
  isOnSharedNotes: false,
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

export default connect(setStateToProps)(ActiveNoteContainer);
