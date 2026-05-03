import React from 'react';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import type { BottomNavigationActionProps as MuiBottomNavigationActionProps } from '@mui/material/BottomNavigationAction';

export interface BottomNavigationActionProps extends MuiBottomNavigationActionProps {
  /**
   * The label element
   */
  label?: React.ReactNode;

  /**
   * The icon to display
   */
  icon?: React.ReactNode;
}

/**
 * BottomNavigationAction component - flexible wrapper around MUI BottomNavigationAction
 *
 * Individual action in a bottom navigation bar.
 *
 * @example
 * ```tsx
 * <BottomNavigationAction
 *   label="Home"
 *   icon={<HomeIcon />}
 *   value="home"
 * />
 * ```
 */
export const BottomNavigationAction = React.forwardRef<
  HTMLButtonElement,
  BottomNavigationActionProps
>(function BottomNavigationAction(props, ref) {
  return <MuiBottomNavigationAction ref={ref} {...props} />;
});
