import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ClerkProvider } from "@clerk/react";
import theme from "@/lib/mui-theme";
import App from "./App.tsx";
import "./index.css";

const CLERK_PUBLISHABLE_KEY = 'pk_test_c2VjdXJlLWN1Yi05OS5jbGVyay5hY2NvdW50cy5kZXYk';

createRoot(document.getElementById("root")!).render(
  <ClerkProvider
    publishableKey={CLERK_PUBLISHABLE_KEY}
    appearance={{
      baseTheme: "dark",
    }}
  >
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </ClerkProvider>
);
