import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { notesApi } from "../../config/constants/API_CONFIG";
import BodyContainer from "../../components/BodyContainer";

const PreviewSharedNote = ({ match }) => {
  const [sharedNote, setSharedNote] = useState({ title: "", content: "" });

  const { data } = useQuery("notes", () => axios(notesApi), {
    onSuccess: () => {
      setSharedNote(
        data.data.find(
          (note) =>
            note.userEmail === match.params.userEmail &&
            note.id === match.params.noteId
        )
      );
    },
  });

  return sharedNote ? (
    <BodyContainer>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h3">{sharedNote.title}</Typography>
        <Typography variant="h5">{sharedNote.content}</Typography>
        <Button variant="contained" style={{ marginTop: "20px" }}>
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
};

PreviewSharedNote.defaultProps = {
  match: null,
};

export default PreviewSharedNote;
