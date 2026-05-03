import React from 'react';
import MuiBackdrop from '@mui/material/Backdrop';
import type { BackdropProps as MuiBackdropProps } from '@mui/material/Backdrop';

export interface BackdropProps extends MuiBackdropProps {
  /**
   * If true, the component is shown
   */
  open: boolean;

  /**
   * Backdrop content (typically a loading spinner)
   */
  children?: React.ReactNode;
}

/**
 * Backdrop component - flexible wrapper around MUI Backdrop
 *
 * Displays a dimmed overlay, typically used with loading indicators or modals.
 *
 * @example
 * ```tsx
 * <Backdrop open={loading}>
 *   <CircularProgress color="inherit" />
 * </Backdrop>
 * ```
 */
export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  function Backdrop(props, ref) {
    return <MuiBackdrop ref={ref} {...props} />;
  }
);
