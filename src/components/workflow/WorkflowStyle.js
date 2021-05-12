import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 220;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    '& .MuiDrawer-paperAnchorDockedLeft': {
      borderRight: 'none',
    }
  },
  toolbar: {
    height: theme.spacing(4),
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    minHeight: 48,
  },
  appBar: {
    backgroundColor: "#0d6efd",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    boxShadow: "14.0351px 0px 25px rgba(86, 128, 248, 0.03), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02)",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    // overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7.5),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    minHeight: '50%',
    maxHeight: '100%',
  },
  menuIcon: {
    color: "#707C97",
  },
  list: {
    "& .MuiListItem-root": {
      "&:hover": {
        "& .MuiListItemIcon-root": {
          color: "#2A8BF2",
        },
        "& .MuiListItemText-root": {
          color: "#2A8BF2",
        },
      },
      "&.Mui-selected": {
        position: "relative",
        "& .MuiListItemIcon-root": {
          color: "#2A8BF2",
        },
        "& .MuiListItemText-root": {
          color: "#2A8BF2",
        },
        "&:after": {
          position: "absolute",
          content: "''",
          borderRight: "3px solid #2A8BF2",
          boxShadow: "1px 0px 10px rgba(42, 139, 242, 0.45), 0px 0px 10px rgba(42, 139, 242, 0.55), 4px 0px 25px rgba(42, 139, 242, 0.75)",
          height: "80%",
          // transform:" translateY(0%)",
          bottom: 4,
          left: 0
        },
      },

    },
  },
  listText: {
    color: "#707C97",
  },

  logoutList: {
    position: "absolute",
    width: "100%",
    bottom: 10,
  },
  listLink: {
    textDecoration: "none",
  },
}));