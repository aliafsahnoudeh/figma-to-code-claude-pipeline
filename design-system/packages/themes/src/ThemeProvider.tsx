import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { loadProductTokens, ProductKey } from './tokens.js';
import { createTheme } from './createTheme.js';

export interface ThemeProviderProps {
  productKey: ProductKey | string;
  children: React.ReactNode;
}

/**
 * ThemeProvider that loads product tokens and provides MUI theme
 */
export function ThemeProvider({ productKey, children }: ThemeProviderProps) {
  const theme = React.useMemo(() => {
    const tokens = loadProductTokens(productKey);
    return createTheme(tokens);
  }, [productKey]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
