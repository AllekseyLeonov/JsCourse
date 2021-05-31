import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import "./styles.css";
import ActiveNoteEditingDialog from "./ActiveNoteEditingDialog";
import BodyContainer from "../../components/BodyContainer";

const ActiveNote = ({ selectedItem, updateNote }) => {
  const [isDialogOpen, setDialogState] = useState(false);

  return selectedItem ? (
    <BodyContainer>
      <Grid container direction="column" alignItems="center">
        <Typography className="ActiveNoteTitle" variant="h3">
          {selectedItem.title}
        </Typography>
        <Typography className="ActiveNoteContent" variant="h5">
          {selectedItem.content}
        </Typography>
      </Grid>
      <Button
        onClick={() => setDialogState(!isDialogOpen)}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        {" "}
        Edit{" "}
      </Button>
      <ActiveNoteEditingDialog
        noteTitle={selectedItem.title}
        noteContent={selectedItem.content}
        isOpen={isDialogOpen}
        setOpen={setDialogState}
        updateNote={updateNote}
      />
    </BodyContainer>
  ) : (
    <BodyContainer>
      <Typography variant="h3">Select note to display</Typography>
    </BodyContainer>
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

export default ActiveNote;
