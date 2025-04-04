import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  Restaurant as RestIcon,
  Search as SearchIcon,
} from "@mui/icons-material";

export const NavListDrawer = ({ navLinks }) => {
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
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <Box
            component="form"
            autoComplete="off"
            // onSubmit={{}}
            sx={{ /* display: "grid", gap: 2 */ p: 2 }}
          >
            <TextField
              id=""
              label=""
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Search item"
              // value={{}}
              // onChange={{}}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </List>
      </nav>
    </Box>
  );
};
