import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { alpha } from "@mui/material/styles";

import App from "./App.jsx";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#090b10",
      contrast: "#fff",
    },
    secondary: {
      main: "#0f111a",
    },
    accent: {
      main: "#FFB200",
      light: "#F3C623",
      tertiary: "#ffe92e",
    },
    background: {
      default: "#FCECDD",
      paper: "#ffffff",
    },
    text: {
      primary: "#c4c4c4",
      secondary: "#5a5a5a",
      disabled: "#9facbe",
    },
    warning: {
      main: "#FCF596",
    },
    food: {
      fresh: "#2ACE92", // Verde para elementos orgánicos
      spicy: "#FF766B", // Rojo para platos picantes
      purple: "#7865FF",
      yellow: "#F5B70A",
    },
    transparent: {
      white: {
        light: alpha("#c4c4c4", 0.05), // Para fondos claros
        medium: alpha("#fff", 0.3),
      },
      black: {
        light: alpha("#090b10", 0.1), // Para fondos oscuros
        medium: alpha("#090b10", 0.3),
      },
    },
  },
  // #4f46e5
  // #aaaaaa
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
