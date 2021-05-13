import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NoteIcon from "@material-ui/icons/Note";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const LENGTH_OF_NOTE_CONTENT_PREVIEW = 20;

const NotesGrid = ({ notesArray, selectedIndex, setSelectedIndex }) => {
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List>
      {notesArray.map((item) => (
        <ListItem
          button
          selected={selectedIndex === notesArray.indexOf(item)}
          onClick={(event) =>
            handleListItemClick(event, notesArray.indexOf(item))
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
            secondary={`${item.content.substr(
              0,
              LENGTH_OF_NOTE_CONTENT_PREVIEW
            )} ...`}
          />
        </ListItem>
      ))}
    </List>
  );
};

NotesGrid.propTypes = {
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
};

NotesGrid.defaultProps = {
  notesArray: [],
  selectedIndex: -1,
  setSelectedIndex() {},
};

export default NotesGrid;
