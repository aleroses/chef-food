import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import App from "./App.jsx";
// import './index.css'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#090b10",
      text: "#fff",
    },
    secondary: {
      main: "#0f111a",
    },
    focus: {
      main: "#4f46e5",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
