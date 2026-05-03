export { ThemeProvider } from './ThemeProvider.js';
export { NextThemeProvider } from './NextThemeProvider.js';
export { createTheme } from './createTheme.js';
export { loadProductTokens, getAvailableProducts, validateTokens, ProductKey } from './tokens.js';
export { TokenSchema } from './schema/tokenSchema.js';
export type { Tokens, ButtonTokens, FieldTokens } from './schema/tokenSchema.js';

export { getTokens } from './getTokens.js';

// Re-export MUI's useTheme hook for accessing theme in components
export { useTheme } from '@mui/material/styles';
export type { Theme } from '@mui/material/styles';
