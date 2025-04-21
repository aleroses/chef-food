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
    path: "#header",
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

  const handleNavLinkClick = (id) => {
    const element = document.querySelector(id);

    if (element) {
      const yOffset = -64;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      // Example:
      // Tu elemento está 300px más abajo de la parte visible → getBoundingClientRect().top = 300
      // Has hecho scroll de 200px hacia abajo → window.pageYOffset = 200
      // Offset es -64 (navbar fijo) → yOffset = -64
      // y = 300 + 200 + (-64) = 436

      // console.log(element);
      // console.log(element.getBoundingClientRect());
      // console.log(element.getBoundingClientRect().top);
      // console.log(window.pageYOffset);
      // console.log(y);

      window.scrollTo({ top: y, behavior: "smooth" });
      // element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // cerrar el drawer
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        component="nav"
        // sx={{ display: "flex" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            aria-label=""
            edge="start"
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
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "accent.main",
              fontWeight: 700,
              pl: {
                md: 1,
              },
            }}
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
                // href={item.path}
                onClick={() =>
                  handleNavLinkClick(item.path)
                }
                color="inherit"
                sx={{
                  "&:hover, &:focus": {
                    bgcolor: "secondary.main",
                    color: "accent.tertiary",
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
                color: "primary.main",
                bgcolor: "accent.light",
                fontWeight: "600",
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
          onLinkClick={handleNavLinkClick}
        />
      </Drawer>
    </>
  );
};
