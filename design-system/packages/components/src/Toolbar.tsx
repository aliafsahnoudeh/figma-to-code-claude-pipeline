import React from 'react';
import MuiToolbar from '@mui/material/Toolbar';
import type { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';

export interface ToolbarProps extends MuiToolbarProps {
  /**
   * Toolbar content
   */
  children?: React.ReactNode;
}

/**
 * Toolbar component - flexible wrapper around MUI Toolbar
 *
 * Container for AppBar content with proper spacing.
 *
 * @example
 * ```tsx
 * <Toolbar>
 *   <IconButton edge="start">
 *     <MenuIcon />
 *   </IconButton>
 *   <Typography variant="h6">Title</Typography>
 * </Toolbar>
 * ```
 */
export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(function Toolbar(props, ref) {
  return <MuiToolbar ref={ref} {...props} />;
});
