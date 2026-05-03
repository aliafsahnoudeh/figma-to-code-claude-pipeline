import React from 'react';
import MuiPopover from '@mui/material/Popover';
import type { PopoverProps as MuiPopoverProps } from '@mui/material/Popover';

export interface PopoverProps extends MuiPopoverProps {
  /**
   * If true, the popover is visible
   */
  open: boolean;

  /**
   * An HTML element, or a function that returns one
   */
  anchorEl?: MuiPopoverProps['anchorEl'];

  /**
   * Callback fired when the component requests to be closed
   */
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;

  /**
   * Popover content
   */
  children?: React.ReactNode;
}

/**
 * Popover component - flexible wrapper around MUI Popover
 *
 * Displays floating content anchored to an element.
 *
 * @example
 * ```tsx
 * <Popover
 *   open={open}
 *   anchorEl={anchorEl}
 *   onClose={handleClose}
 *   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
 * >
 *   <Box p={2}>Popover content</Box>
 * </Popover>
 * ```
 */
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function Popover(props, ref) {
  return <MuiPopover ref={ref} {...props} />;
});
