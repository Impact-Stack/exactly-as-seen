import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#8B5CF6" },
    secondary: { main: "#A78BFA" },
    background: { default: "#05050A", paper: "#0B0B12" },
    text: { primary: "#F8F8FB", secondary: "#B5B7C6" },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Space Grotesk", "Inter", system-ui, sans-serif', fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.95rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.01em" },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#0B0B12",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "none",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 999,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#0B0B12",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
