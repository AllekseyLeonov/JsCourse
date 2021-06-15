import React from "react";
import { Typography } from "@material-ui/core";

import BodyContainer from "../../components/BodyContainer";
import styles from "./styles";

const Error404 = () => (
  <BodyContainer>
    <Typography variant="h1" style={styles.centered}>
      Error 404 - Page not found
    </Typography>
  </BodyContainer>
);

export default Error404;
