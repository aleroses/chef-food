import { Grid } from "@mui/material";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <Grid
      component="header"
      // sx={{ m: 5 }}
    >
      <Navbar />
    </Grid>
  );
};
