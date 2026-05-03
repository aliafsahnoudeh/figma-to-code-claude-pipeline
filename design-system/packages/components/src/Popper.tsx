import React from 'react';
import MuiPopper from '@mui/material/Popper';
import type { PopperProps as MuiPopperProps } from '@mui/material/Popper';

export interface PopperProps extends MuiPopperProps {
  /**
   * If true, the popper is visible
   */
  open: boolean;

  /**
   * An HTML element, virtualElement, or a function that returns either
   */
  anchorEl?: MuiPopperProps['anchorEl'];

  /**
   * Popper content
   */
  children?: React.ReactNode;
}

/**
 * Popper component - flexible wrapper around MUI Popper
 *
 * Low-level utility for positioning elements.
 * Used as a foundation for Tooltip, Menu, and other positioned components.
 *
 * @example
 * ```tsx
 * <Popper open={open} anchorEl={anchorEl}>
 *   <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
 *     Popper content
 *   </Box>
 * </Popper>
 * ```
 */
export const Popper = React.forwardRef<HTMLDivElement, PopperProps>(function Popper(props, ref) {
  return <MuiPopper ref={ref} {...props} />;
});
