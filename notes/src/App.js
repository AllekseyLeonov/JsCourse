import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import HeaderMenu from "./components/HeaderMenu";
import NotesContainer from "./pages/notes/NotesContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import About from "./pages/about/About";
import Error404 from "./pages/errors/Error404";
import ROUTES from "./config/constants/ROUTES";

const App = () => (
  <HashRouter basename="/">
    <HeaderMenu />
    <Switch>
      <Route exact path={ROUTES.notes} component={NotesContainer} />
      <Route exact path={ROUTES.sharedNotes} component={SharedNotesContainer} />
      <Route exact path={ROUTES.about} component={About} />
      <Route component={Error404} />
    </Switch>
    <Redirect from="/" to="/notes" />
  </HashRouter>
);

export default App;
