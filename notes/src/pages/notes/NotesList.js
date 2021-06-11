import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NoteIcon from "@material-ui/icons/Note";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import { getPreviewString } from "../../utils/textFormatUtils";

const LENGTH_OF_NOTE_CONTENT_PREVIEW = 20;
const DEFAULT_NOTES_COLOR = "rgba(0, 0, 0, 0.1)";
const CUSTOM_NOTES_COLOR = "rgba(0, 255, 0, 0.3)";

const NotesList = ({ notesArray, selectedIndex, setSelectedIndex }) => (
  <List style={{ maxHeight: "400px", overflow: "auto" }}>
    {notesArray.map((item) => (
      <ListItem
        button
        selected={selectedIndex === item.id}
        onClick={() => setSelectedIndex(item.id)}
        style={
          item.userEmail === ""
            ? { backgroundColor: DEFAULT_NOTES_COLOR }
            : { backgroundColor: CUSTOM_NOTES_COLOR }
        }
      >
        <ListItemIcon>
          <NoteIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Grid container justify="space-between">
              <span>{item.title}</span>
              <span>{item.date}</span>
            </Grid>
          }
          secondary={getPreviewString(
            item.content,
            LENGTH_OF_NOTE_CONTENT_PREVIEW
          )}
        />
      </ListItem>
    ))}
  </List>
);

NotesList.propTypes = {
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
};

NotesList.defaultProps = {
  notesArray: [],
  selectedIndex: null,
  setSelectedIndex() {},
};

export default NotesList;
