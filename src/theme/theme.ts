import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5722", // identity orange
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#795548", // warm brown
      contrastText: "#ffffff",
    },
    background: {
      default: "#FAFAFA",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#4F4F4F",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1.1rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      fontWeight: 600,
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 12,
          textTransform: "none", // disable UPPERCASE
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
