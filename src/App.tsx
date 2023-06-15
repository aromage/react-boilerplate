import MyRouter from "routers/index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, grey, green, purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[500],
    },
    success: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
    info: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <ThemeProvider theme={theme}>
        <MyRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
