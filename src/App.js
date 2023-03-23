import React, { useState } from 'react';
import MyRouter from './routers/index';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'src/@fake-db';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    success: {
      main: green[500],
    },
  },
});

function App() {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            useErrorBoundary: true,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ThemeProvider theme={theme}>
          <MyRouter />
        </ThemeProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
