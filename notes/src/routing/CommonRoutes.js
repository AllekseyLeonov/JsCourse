import React from "react";
import { Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import ROUTES from "@constants/routes";
// eslint-disable-next-line import/no-unresolved
import About from "@pages/about";
// eslint-disable-next-line import/no-unresolved
import Error404 from "@pages/errors";

const CommonRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.about} component={About} />
    <Route component={Error404} />
  </Switch>
);

export default CommonRoutes;
