import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  ActiveNote: {
    padding: "50px 50px",
    height: "fit-content",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  HeaderItem: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "center",
    alignItems: "center",
  },
  NavLink: {
    textDecoration: "none",
    color: "white",
  },
  ActiveNavLink: {
    color: "yellow",
  },
  SignButtonBox: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  SignButton: {
    textDecoration: "none",
    textTransform: "none",
    color: "white",
  },
  Menu: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "0 30px",
    maxWidth: "300px",
  },
  MenuItem: {
    padding: "5px 0",
    display: "flex",
    width: "100%",
  },
  CenteredMenuItem: {
    alignSelf: "center",
    padding: "5px 0",
  },
  ProfileIcon: {
    transform: "scale(2, 2)",
    color: "rgb(196, 116, 69)",
  },
  NotesButtons: {
    backgroundColor: "rgba(196, 116, 69, 0.7)",
    color: "white",
  },
  FilterFieldTitle: {
    paddingRight: "20px",
  },
  FilterFieldSelect: {
    paddingRight: "20px",
    flexGrow: "1",
  },
  HeaderMenuAppBar: {
    backgroundColor: "rgb(196, 116, 69)",
  },
  HeaderMenuToolBar: {
    justifyContent: "space-around",
    height: "inherit",
    alignItems: "inherit",
  },
  RegistrationMenu: {
    width: "300px",
  },
  RegistrationMenuTitle: {
    color: "rgb(196, 116, 69)",
  },
  RegistrationMenuForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default styles;
