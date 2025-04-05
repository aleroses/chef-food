import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { SearchInput } from "./SearchInput";

export const NavListDrawer = ({
  navLinks,
  searchValue,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <Box
      sx={{
        width: 250,
        // height: "100%",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center"
        // backgroundColor: "primary.main",
      }}
    >
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component="a"
                href={item.path}
                sx={{
                  "&:hover, &:focus": {
                    bgcolor: "primary.main",
                    opacity: 0.9,
                  },
                }}
              >
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText
                  sx={{
                    // display: "flex",
                    // justifyContent: "center",
                    color: "primary.text",
                  }}
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
