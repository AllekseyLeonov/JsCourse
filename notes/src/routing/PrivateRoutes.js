import React from "react";
import { Route, Switch } from "react-router-dom";

import NotesContainer from "../pages/notes";
import ROUTES from "../config/constants/ROUTES";
import SharedNotesContainer from "../pages/sharedNotes";
import About from "../pages/about";
import Error404 from "../pages/errors";

const PrivateRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.notes} component={NotesContainer} />
    <Route exact path={ROUTES.sharedNotes} component={SharedNotesContainer} />
    <Route exact path={ROUTES.about} component={About} />
    <Route component={Error404} />
  </Switch>
);

export default PrivateRoutes;
