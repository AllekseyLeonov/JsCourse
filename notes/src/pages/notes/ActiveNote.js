import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import styles from "./styles";
import ActiveNoteEditingDialog from "./ActiveNoteEditingDialog";

const ActiveNote = ({ selectedItem }) => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  return (
    <Grid
      style={styles.activeNote}
      container
      wrap="nowrap"
      alignItems="flex-start"
    >
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">{selectedItem.title}</Typography>
        <Typography variant="h5">{selectedItem.content}</Typography>
      </Grid>
      <Button onClick={() => setDialogOpen(true)}> Edit </Button>
      <ActiveNoteEditingDialog
        selectedItem={selectedItem}
        isOpen={isDialogOpen}
        setOpen={setDialogOpen}
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
};

ActiveNote.defaultProps = {
  selectedItem: { title: "Select note to display" },
};

export default ActiveNote;
