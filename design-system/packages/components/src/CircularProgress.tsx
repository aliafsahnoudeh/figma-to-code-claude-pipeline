import React from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';
import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

export interface CircularProgressProps extends MuiCircularProgressProps {
  /**
   * The size of the component
   */
  size?: number | string;

  /**
   * The thickness of the circle
   */
  thickness?: number;
}

/**
 * CircularProgress component - flexible wrapper around MUI CircularProgress
 *
 * Displays a circular loading indicator.
 *
 * @example
 * ```tsx
 * <CircularProgress />
 * <CircularProgress size={60} thickness={4} />
 * ```
 */
export const CircularProgress = React.forwardRef<HTMLSpanElement, CircularProgressProps>(
  function CircularProgress(props, ref) {
    return <MuiCircularProgress ref={ref} {...props} />;
  }
);
