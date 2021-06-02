import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import HeaderMenu from "./components/HeaderMenu";
import NotesContainer from "./pages/notes/NotesContainer";
import SharedNotesContainer from "./pages/sharedNotes/sharedNotesContainer";
import About from "./pages/about/About";
import Error404 from "./pages/errors/Error404";

import ROUTES from "./config/constants/ROUTES";

import rootReducer from "./redux/reducer";

const store = createStore(rootReducer);
const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <HashRouter basename="/">
        <HeaderMenu />
        <Switch>
          <Route exact path={ROUTES.notes} component={NotesContainer} />
          <Route
            exact
            path={ROUTES.sharedNotes}
            component={SharedNotesContainer}
          />
          <Route exact path={ROUTES.about} component={About} />
          <Route component={Error404} />
        </Switch>
        <Redirect from="/" to="/notes" />
      </HashRouter>
    </QueryClientProvider>
  </Provider>
);

export default App;
