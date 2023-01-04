import { StyledEngineProvider } from "@mui/material/styles";

export default function ThemeProvider({ children }) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
