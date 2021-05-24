import React from "react";
import { Typography } from "@material-ui/core";

import BodyContainer from "../../components/BodyContainer";

const Error404 = () => (
  <BodyContainer>
    <Typography variant="h1" style={{ textAlign: "center" }}>
      Page not found
    </Typography>
  </BodyContainer>
);

export default Error404;
