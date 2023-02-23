import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import "./Drawer.css";

import { Link as RouterLink, useLocation, Outlet } from "react-router-dom";

//Icons
import KeyboardDoubleArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowLeftTwoTone";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import menu_items from "./menu_items";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",

  background: "#fff",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  background: "#fff",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  padding: theme.spacing(0, 0),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    direction: localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",

    width:
      localStorage.getItem("language") !== "arabic"
        ? `calc(100% - ${drawerWidth}px)`
        : "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      direction: localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    padding: "0 4px",
  },
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const [countNotifications, setCountNotifications] = React.useState(1);

  const handleDrawerOpen = () => {
    setOpen(true);
    setCountNotifications(0);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:
          localStorage.getItem("language") === "arabic" ? "row-reverse" : "row",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          boxShadow: 0,
          background: "rgb(247,250,252)",
          borderBottom: ".5px solid #d9d9d9",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            flexDirection:
              localStorage.getItem("language") === "arabic"
                ? "row-reverse"
                : "row",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "#000",
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {open === true ? (
              <IconButton
                onClick={handleDrawerClose}
                sx={{
                  color: "#000",
                  marginLeft: 0,
                }}
              >
                <KeyboardDoubleArrowLeftTwoToneIcon />
              </IconButton>
            ) : (
              ""
            )}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            sx={{ color: "#fff", TextDecoration: "none" }}
          ></Typography>
          <Typography sx={{ flexGrow: 1 }}></Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerClose}
            sx={{
              // color: "#ffffff",
              marginLeft: "auto",
              marginRight: 5,
            }}
          >
            <StyledBadge
              badgeContent={countNotifications}
              color="error"
              to="/notifications"
              component={RouterLink}
              sx={{
                color: "#000",
              }}
            >
              <NotificationsTwoToneIcon />
            </StyledBadge>
          </IconButton>

          <Typography
            variant="subtitle1"
            sx={{ paddingRight: 1, cursor: "pointer" }}
          ></Typography>
          <IconButton to="account">
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 30, height: 30 }}
              to="account"
              component={RouterLink}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={
          {
            // background: "#1A2027"
          }
        }
        anchor={
          localStorage.getItem("language") === "arabic" ? "right" : "left"
        }
      >
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar
            variant="dense"
            sx={{
              boxShadow: 0,
              height: 40,
              color: "#ffffff",
              backgroundColor: "#ffffff",
            }}
          >
            <DrawerHeader
              sx={{
                color: "#000000",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography
                className="logo"
                sx={{
                  display: "flex",
                  textAlign: "start",
                  alignItems: "center",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                123AUC ADMIN PANEL
              </Typography>
            </DrawerHeader>
          </Toolbar>
        </AppBar>
        <Divider />
        {/* Menu List */}
        <List
          sx={
            {
              // background: "#1A2027",
            }
          }
        >
          {menu_items.map((item, idx) => (
            <div key={idx}>
              {item.isheader && open && (
                <ListItemText
                  primary={
                    localStorage.getItem("language") === "arabic"
                      ? item.arabic
                      : item.name
                  }
                  primaryTypographyProps={{
                    fontSize: 18,
                    padding: "5px 10px",
                  }}
                  
                  sx={{
                    color: "rgb(85,85,85)",
                    padding: "5px 10px",
                    textAlign:
                      localStorage.getItem("language") === "arabic"
                        ? "right"
                        : "left",
                    alignItems: "center",
                    display: "flex",
                    justifyContent:
                      localStorage.getItem("language") === "arabic"
                        ? "right"
                        : "left",
                    marginBottom: 1,
                  }}
                />
              )}

              {!item.isheader && (
                <ListItemButton
                  key={item.label}
                  sx={{
                    py: 0,
                    minHeight: 32,

                    ":hover":   {
                      boxShadow: "1px 2px 3px #d9d9d9",
                    },
                  }}
                  to={item.url}
                  component={RouterLink}
                  className={location.pathname === item.url ? "active " : null}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      fontSize: 14,
                      color:
                        location.pathname === item.url ? "#ffffff" : "#888",
                      // color: "#ffffff",

                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      localStorage.getItem("language") === "arabic"
                        ? item.arabic
                        : item.name
                    }
                    primaryTypographyProps={{
                      fontSize: 14,
                    }}
                    direction={
                      localStorage.getItem("language") === "arabic" ? "rtl" : "left"
                    }
                    style={{
                      textAlign: localStorage.getItem("language") === "arabic" ? "right" : "left",

                    }}
                  />
                </ListItemButton>
              )}
            </div>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1, pt: 5 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
