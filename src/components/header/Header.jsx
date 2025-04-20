import { Grid } from "@mui/material";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <Grid
      id="header"
      component="header"
      // sx={{ m: 5 }}
    >
      <Navbar />
    </Grid>
  );
};
