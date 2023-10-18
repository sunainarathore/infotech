import * as React from "react";
import {
  Grid,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "../../stylesheet/Style.css";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const pages = [
  "Dashboard",
  "Jobs",
  "Technicians",
  "Calender",
  "Customers",
  "Invoices & Payments",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="Header-section" position="static">
      <Grid direction="row">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Box
              className="dashboard-header-section"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <List
                className="dashboard-header-list"
                aria-label="main Dashboard list"
              >
                <ListItem className="dashboard-header-listitem">
                  <ListItemButton
                    className="dashboard-header-listitembutton"
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemIcon className="dashboard-header-listitemicon">
                      <GridViewOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-header-listitemtext">
                      Dashboard
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="dashboard-header-listitem">
                  <ListItemButton
                    className="dashboard-header-listitembutton"
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <ListItemIcon className="dashboard-header-listitemicon">
                      <EventNoteOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-header-listitemtext">
                      Jobs
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="dashboard-header-listitem">
                  <ListItemButton
                    className="dashboard-header-listitembutton"
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemIcon className="dashboard-header-listitemicon">
                      <WorkOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-header-listitemtext">
                      Technicians
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="dashboard-header-listitem">
                  <ListItemButton
                    className="dashboard-header-listitembutton"
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemIcon className="dashboard-header-listitemicon">
                      <CalendarMonthOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-header-listitemtext">
                      Calender
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="dashboard-header-listitem">
                  <ListItemButton
                    className="dashboard-header-listitembutton"
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                  >
                    <ListItemIcon className="dashboard-header-listitemicon">
                      <PeopleAltOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-header-listitemtext">
                      Customers
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="dashboard-header-listitem">
                  <ListItemButton
                    className="dashboard-header-listitembutton"
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                  >
                    <ListItemIcon className="dashboard-header-listitemicon">
                      <DescriptionOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText className="dashboard-header-listitemtext">
                      Invoices & Payments
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid justifyContent="flex-end" alignItems="flex-start">
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
export default Header;
