import React from 'react';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import type { BottomNavigationProps as MuiBottomNavigationProps } from '@mui/material/BottomNavigation';

export interface BottomNavigationProps extends MuiBottomNavigationProps {
  /**
   * BottomNavigation content (typically BottomNavigationAction components)
   */
  children?: React.ReactNode;
}

/**
 * BottomNavigation component - flexible wrapper around MUI BottomNavigation
 *
 * Bottom navigation bar for mobile-style navigation.
 *
 * @example
 * ```tsx
 * <BottomNavigation value={value} onChange={handleChange}>
 *   <BottomNavigationAction label="Home" icon={<HomeIcon />} />
 *   <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
 * </BottomNavigation>
 * ```
 */
export const BottomNavigation = React.forwardRef<HTMLDivElement, BottomNavigationProps>(
  function BottomNavigation(props, ref) {
    return <MuiBottomNavigation ref={ref} {...props} />;
  }
);
