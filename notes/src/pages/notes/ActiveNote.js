import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

import styles from "./styles";
import ActiveNoteEditingDialog from "./ActiveNoteEditingDialog";

const ActiveNote = ({ selectedItem, updateNote }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  return (
    <Grid
      style={styles.activeNote}
      container
      wrap="nowrap"
      alignItems="flex-start"
    >
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">
          {selectedItem ? selectedItem.title : "Select note to display"}
        </Typography>
        <Typography variant="h5">
          {selectedItem ? selectedItem.content : ""}
        </Typography>
      </Grid>
      <Button onClick={() => setDialogOpen(true)}> Edit </Button>
      <ActiveNoteEditingDialog
        noteTitle={selectedItem.title}
        noteContent={selectedItem.content}
        isOpen={isDialogOpen}
        setOpen={setDialogOpen}
        updateNote={updateNote}
      />
    </Grid>
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
  selectedItem: { title: "Select note to display" },
  updateNote: () => {},
};

export default ActiveNote;
