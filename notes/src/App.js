import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import HeaderMenu from "./components/HeaderMenu";
import NotesContainer from "./pages/notes/NotesContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import About from "./pages/about/About";
import Error404 from "./pages/errors/Error404";

const App = () => (
  <HashRouter basename="/">
    <HeaderMenu />
    <Switch>
      <Route exact path="/notes" component={NotesContainer} />
      <Route exact path="/shared-notes" component={SharedNotesContainer} />
      <Route exact path="/about" component={About} />
      <Route component={Error404} />
    </Switch>
    <Redirect from="/" to="/notes" />
  </HashRouter>
);

export default App;
