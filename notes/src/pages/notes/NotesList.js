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

const NotesList = ({ notesArray, selectedIndex, setSelectedIndex }) => {
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <List>
      {notesArray.map((item) => (
        <ListItem
          button
          selected={selectedIndex === item.id}
          onClick={() => handleListItemClick(item.id)}
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
};

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
