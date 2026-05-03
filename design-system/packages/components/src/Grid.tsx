import React from 'react';
import MuiGrid from '@mui/material/Grid';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';

export interface GridProps extends MuiGridProps {
  /**
   * Grid content
   */
  children?: React.ReactNode;
}

/**
 * Grid component - flexible wrapper around MUI Grid
 *
 * Responsive grid layout system for organizing content.
 *
 * @example
 * ```tsx
 * <Grid container spacing={2}>
 *   <Grid item xs={12} md={6}>
 *     <Box>Column 1</Box>
 *   </Grid>
 *   <Grid item xs={12} md={6}>
 *     <Box>Column 2</Box>
 *   </Grid>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(function Grid(props, ref) {
  return <MuiGrid ref={ref} {...props} />;
});
