import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import axios from "axios";
import { connect } from "react-redux";

import { notesApi } from "../../config/constants/API_CONFIG";
import BodyContainer from "../../components/BodyContainer";
import { updateSharedNotesArray } from "../../utils/arrayProcessingUtils";
import styles from "./styles";

const PreviewSharedNote = ({ match, userEmail }) => {
  const [sharedNote, setSharedNote] = useState({ title: "", content: "" });

  const { data } = useQuery("notes", () => axios(notesApi), {
    onSuccess: () => {
      setSharedNote(() => {
        const newNote = data.data.filter(
          (note) =>
            note.userEmail === match.params.userEmail &&
            note.id === match.params.noteId
        )[0];
        newNote.id = Number(newNote.id);
        return newNote;
      });
    },
  });

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
