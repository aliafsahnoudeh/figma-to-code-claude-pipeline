import React from 'react';
import MuiPaper from '@mui/material/Paper';
import type { PaperProps as MuiPaperProps } from '@mui/material/Paper';

export interface PaperProps extends MuiPaperProps {
  /**
   * Paper content
   */
  children?: React.ReactNode;
}

/**
 * Paper component - flexible wrapper around MUI Paper
 *
 * Surface with elevation (shadow) effect.
 *
 * @example
 * ```tsx
 * <Paper elevation={3}>
 *   <Box p={2}>Content with shadow</Box>
 * </Paper>
 * ```
 */
export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(function Paper(props, ref) {
  return <MuiPaper ref={ref} {...props} />;
});
