import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import "./styles.css";
import ActiveNoteEditingDialog from "./ActiveNoteEditingDialog";

const ActiveNoteContainer = ({ children }) => (
  <Grid className="ActiveNote" container item xs={9} wrap="nowrap">
    {children}
  </Grid>
);

const ActiveNote = ({ selectedItem, updateNote }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  if (!selectedItem) {
    return (
      <ActiveNoteContainer>
        <Typography variant="h3">Select note to display</Typography>
      </ActiveNoteContainer>
    );
  }
  return (
    <ActiveNoteContainer>
      <Grid container direction="column" alignItems="center">
        <Typography className="ActiveNoteTitle" variant="h3">
          {selectedItem.title}
        </Typography>
        <Typography className="ActiveNoteContent" variant="h5">
          {selectedItem.content}
        </Typography>
      </Grid>
      <Button
        onClick={() => setDialogOpen(true)}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        {" "}
        Edit{" "}
      </Button>
      <ActiveNoteEditingDialog
        noteTitle={selectedItem.title}
        noteContent={selectedItem.content}
        isOpen={isDialogOpen}
        setOpen={setDialogOpen}
        updateNote={updateNote}
      />
    </ActiveNoteContainer>
  );
};

ActiveNote.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string,
  }),
  updateNote: PropTypes.func,
};

ActiveNote.defaultProps = {
  selectedItem: null,
  updateNote: () => {},
};

ActiveNoteContainer.propTypes = {
  children: PropTypes.element,
};

ActiveNoteContainer.defaultProps = {
  children: <div />,
};

export default ActiveNote;
