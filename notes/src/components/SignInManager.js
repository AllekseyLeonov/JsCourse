import React, { useState } from "react";

import ProfileInfo from "./ProfileInfo";
import SignInMenu from "./SignInMenu";
import { USER_DATA_KEY } from "../config/constants/LOCAL_STORAGE_KEYS";

const SignInManager = () => {
  const [isAuthorized, setIsAuthorised] = useState(
    Boolean(localStorage.getItem(USER_DATA_KEY))
  );
  return isAuthorized ? (
    <ProfileInfo setIsAuthorised={setIsAuthorised} />
  ) : (
    <SignInMenu setIsAuthorised={setIsAuthorised} />
  );
};

export default SignInManager;
