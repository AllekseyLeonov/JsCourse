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

import { SORT_PARAMETERS, reorder } from "../../utils/arrayProcessingUtils";
import { getPreviewString } from "../../utils/textFormatUtils";

const LENGTH_OF_NOTE_CONTENT_PREVIEW = 20;
const DEFAULT_NOTES_COLOR = "rgba(255, 255, 0, 0.3)";
const CUSTOM_NOTES_COLOR = "rgba(0, 255, 0, 0.3)";

const setItemStyle = (isDragging, draggableStyle, item) => ({
  ...draggableStyle,
  ...((isDragging && {
    background: "rgba(0, 0, 255, 0.3)",
  }) ||
    (!isDragging &&
      (item.userEmail === ""
        ? {
            background: DEFAULT_NOTES_COLOR,
          }
        : {
            background: CUSTOM_NOTES_COLOR,
          }))),
});

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
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(droppableProvided) => (
          <RootRef rootRef={droppableProvided.innerRef}>
            <List style={{ maxHeight: "400px", overflow: "auto" }}>
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
