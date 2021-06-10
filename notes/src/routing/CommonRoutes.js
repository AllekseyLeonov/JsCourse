import React from "react";
import { Route, Switch } from "react-router-dom";

import ROUTES from "../config/constants/ROUTES";
import About from "../pages/about";
import Error404 from "../pages/errors";

const CommonRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.about} component={About} />
    <Route component={Error404} />
  </Switch>
);

export default CommonRoutes;
