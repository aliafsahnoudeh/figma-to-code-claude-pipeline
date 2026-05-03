import React from 'react';
import MuiZoom from '@mui/material/Zoom';
import type { ZoomProps as MuiZoomProps } from '@mui/material/Zoom';

export interface ZoomProps extends MuiZoomProps {
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
 * Zoom component - flexible wrapper around MUI Zoom
 *
 * Transition component that zooms children in and out.
 *
 * @example
 * ```tsx
 * <Zoom in={show}>
 *   <Fab color="primary">
 *     <AddIcon />
 *   </Fab>
 * </Zoom>
 * ```
 */
export const Zoom = React.forwardRef<HTMLDivElement, ZoomProps>(function Zoom(props, ref) {
  return <MuiZoom ref={ref} {...props} />;
});
