import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Restaurant as RestIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { SearchInput } from "./SearchInput";

export const NavListDrawer = ({
  navLinks,
  searchValue,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
              >
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText
                  sx={{ color: "primary.text" }}
                >
                  {item.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <SearchInput
            value={searchValue}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
            sx={{
              // display: { md: "none" },
              p: 2,
            }}
          />
        </List>
      </nav>
    </Box>
  );
};
