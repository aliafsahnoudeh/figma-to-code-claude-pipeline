import React from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';
import type { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';

export interface LinearProgressProps extends MuiLinearProgressProps {
  /**
   * The value of the progress indicator for determinate variant
   */
  value?: number;

  /**
   * The variant of the progress indicator
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer' | 'query';
}

/**
 * LinearProgress component - flexible wrapper around MUI LinearProgress
 *
 * Displays a linear loading indicator.
 *
 * @example
 * ```tsx
 * <LinearProgress />
 * <LinearProgress variant="determinate" value={75} />
 * ```
 */
export const LinearProgress = React.forwardRef<HTMLSpanElement, LinearProgressProps>(
  function LinearProgress(props, ref) {
    return <MuiLinearProgress ref={ref} {...props} />;
  }
);
