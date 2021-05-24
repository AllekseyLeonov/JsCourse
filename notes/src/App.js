import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HeaderMenu from "./components/HeaderMenu";
import NotesContainer from "./pages/notes/NotesContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import About from "./pages/about/About";
import Error404 from "./pages/errors/Error404";

const App = () => (
  <BrowserRouter>
    <HeaderMenu />
    <Switch>
      <Route exact path="/JsCourse" component={NotesContainer} />
      <Route
        exact
        path="/JsCourse/SharedNotes"
        component={SharedNotesContainer}
      />
      <Route exact path="/JsCourse/About" component={About} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>
);

export default App;
