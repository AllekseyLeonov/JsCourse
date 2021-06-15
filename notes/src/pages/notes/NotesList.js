import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Grid,
} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import NoteIcon from "@material-ui/icons/Note";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import { SORT_PARAMETERS, reorder } from "@utils/arrayProcessingUtils";
// eslint-disable-next-line import/no-unresolved
import { getPreviewString } from "@utils/textFormatUtils";
import styles, { setItemStyle } from "./styles";

const LENGTH_OF_NOTE_CONTENT_PREVIEW = 20;

const NotesList = ({
  notesArray,
  selectedIndex,
  setSelectedIndex,
  setFilteredArray,
  setSortingParameter,
}) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      notesArray,
      result.source.index,
      result.destination.index
    );

    setSortingParameter(SORT_PARAMETERS.none);
    setFilteredArray(items);
  };

  const classes = styles();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(droppableProvided) => (
          <RootRef rootRef={droppableProvided.innerRef}>
            <List className={classes.NotesList}>
              {notesArray.map((item, index) => (
                <Draggable
                  key={item.userEmail + item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(draggableProvided, snapshot) => (
                    <ListItem
                      button
                      selected={selectedIndex === item.id}
                      onClick={() => setSelectedIndex(item.id)}
                      ContainerComponent="li"
                      ContainerProps={{ ref: draggableProvided.innerRef }}
                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...draggableProvided.draggableProps}
                      /* eslint-disable-next-line react/jsx-props-no-spreading */
                      {...draggableProvided.dragHandleProps}
                      style={setItemStyle(
                        snapshot.isDragging,
                        draggableProvided.draggableProps.style,
                        item
                      )}
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
                      <ListItemSecondaryAction />
                    </ListItem>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </List>
          </RootRef>
        )}
      </Droppable>
    </DragDropContext>
  );
};

NotesList.propTypes = {
  notesArray: PropTypes.arrayOf(PropTypes.object),
  selectedIndex: PropTypes.number,
  setSelectedIndex: PropTypes.func,
  setFilteredArray: PropTypes.func,
  setSortingParameter: PropTypes.func,
};

NotesList.defaultProps = {
  notesArray: [],
  selectedIndex: null,
  setSelectedIndex() {},
  setFilteredArray: () => {},
  setSortingParameter: () => {},
};

export default NotesList;
