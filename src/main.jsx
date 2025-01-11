import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);