import { Grid, Toolbar } from "@mui/material";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <Grid
      id="header"
      component="header"
      sx={{
        // display: "flex",
        // mb: 10
      }}
    >
      <Navbar />
      <Toolbar />
    </Grid>
  );
};
