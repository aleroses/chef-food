import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import {
  Menu as MenuIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";

const navLinks = [
  {
    title: "Home",
    path: "#",
    icon: <InboxIcon />,
  },
  {
    title: "About",
    path: "#about",
    icon: <DraftsIcon />,
  },
  {
    title: "Menu",
    path: "#menu",
    icon: <DraftsIcon />,
  },
  {
    title: "Recipes",
    path: "#recipes",
    icon: <DraftsIcon />,
  },
  {
    title: "Contact",
    path: "#contact",
    icon: <DraftsIcon />,
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            aria-label=""
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <RestaurantMenuIcon
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Chef Food
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component="a"
                href={item.path}
                color="inherit"
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          "& .MuiDrawer-paper": {
            backgroundColor: "secondary.main",
          },
        }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
