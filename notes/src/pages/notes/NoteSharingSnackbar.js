import React from "react";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import MuiAlert from "@material-ui/lab/Alert/Alert";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import { getSharedNoteLink } from "@utils/textFormatUtils";

const NoteSharingSnackbar = ({
  isSnackbarOpen,
  setSnackbarState,
  userEmail,
  id,
}) => (
  <Snackbar
    open={isSnackbarOpen}
    autoHideDuration={3000}
    onClose={() => setSnackbarState(false)}
  >
    <MuiAlert
      elevation={6}
      variant="filled"
      onClose={() => setSnackbarState(false)}
      severity="success"
    >
      Link copied: {getSharedNoteLink(userEmail, id)}
    </MuiAlert>
  </Snackbar>
);

NoteSharingSnackbar.propTypes = {
  isSnackbarOpen: PropTypes.bool,
  setSnackbarState: PropTypes.func,
  userEmail: PropTypes.string,
  id: PropTypes.string,
};

NoteSharingSnackbar.defaultProps = {
  setSnackbarState: () => {},
  userEmail: "",
  id: "",
  isSnackbarOpen: false,
};

export default NoteSharingSnackbar;
