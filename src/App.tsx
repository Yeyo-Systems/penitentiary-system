// App.tsx

import { CssBaseline, ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from './theme';
import { ThemeMode } from './types';

export const App = () => {
  // Por ahora establecemos el tema de forma "manual"
  // hasta que lo obtengamos del store con un selector
  const themeMode = ThemeMode.LIGHT;

  return (
    <ThemeProvider theme={themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>React App From Scratch</div>
    </ThemeProvider>
  );
};
