import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MuiAppBarProps {
  /**
   * AppBar content (typically Toolbar)
   */
  children?: React.ReactNode;
}

/**
 * AppBar component - flexible wrapper around MUI AppBar
 *
 * Top application bar for navigation and branding.
 *
 * @example
 * ```tsx
 * <AppBar position="static">
 *   <Toolbar>
 *     <Typography variant="h6">My App</Typography>
 *   </Toolbar>
 * </AppBar>
 * ```
 */
export const AppBar = React.forwardRef<HTMLElement, AppBarProps>(function AppBar(props, ref) {
  return <MuiAppBar ref={ref} {...props} />;
});
