import { CssBaseline } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <NavBar />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
