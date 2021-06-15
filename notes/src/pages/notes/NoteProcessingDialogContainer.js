import React, { useState } from "react";
import PropTypes from "prop-types";
import NoteProcessingDialog from "./NoteProcessingDialog";

const NoteProcessingDialogContainer = ({
  dialogTitle,
  noteTitle,
  noteContent,
  isOpen,
  setOpen,
  onSubmit,
}) => {
  const [isTitleCorrect, setIsTitleCorrect] = useState(true);
  const [isContentCorrect, setIsContentCorrect] = useState(true);

  return (
    <NoteProcessingDialog
      dialogTitle={dialogTitle}
      noteTitle={noteTitle}
      noteContent={noteContent}
      isOpen={isOpen}
      setOpen={setOpen}
      onSubmit={onSubmit}
      isTitleCorrect={isTitleCorrect}
      setIsTitleCorrect={setIsTitleCorrect}
      isContentCorrect={isContentCorrect}
      setIsContentCorrect={setIsContentCorrect}
    />
  );
};
NoteProcessingDialogContainer.propTypes = {
  dialogTitle: PropTypes.string,
  noteTitle: PropTypes.string,
  noteContent: PropTypes.string,
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
  onSubmit: PropTypes.func,
};

NoteProcessingDialogContainer.defaultProps = {
  dialogTitle: "",
  noteTitle: "",
  noteContent: "",
  isOpen: false,
  setOpen: () => {},
  onSubmit: () => {},
};

export default NoteProcessingDialogContainer;
