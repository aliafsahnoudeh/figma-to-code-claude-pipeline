'use client';

import React from 'react';
// Use v15-appRouter which is compatible with Next.js 13-16
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { loadProductTokens, ProductKey } from './tokens.js';
import { createTheme } from './createTheme.js';

export interface NextThemeProviderProps {
  productKey: ProductKey | string;
  children: React.ReactNode;
  /**
   * Options for AppRouterCacheProvider
   */
  cacheOptions?: {
    key?: string;
    enableCssLayer?: boolean;
  };
  /**
   * Enable CSS variables for the theme (MUI v6+)
   * Recommended for Next.js applications to prevent SSR flickering
   */
  cssVariables?: boolean;
}

/**
 * Next.js App Router ThemeProvider that integrates with MUI's AppRouterCacheProvider
 *
 * This component should be used in Next.js App Router applications to ensure proper
 * CSS injection and hydration. It wraps the standard ThemeProvider with Next.js-specific
 * optimizations.
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import { NextThemeProvider } from '@taskflow/themes';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html lang="en">
 *       <body>
 *         <NextThemeProvider productKey="taskflow">
 *           {children}
 *         </NextThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export function NextThemeProvider({
  productKey,
  children,
  cacheOptions,
  cssVariables = false,
}: NextThemeProviderProps) {
  const tokens = loadProductTokens(productKey);
  const theme = createTheme(tokens, cssVariables ? ({ cssVariables } as any) : undefined);

  return (
    <AppRouterCacheProvider options={cacheOptions}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
