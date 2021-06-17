import React from "react";
import { Typography } from "@material-ui/core";

// eslint-disable-next-line import/no-unresolved
import BodyContainer from "@components/BodyContainer";
import styles from "./styles";

const Error404 = () => (
  <BodyContainer>
    <Typography variant="h1" className={styles().centered}>
      Error 404 - Page not found
    </Typography>
  </BodyContainer>
);

export default Error404;
