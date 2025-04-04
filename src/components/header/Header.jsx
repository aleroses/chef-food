import { Grid } from "@mui/material";
import { Navbar } from "./Navbar";

import "./header.css";

export const Header = () => {
  return (
    <Grid
      component="header"
      className="head"
      // sx={{ m: 5 }}
    >
      <Navbar />
    </Grid>
  );
};
