import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// eslint-disable-next-line import/no-unresolved
import BodyContainer from "@components/BodyContainer";
// eslint-disable-next-line import/no-unresolved
import { updateSharedNotesArray } from "@utils/arrayProcessingUtils";
// eslint-disable-next-line import/no-unresolved
import { useGetNotes } from "@api/api";
import styles from "./styles";

const PreviewSharedNote = ({ match, userEmail }) => {
  const [sharedNote, setSharedNote] = useState({ title: "", content: "" });

  const onResponseSuccess = (data) => {
    setSharedNote(() => {
      const newNote = data.data.filter(
        (note) =>
          note.userEmail === match.params.userEmail &&
          note.id === match.params.noteId
      )[0];
      newNote.id = Number(newNote.id);
      return newNote;
    });
  };

  useGetNotes(onResponseSuccess);

  const classes = styles();

  return sharedNote ? (
    <BodyContainer>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">{sharedNote.title}</Typography>
        <Typography variant="h5">{sharedNote.content}</Typography>
        <Button
          variant="contained"
          className={classes.AddNoteButton}
          onClick={updateSharedNotesArray(sharedNote, userEmail)}
        >
          Add to shared notes
        </Button>
      </Grid>
    </BodyContainer>
  ) : (
    <BodyContainer>
      <Typography variant="h3">Link is not valid</Typography>
    </BodyContainer>
  );
};

PreviewSharedNote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userEmail: PropTypes.string,
      noteId: PropTypes.string,
    }),
  }),
  userEmail: PropTypes.string,
};

PreviewSharedNote.defaultProps = {
  match: null,
  userEmail: "",
};

const setStateToProps = (state) => ({
  userEmail: state.auth.email,
});

export default connect(setStateToProps)(PreviewSharedNote);
