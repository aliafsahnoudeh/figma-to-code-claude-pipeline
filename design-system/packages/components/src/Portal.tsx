import React from 'react';
import MuiPortal from '@mui/material/Portal';
import type { PortalProps as MuiPortalProps } from '@mui/material/Portal';

export interface PortalProps extends MuiPortalProps {
  /**
   * Portal content
   */
  children?: React.ReactNode;

  /**
   * An HTML element or function that returns one. The container will have the portal children appended to it.
   */
  container?: MuiPortalProps['container'];
}

/**
 * Portal component - flexible wrapper around MUI Portal
 *
 * Renders children into a DOM node outside the parent component hierarchy.
 * Useful for modals, tooltips, and other overlay components.
 *
 * @example
 * ```tsx
 * <Portal>
 *   <div>This renders in document.body</div>
 * </Portal>
 *
 * <Portal container={customContainer}>
 *   <div>This renders in customContainer</div>
 * </Portal>
 * ```
 */
export const Portal = React.forwardRef<HTMLDivElement, PortalProps>(function Portal(props, ref) {
  return <MuiPortal ref={ref} {...props} />;
});
