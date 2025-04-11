import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Badge,
} from "@mui/material";
import { NavListDrawer } from "./NavListDrawer";
import {
  Menu as MenuIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";
import { SearchInput } from "./SearchInput";

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
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Lógica de búsqueda aquí
    console.log("Buscar:", searchValue);
  };

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
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <RestaurantMenuIcon
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          />
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, color: "text.primary" }}
          >
            Chef Food
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component="a"
                href={item.path}
                color="inherit"
                sx={{
                  "&:hover, &:focus": {
                    bgcolor: "secondary.main",
                    color: "text.secondary",
                    opacity: 0.9,
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          <SearchInput
            value={searchValue}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
            sx={{
              display: { xs: "none", md: "block" },
              ml: 1,
            }}
          />

          <Badge
            badgeContent={4}
            sx={{
              ml: 2,
              "& .MuiBadge-badge": {
                right: -3,
                top: 3,
                border: `1px solid`,
                padding: "0 4px",
                color:"primary.main",
                bgcolor: "text.primary",
                fontWeight: "600"
              },
            }}
          >
            <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          "& .MuiDrawer-paper": {
            backgroundColor: "secondary.main",
          },
        }}
      >
        <NavListDrawer
          navLinks={navLinks}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
      </Drawer>
    </>
  );
};
