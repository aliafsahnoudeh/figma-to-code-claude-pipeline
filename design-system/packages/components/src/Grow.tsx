import React from 'react';
import MuiGrow from '@mui/material/Grow';
import type { GrowProps as MuiGrowProps } from '@mui/material/Grow';

export interface GrowProps extends MuiGrowProps {
  /**
   * If true, the component will transition in
   */
  in?: boolean;

  /**
   * A single child content element
   */
  children: React.ReactElement;
}

/**
 * Grow component - flexible wrapper around MUI Grow
 *
 * Transition component that scales children in and out.
 *
 * @example
 * ```tsx
 * <Grow in={show}>
 *   <div>Content to grow</div>
 * </Grow>
 * ```
 */
export const Grow = React.forwardRef<HTMLDivElement, GrowProps>(function Grow(props, ref) {
  return <MuiGrow ref={ref} {...props} />;
});
