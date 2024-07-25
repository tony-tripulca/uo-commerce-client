import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import moment from "moment-timezone";

import { ThemeProvider, createTheme } from "@mui/material";
import { grey, orange } from "@mui/material/colors";

import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/700.css";

import "./App.scss";

import Global from "./util/global";
import AppRouter from "./AppRouter";

export default function App() {
  moment.tz.setDefault("Asia/Singapore");

  const [loading, setLoading] = useState({
    screen: false,
    component: false,
  });

  const [snackbar, setSnackbar] = useState({
    x: "right",
    y: "top",
    open: false,
    duration: 6000,
    text: "",
    severity: "succes",
  });

  const globals = {
    loading,
    setLoading,
    snackbar,
    setSnackbar,
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme()}>
        <Global.Provider value={globals}>
          <AppRouter />
        </Global.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

function customTheme() {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
    typography: {
      fontFamily: `"Ubuntu", sans-serif`,
    },
    palette: {
      white: {
        light: grey[50],
        main: grey[100],
        dark: grey[200],
        contrastText: "#000",
      },
      black: {
        light: grey[700],
        main: grey[900],
        dark: grey[800],
        contrastText: "#FFF",
      },
      orange: {
        light: orange[700],
        main: orange[900],
        dark: orange[800],
        contrastText: "#FFF",
      },
    },
  });
}
