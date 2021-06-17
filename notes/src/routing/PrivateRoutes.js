import React from "react";
import { Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import ROUTES from "@constants/routes";
// eslint-disable-next-line import/no-unresolved
import SharedNotesContainer, { PreviewSharedNote } from "@pages/sharedNotes";
// eslint-disable-next-line import/no-unresolved
import About from "@pages/about";
// eslint-disable-next-line import/no-unresolved
import Error404 from "@pages/errors";
// eslint-disable-next-line import/no-unresolved
import NotesContainer from "@pages/notes";

const PrivateRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.notes} component={NotesContainer} />
    <Route path={ROUTES.sharedNotesWithParams} component={PreviewSharedNote} />
    <Route exect path={ROUTES.sharedNotes} component={SharedNotesContainer} />
    <Route exact path={ROUTES.about} component={About} />
    <Route component={Error404} />
  </Switch>
);

export default PrivateRoutes;
