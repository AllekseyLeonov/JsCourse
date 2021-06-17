import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  NotesContainer: {
    display: "flex",
    width: "90%",
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ActiveNoteTitle: {
    textAlign: "center",
  },
  ActiveNoteContent: {
    wordWrap: "break-word",
    textAlign: "justify",
  },
  NotesListMenu: {
    height: "auto",
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  DialogInputField: {
    width: "100%",
  },
  NotesButtons: {
    backgroundColor: "rgba(196, 116, 69, 0.7)",
    color: "white",
  },
  WithMargin: {
    margin: "10px 10px",
  },
  NotesList: { maxHeight: "400px", overflow: "auto" },
}));

const DEFAULT_NOTES_COLOR = "rgba(255, 255, 0, 0.3)";
const CUSTOM_NOTES_COLOR = "rgba(0, 255, 0, 0.3)";

export const setItemStyle = (isDragging, draggableStyle, item) => ({
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

export default styles;
