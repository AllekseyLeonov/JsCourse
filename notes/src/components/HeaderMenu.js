import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

const HeaderMenu = () => (
  <AppBar position="static" style={{ backgroundColor: "rgb(196, 116, 69)" }}>
    <Toolbar
      style={{
        justifyContent: "space-around",
        height: "inherit",
        alignItems: "inherit",
      }}
    >
      <Button
        href="/JsCourse"
        style={{ flexGrow: "1", height: "inherit" }}
        color="inherit"
      >
        My notes
      </Button>
      <Button
        href="/JsCourse/SharedNotes"
        style={{ flexGrow: "1", height: "inherit" }}
        color="inherit"
      >
        Shared notes
      </Button>
      <Button
        href="/JsCourse/About"
        style={{ flexGrow: "1", height: "inherit" }}
        color="inherit"
      >
        About
      </Button>
    </Toolbar>
  </AppBar>
);

export default HeaderMenu;
