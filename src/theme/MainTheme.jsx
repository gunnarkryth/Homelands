import { createTheme } from "@mui/material";

export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    accent: {
      primary: "#AF7627",
      secondary: "#FED9C9",
    },
  },
  typography: {
    fontFamily: ["Odibee", "sans-serif"].join(","),
  },
});
